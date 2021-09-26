(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{431:function(t,s,a){"use strict";a.r(s);var n=a(23),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("HTTPS（HyperText Transfer Protocol Secure）即超文本传输安全协议。HTTPS 经由 HTTP 进行通信，但利用 SSL/TLS 来加密数据包。")]),t._v(" "),a("h2",{attrs:{id:"阿里云证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阿里云证书"}},[t._v("#")]),t._v(" 阿里云证书")]),t._v(" "),a("h3",{attrs:{id:"_1-申请证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-申请证书"}},[t._v("#")]),t._v(" 1. 申请证书")]),t._v(" "),a("p",[t._v("阿里云也提供了 SSL 证书的功能，购买"),a("a",{attrs:{href:"https://common-buy.aliyun.com/?spm=5176.2020520163.cas.3.646456a7X7VPVZ&commodityCode=cas#/buy",target:"_blank",rel:"noopener noreferrer"}},[t._v("免费型 DV SSL"),a("OutboundLink")],1),t._v("（在小字提示中可以注意到免费证书可以申请 20 个），购买成功后会在 SSL 证书控制台看到一个未签发的证书。")]),t._v(" "),a("p",[t._v("点击申请，然后绑定域名即可，例如 "),a("code",[t._v("blog.shanyuhai.top")]),t._v("，稍等片刻即可等待审核完成。")]),t._v(" "),a("h3",{attrs:{id:"_2-安装证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装证书"}},[t._v("#")]),t._v(" 2. 安装证书")]),t._v(" "),a("p",[t._v("找到域名对应的证书，下载至本地，然后上传至服务器。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建证书目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /etc/nginx/certs\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拷贝证书到 certs 目录下")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" ~/downloads/blog.shanyuhai.top_nginx.zip /etc/nginx/certs\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解压")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" blog.shanyuhai.top_nginx.zip\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改命名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" 2813835_blog.shanyuhai.top.key blog.shanyuhai.top.key\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" 2813835_blog.shanyuhai.top.key blog.shanyuhai.top.key\n")])])]),a("h3",{attrs:{id:"_3-修改-conf-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改-conf-文件"}},[t._v("#")]),t._v(" 3. 修改 "),a("code",[t._v(".conf")]),t._v(" 文件")]),t._v(" "),a("p",[t._v("找到之前 Nginx 对应的 "),a("code",[t._v("blog.shanyuhai.top")]),t._v(" 的配置文件。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/nginx/conf.d/blog.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加如下内容")]),t._v("\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("443")]),t._v(" ssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name blog.shanyuhai.top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 证书文件")]),t._v("\n    ssl_certificate certs/blog.shanyuhai.top.pem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 秘钥文件")]),t._v("\n    ssl_certificate_key certs/blog.shanyuhai.top.key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    ssl_session_timeout 5m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("NULL:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("aNULL:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("MD5:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("ADH:"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("RC4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ssl_protocols TLSv1 TLSv1.1 TLSv1.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ssl_prefer_server_ciphers on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n    location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        root /var/www/html/blog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        index index.html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接着访问 https://blog.shanyuhai.top 验证")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-重定向-http-到-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-重定向-http-到-https"}},[t._v("#")]),t._v(" 4. 重定向 http 到 https")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将 80 端口的虚拟机修改为以下内容")]),t._v("\nserver "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name  blog.shanyuhai.top"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    access_log  /var/log/nginx/blog.access.log  main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    rewrite ^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" https://"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" permanent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" nginx -s reload "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启 nginx 服务")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 接着访问 http://blog.shanyuhai.top 验证")]),t._v("\n")])])]),a("h2",{attrs:{id:"let-s-encrypt-证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let-s-encrypt-证书"}},[t._v("#")]),t._v(" Let's Encrypt 证书")]),t._v(" "),a("h3",{attrs:{id:"_1-说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-说明"}},[t._v("#")]),t._v(" 1. 说明")]),t._v(" "),a("p",[t._v("Let's Encrypt 提供的 "),a("a",{attrs:{href:"https://certbot.eff.org/instructions",target:"_blank",rel:"noopener noreferrer"}},[t._v("certbot"),a("OutboundLink")],1),t._v(" 可以快速生成证书，并能够自动完成配置。")]),t._v(" "),a("blockquote",[a("p",[t._v("还原阿里云做的配置，并打开网站验证是否还原。")])]),t._v(" "),a("p",[t._v("选择 Nginx 和 Ubuntu 18.04 后就会弹出对应的"),a("a",{attrs:{href:"https://certbot.eff.org/lets-encrypt/ubuntubionic-nginx",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装步骤"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"_2-add-certbot-ppa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-add-certbot-ppa"}},[t._v("#")]),t._v(" 2. Add Certbot PPA")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" software-properties-common\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository universe\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" add-apt-repository ppa:certbot/certbot\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n")])])]),a("h3",{attrs:{id:"_3-install-certbot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-install-certbot"}},[t._v("#")]),t._v(" 3. Install Certbot")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" certbot python-certbot-nginx\n")])])]),a("h3",{attrs:{id:"_4-get-and-install-your-certificates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-get-and-install-your-certificates"}},[t._v("#")]),t._v(" 4. Get and install your certificates")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行后根据提示一步步安装即可")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" certbot --nginx\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/nginx/conf.d/blog.conf "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看变化")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 访问 https://blog.shanyuhai.top 验证")]),t._v("\n")])])]),a("h3",{attrs:{id:"_5-test-automatic-renewal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-test-automatic-renewal"}},[t._v("#")]),t._v(" 5. Test automatic renewal")]),t._v(" "),a("p",[t._v("Let’s Encrypt 证书的有效期为 90 天，所以需要自动续订。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" certbot renew --dry-run\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);