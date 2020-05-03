const moment = require('moment');
moment.locale("zh-cn");

const secret = require("./secret")


module.exports =  {
    '@vuepress/last-updated':
        {
            transformer: (timestamp, lang) => {
                // 不要忘了安装 moment

                // moment.locale(lang)
                return moment(timestamp).format("LLLL")
            }
        },
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "大掌柜,发现新的功能可用",
            buttonText: "刷新"
        }
    },
    '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',

        // 其他的 Vssue 配置
        owner: 'lemonxiesf',
        repo: 'vuepress',
        clientId: secret.clientId,
        clientSecret: secret.clientSecret,
        autoCreateIssue: true
    },
    '@vuepress/back-to-top': true
}