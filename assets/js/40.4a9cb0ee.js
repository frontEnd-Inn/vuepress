(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{426:function(t,s,n){"use strict";n.r(s);var a=n(23),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),n("p",[t._v("反向代理主要是利用 "),n("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_upstream_module.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("upstream"),n("OutboundLink")],1),t._v("、server 模块指定上游服务地址来实现负载均衡，当然反向代理是前置条件。")]),t._v(" "),n("p",[t._v("指定的上游服务器地址中，地址可以是域名、IP 地址或 unix socket 地址。")]),t._v(" "),n("h2",{attrs:{id:"server-parameters"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#server-parameters"}},[t._v("#")]),t._v(" server parameters")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"center"}},[t._v("parameters")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("type")]),t._v(" "),n("th",[t._v("作用")])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("weight")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),n("td",[t._v("负载均衡时的权重，默认为 1。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("max_conns")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),n("td",[t._v("限制同时活动的最大链接数量（即最大并发 数），默认为 0，表示不限制。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("max_fails")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),n("td",[t._v("允许请求失败的次数，默认为 1。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("fail_timeout")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),n("td",[t._v("在经历了 max_fails 次失败后，暂停服务的时间。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("backup")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",[t._v("指定当前 server 为备份服务器，仅当非备份服务器不可用时才启用。")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[t._v("down")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}}),t._v(" "),n("td",[t._v("将服务器标记为永久不可用。")])])])]),t._v(" "),n("h2",{attrs:{id:"config"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#config"}},[t._v("#")]),t._v(" config")]),t._v(" "),n("p",[t._v("在之前的"),n("RouterLink",{attrs:{to:"/backend/nginx/nginx-directives.html#alias"}},[t._v("基础")]),t._v("上新增三台 server 虚拟机。")],1),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/nginx/conf.d/default.conf\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# 此处偷懒全部 server 写在 default.conf 中，更好的形式是新建两个 `.conf` 文件，更更好的形式当然是新建两台虚拟机，然后修改 "DNS"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改为如下内容")]),t._v("\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8081")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name  localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8081"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8082")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name  localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8082"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8083")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name  localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8083"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nupstream backend "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:8081 "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("weight")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:8082"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:8083 backup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    keepalive "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name  localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#charset koi8-r;")]),t._v("\n    access_log  /var/log/nginx/nginx.access.log  main"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    error_log  /var/log/nginx/nginx.error.log warn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        proxy_pass backend"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        proxy_http_version "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        proxy_set_header Connection "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        proxy_connect_timeout 1s"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        proxy_next_upstream error"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nnginx -s reload "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重载配置")]),t._v("\n")])])]),n("h2",{attrs:{id:"test"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#test"}},[t._v("#")]),t._v(" test")]),t._v(" "),n("p",[t._v("简单的重复测试，查看负载均衡情况。")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -i nginx.example.com\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HTTP/1.1 200 OK")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 8081")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -i nginx.example.com\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HTTP/1.1 200 OK")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 8081")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -i nginx.example.com\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HTTP/1.1 200 OK")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 8082")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 持续多次结果按照以上循环出现")]),t._v("\n")])])]),n("h2",{attrs:{id:"load-balancing-methods"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#load-balancing-methods"}},[t._v("#")]),t._v(" load balancing methods")]),t._v(" "),n("p",[t._v("Nginx 负载均衡有很多策略，上面示例是默认的 round-robin 算法（也就是基于 weight 权重）。")]),t._v(" "),n("h3",{attrs:{id:"_1-ip-hash-算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-ip-hash-算法"}},[t._v("#")]),t._v(" 1. "),n("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_upstream_module.html#ip_hash",target:"_blank",rel:"noopener noreferrer"}},[t._v("ip-hash"),n("OutboundLink")],1),t._v(" 算法")]),t._v(" "),n("p",[t._v("根据用户的 IP 地址作为 hash 算法（IPv4、IPv6 策略不同）的关键字，在服务器之间分配请求。该方法确保了来自统一客户端的请求将始终传递到同一台服务器。")]),t._v(" "),n("p",[t._v("在指定 "),n("code",[t._v("ip_hash")]),t._v(" 算法后权重不再生效？（不同版本 Nginx 结果会 不一致），同理 "),n("code",[t._v("backup")]),t._v(" 参数同样不可用。")]),t._v(" "),n("p",[t._v("启用配置示例：")]),t._v(" "),n("div",{staticClass:"language-nginx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),t._v(" backend "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ip_hash")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" backend1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" backend2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" backend3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com down"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" backend4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"_2-hash-算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-hash-算法"}},[t._v("#")]),t._v(" 2. "),n("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_upstream_module.html#hash",target:"_blank",rel:"noopener noreferrer"}},[t._v("hash"),n("OutboundLink")],1),t._v(" 算法")]),t._v(" "),n("p",[t._v("相对于 "),n("code",[t._v("ip_hash")]),t._v(" 不再局限于 "),n("code",[t._v("$remote_addr")]),t._v("，可以指定关键字（其余的变量甚至字符串）来形成 hash。")]),t._v(" "),n("blockquote",[n("p",[t._v("在之前了解到 "),n("code",[t._v("split_client")]),t._v(" 可以用于处理 AB 测试，但是疑惑的是无法指定某一批用户，那么配合上 hash 算法能否实现更好的 AB 测试呢。")])]),t._v(" "),n("div",{staticClass:"language-nginx extra-class"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[t._v("Syntax"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\thash key "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("consistent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果 consistent 指定了参数，则将使用 ketama 一致性哈希方法。该方法可确保在将服务器添加到组中或从组中删除服务器时，只有很少的键将被重新映射到不同的服务器。这有助于为缓存服务器获得更高的缓存命中率。")]),t._v("\n")])])]),n("h2",{attrs:{id:"upstream-module-directives"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#upstream-module-directives"}},[t._v("#")]),t._v(" upstream module directives")]),t._v(" "),n("h3",{attrs:{id:"_1-proxy-pass"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-proxy-pass"}},[t._v("#")]),t._v(" 1. "),n("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass",target:"_blank",rel:"noopener noreferrer"}},[t._v("proxy_pass"),n("OutboundLink")],1)]),t._v(" "),n("p",[n("code",[t._v("proxy_pass")]),t._v(" 可以设置代理服务器的协议和地址，以及应将位置映射到的可选的 URI。")]),t._v(" "),n("p",[t._v("需要注意的是 "),n("code",[t._v("proxy_pass")]),t._v(" 必须以 "),n("code",[t._v("http://")]),t._v(" 或 "),n("code",[t._v("https://")]),t._v(" 开头。")]),t._v(" "),n("p",[t._v("URI 会导致类似 alias 的效果，不再是完整转发了。所以不携带 URI，则将请求 URI 以原始请求处理时客户端发送的格式传递到服务器；携带 URI 则会导致原始请求URI 的一部分将被 "),n("code",[t._v("proxy_pass")]),t._v(" 中指定的 URI 代替。")])])}),[],!1,null,null,null);s.default=e.exports}}]);