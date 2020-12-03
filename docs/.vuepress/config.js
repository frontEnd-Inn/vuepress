// .vuepress/config.js

const headConf = require("./config/headConf");
const pluginsConf = require("./config/pluginsConf");
const nav = require("./nav");
const navConf = require('./config/navConf.js');
const sidebarConf = require("./config/sidebarConf");



module.exports = {
	// base: "/vuepress/",
	title: "软件客栈大掌柜",
	description: "软件客栈大掌柜笔记",
	head:headConf,
	plugins:pluginsConf,



	themeConfig: {
		lastUpdated: '更新时间', // string | boolean
		logo: '/assets/img/hero.png',
		nav:  navConf,


	}
}
