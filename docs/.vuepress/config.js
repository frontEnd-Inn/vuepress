// .vuepress/config.js
const moment = require('moment');
moment.locale("zh-cn");

module.exports = {
	// base: "/vuepress/",
	title: "飞跃高山与大海的鱼",
	description: "飞跃高山与大海的鱼的笔记,第二次",
	head: [
		['link', { rel: 'icon', href: '/1.jpg' }],
		['meta', {
			name: 'author',
			content: '飞跃高山与大洋的鱼'
		}],
		['meta', {
			name: 'keywords',
			content: 'vuepress介绍, vuepress说明,飞跃高山与大洋的鱼'
		}],
		 ['link', { rel: 'manifest', href: '/manifest.json' }],
				['meta', { name: 'theme-color', content: '#3eaf7c' }],
				['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
				['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
				['link', { rel: 'apple-touch-icon', href: '/icons/icon-152x152.png' }],
				['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
				['meta', { name: 'msapplication-TileImage', content: '/icons/icon-144x144.png' }],
				['meta', { name: 'msapplication-TileColor', content: '#000000' }]
	],
	plugins: [
	    [
	      '@vuepress/last-updated',
	      {
	        transformer: (timestamp, lang) => {
	          // 不要忘了安装 moment
	          
	          // moment.locale(lang)
	          return moment(timestamp).format("LLLL")
	        }
	      }
	    ],
		[
			'@vuepress/pwa', {
			      serviceWorker: true,
			      updatePopup: {
			        message: "大掌柜,发现新的功能可用",
			        buttonText: "刷新"
			      }
			   }
		]
	  ],

	themeConfig: {
		lastUpdated: '更新时间', // string | boolean
		logo: '/assets/img/hero.png',
		nav: [{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Guide',
				link: '/about/'
			},
			{
				text: 'External',
				link: 'https://google.com'
			},
			{
				text: 'Languages',
				ariaLabel: 'Language Menu',
				items: [{
						text: 'Chinese',
						link: '/language/chinese/'
					},
					{
						text: 'Japanese',
						link: '/language/japanese/'
					}
				]
			}
		],
		sidebar: {
			"/css/": [
				'c-aaa',
				'c-bbb',
				'c-ccc',
			],
			"/javascript/": [
				'js-aaa',
				'js-bbb',
				'js-ccc',
			]
		}

	}
}
