(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{424:function(t,s,a){"use strict";a.r(s);var n=a(23),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("ip")]),t._v(" "),a("th",[t._v("role")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("web01")]),t._v(" "),a("td",[t._v("10.0.0.133")]),t._v(" "),a("td",[t._v("MASTER")])]),t._v(" "),a("tr",[a("td",[t._v("web02")]),t._v(" "),a("td",[t._v("10.0.0.134")]),t._v(" "),a("td",[t._v("BACKUP")])])])]),t._v(" "),a("p",[t._v("为虚拟机"),a("RouterLink",{attrs:{to:"/backend/nginx/install-nginx.html#编译安装"}},[t._v("安装")]),t._v("好 Nginx 和 keepalived。")],1),t._v(" "),a("p",[t._v("修改 Nginx 的主页便于之后识别：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /usr/local/nginx/html/index.html\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 分别为")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <h1>Welcome to nginx1!</h1>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <h1>Welcome to nginx2!</h1>")]),t._v("\n")])])]),a("p",[t._v("开放端口：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("firewall-cmd --zone"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("public --add-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("/tcp\n")])])]),a("p",[t._v("验证结果：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.133\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.134\n")])])]),a("h2",{attrs:{id:"配置主从"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置主从"}},[t._v("#")]),t._v(" 配置主从")]),t._v(" "),a("h3",{attrs:{id:"_1-master-web01"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-master-web01"}},[t._v("#")]),t._v(" 1. MASTER(web01)")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置 keepalived")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/keepalived/keepalived.conf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改内容如下")]),t._v("\nglobal_defs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   notification_email "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     acassen@firewall.loc\n     failover@firewall.loc\n     sysadmin@firewall.loc\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   notification_email_from Alexandre.Cassen@firewall.loc\n   smtp_server "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".200.1\n   smtp_connect_timeout "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n   router_id LVS_DEVEL\n   vrrp_skip_check_adv_addr\n   vrrp_strict\n   vrrp_garp_interval "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n   vrrp_gna_interval "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nvrrp_script chk_nginx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    script "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/keepalived/nginx_check.sh"')]),t._v("\n    interval "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    weight "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nvrrp_instance VI_1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    state MASTER\n    interface eth0\n    virtual_router_id "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("51")]),t._v("\n    mcast_src_ip "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.133\n    priority "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n    advert_int "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    authentication "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        auth_type PASS\n        auth_pass "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1111")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    virtual_ipaddress "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.100\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-backup-web02"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-backup-web02"}},[t._v("#")]),t._v(" 2. BACKUP(web02)")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置 keepalived")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/keepalived/keepalived.conf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改内容如下")]),t._v("\nglobal_defs "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   notification_email "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     acassen@firewall.loc\n     failover@firewall.loc\n     sysadmin@firewall.loc\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   notification_email_from Alexandre.Cassen@firewall.loc\n   smtp_server "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".200.1\n   smtp_connect_timeout "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n   router_id LVS_DEVEL\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nvrrp_script chk_nginx "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    script "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/etc/keepalived/nginx_check.sh"')]),t._v("\n    interval "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    weight "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nvrrp_instance VI_1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    state BACKUP\n    interface eth0\n    virtual_router_id "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("51")]),t._v("\n    mcast_src_ip "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.134\n    priority "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n    advert_int "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    authentication "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        auth_type PASS\n        auth_pass "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1111")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    virtual_ipaddress "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.100\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-check"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-check"}},[t._v("#")]),t._v(" 3. check")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 配置 check")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/keepalived/nginx_check.sh\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加内容如下")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/bin/bash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("A")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -C nginx –no-header "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wc")]),t._v(" -l"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$A")]),t._v(" -eq "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        /usr/local/nginx/sbin/nginx\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -C nginx --no-header "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wc")]),t._v(" -l"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" -eq "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("killall")]),t._v(" keepalived\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加执行权限")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x /etc/keepalived/nginx_check.sh \nll /etc/keepalived "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n")])])]),a("h2",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),a("h3",{attrs:{id:"_1-启用服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-启用服务"}},[t._v("#")]),t._v(" 1. 启用服务")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("systemctl start keepalived.service\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" addr "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证 web01 和 web02")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# web01")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(": eth0: "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("BROADCAST,MULTICAST,UP,LOWER_UP"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1500")]),t._v(" qdisc pfifo_fast state UP group default qlen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n    link/ether 00:0c:29:ea:d2:fc brd ff:ff:ff:ff:ff:ff\n    inet "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.133/24 brd "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.255 scope global noprefixroute dynamic eth0\n       valid_lft 1305sec preferred_lft 1305sec\n    inet "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.100/32 scope global eth0\n       valid_lft forever preferred_lft forever\n    inet6 fe80::5883:fca9:d7da:bd43/64 scope "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" noprefixroute \n       valid_lft forever preferred_lft forever\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# web02（虚拟 ip 未启用）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(": eth0: "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("BROADCAST,MULTICAST,UP,LOWER_UP"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1500")]),t._v(" qdisc pfifo_fast state UP group default qlen "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n    link/ether 00:0c:29:82:f0:17 brd ff:ff:ff:ff:ff:ff\n    inet "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.134/24 brd "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.255 scope global noprefixroute dynamic eth0\n       valid_lft 869sec preferred_lft 869sec\n    inet6 fe80::5883:fca9:d7da:bd43/64 scope "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" tentative noprefixroute dadfailed \n       valid_lft forever preferred_lft forever\n")])])]),a("h3",{attrs:{id:"_2-测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-测试"}},[t._v("#")]),t._v(" 2. 测试")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.100 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 虚拟 ip")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <h1>Welcome to nginx1!</h1>")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# web01")]),t._v("\nsystemctl stop nginx-compile.service\nsystemctl stop keepalived.service\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -lntup "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" addr "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# web02")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" addr "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 再次测试")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.100 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 虚拟 ip")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# <h1>Welcome to nginx2!</h1>")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);