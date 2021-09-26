(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{493:function(t,a,s){"use strict";s.r(a);var n=s(23),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"总结-常见问题解答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结-常见问题解答"}},[t._v("#")]),t._v(" 总结 & 常见问题解答")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("在本小册的第一节中，笔者对 Vue.js 内部运行机制做了一个全局的概览，当时通过下面这张图把 Vue.js 拆分成一个一个小模块来介绍，之后通过这一系列小节的学习，相信大家已经对 Vue.js 内部的原理有了一个更进一步的了解，对这张图也再也不会感觉到那么陌生。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/19/1606e7eaa2a664e8?w=1752&h=1216&f=png&s=190985",alt:""}})]),t._v(" "),s("p",[t._v("每个小节中的代码都是笔者根据 Vue.js 原理单独抽离出来写成的 Demo，大家可以在我的 "),s("a",{attrs:{href:"https://github.com/answershuto",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gtihub"),s("OutboundLink")],1),t._v(" 上查看完整的代码 (见 "),s("a",{attrs:{href:"https://github.com/answershuto/VueDemo",target:"_blank",rel:"noopener noreferrer"}},[t._v("VueDemo"),s("OutboundLink")],1),t._v(" 项目)。")]),t._v(" "),s("p",[t._v("本小册对 Vue.js 原理进行了初步的介绍，希望能够起到一个抛砖引玉的作用，读者读完以后，可以利用这些基础对 Vue.js 进行一个更加深入的探索，相信会有更大的收获。")]),t._v(" "),s("h2",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("ol",[s("li",[t._v("怎么实现 "),s("code",[t._v("this._test")]),t._v(" 改变而不是 "),s("code",[t._v("this._data.test")]),t._v(" 改变触发更新？")])]),t._v(" "),s("p",[t._v("答：其实这中间有一个"),s("strong",[t._v("代理")]),t._v("的过程。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_proxy")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" that "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("keys")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            configurable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            enumerable"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("proxyGetter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("proxySetter")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("本质就是通过 "),s("code",[t._v("Object.defineProperty")]),t._v(" 使在访问 "),s("code",[t._v("this")]),t._v(" 上的某属性时从 "),s("code",[t._v("this._data")]),t._v(" 中读取（写入）。")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("能不能将依赖收集中讲到的 "),s("code",[t._v("dep.addSub(Dep.target)")]),t._v(" 改成 "),s("code",[t._v("dep.addSub(new Watcher())")]),t._v("呢？")])]),t._v(" "),s("p",[t._v("为了便于读者理解这部分内容，我将代码做了简化，实际上一个 "),s("code",[t._v("Watcher")]),t._v(" 对象可能会在多个 "),s("code",[t._v("Dep")]),t._v(" 中，并不是每次 "),s("code",[t._v("addSub")]),t._v(" 都是一个新的 "),s("code",[t._v("Watcher")]),t._v(" 对象，需依赖 "),s("code",[t._v("Dep.target")]),t._v(" 进行收集（实际上 "),s("code",[t._v("Dep.target")]),t._v(" 也是通过 "),s("code",[t._v("Watcher")]),t._v(" 对象的 "),s("code",[t._v("get")]),t._v(" 方法调用 "),s("code",[t._v("pushTarget")]),t._v(" 将自身赋值给 "),s("code",[t._v("Dep.target")]),t._v("）。")]),t._v(" "),s("h2",{attrs:{id:"最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),s("p",[t._v("从 2017 年 12 月开始写这本小册到现在差不多 2 个月的时间，虽说之前写过类似的内容，但是将 Vue.js 源码抽离成一个一个 Demo 还是花了很多时间，对于这本小册也是前前后后改了好几次才让自己满意。")]),t._v(" "),s("p",[t._v("因为读者的基础不一致，而小册的定位是偏向于对新手读者更加友好，所以我尽量用更加浅显易懂的方式去写这本小册的内容。希望大家可以通过这本小册初步掌握 Vue.js 的原理，掌握这些原理以后再去尝试阅读 "),s("a",{attrs:{href:"https://github.com/vuejs/vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue.js 源码"),s("OutboundLink")],1),t._v("，相信会事半功倍，也会对 Vue.js 有更深一层的理解。")]),t._v(" "),s("p",[t._v("End")])])}),[],!1,null,null,null);a.default=e.exports}}]);