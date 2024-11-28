(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{478:function(s,a,e){"use strict";e.r(a);var t=e(0),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"acme-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acme-sh"}},[s._v("#")]),s._v(" acme.sh")]),s._v(" "),a("p",[s._v("目前我还不知道续签有没有用,设置太简单了")]),s._v(" "),a("p",[s._v("主要步骤:")]),s._v(" "),a("p",[s._v("1.申请阿里的OPENAPI")]),s._v(" "),a("p",[s._v("2.安装"),a("a",{attrs:{href:"https://github.com/acmesh-official/acme.sh",target:"_blank",rel:"noopener noreferrer"}},[s._v("acme.sh"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("3.生成证书")]),s._v(" "),a("p",[s._v("3.复制证书到你配置好的nginx路径")]),s._v(" "),a("p",[s._v("4.更新证书")]),s._v(" "),a("h2",{attrs:{id:"申请阿里云云账号accesskey-id和accesskey-secret"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#申请阿里云云账号accesskey-id和accesskey-secret"}},[s._v("#")]),s._v(" 申请阿里云云账号AccessKey ID和AccessKey Secret")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://help.aliyun.com/zh/ram/user-guide/create-an-accesskey-pair",target:"_blank",rel:"noopener noreferrer"}},[s._v("如何获取阿里云云账号AccessKey ID和AccessKey Secret - 阿里云"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("之后授予DNS解析权限就可以正常运行了")]),s._v(" "),a("h2",{attrs:{id:"安装acme-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装acme-sh"}},[s._v("#")]),s._v(" 安装acme.sh")]),s._v(" "),a("p",[a("code",[s._v("curl https://get.acme.sh | sh -s email=my@example.com")])]),s._v(" "),a("p",[s._v("并创建 一个 shell 的 alias, 例如 .bashrc，方便你的使用: alias acme.sh=~/.acme.sh/acme.sh")]),s._v(" "),a("p",[s._v("目前默认的CA机构是ZEROSSL, 没啥特殊需求就不换了,也麻烦")]),s._v(" "),a("h3",{attrs:{id:"生成证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成证书"}},[s._v("#")]),s._v(" 生成证书")]),s._v(" "),a("p",[a("code",[s._v('acme.sh --issue --dns dns_ali -d shinonomeow.fun -d "*.shinonomeow.fun"')])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),a("p",[s._v('*.shinonomeow.fun 要加""')]),s._v(" "),a("p",[s._v("zsh是这样的,早上运行 alist也报错")])]),s._v(" "),a("p",[s._v("之后将你生成的证书复制到你需要的位置,虽然指令是Insall,干的却是复制的事情")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("acme.sh --install-cert "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" shinonomeow.fun "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" *.shinonomeow.fun "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--key-file       /etc/ngxin/ssl/shinonomeow.fun.key  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--fullchain-file /etc/ngxin/ssl/fullchain.cer "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--reloadcmd")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sudo service nginx force-reload"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),a("p",[s._v("生成了4个证书, 只需要key和fullchain")])]),s._v(" "),a("h3",{attrs:{id:"查看已安装证书信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看已安装证书信息"}},[s._v("#")]),s._v(" 查看已安装证书信息")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("acme.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--info")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" shinonomeow.fun\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"更新证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新证书"}},[s._v("#")]),s._v(" 更新证书")]),s._v(" "),a("p",[a("code",[s._v('0 0 1,20 * * "/root/.acme.sh"/acme.sh --cron --home "/root/.acme.sh" > /dev/null')])]),s._v(" "),a("p",[s._v("虽然查看了一下发现是生效了, 但是完全不知道到时候更新是什么结果,毕竟我用的是zsh 不是bash")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://ubock.com/archives/1707099513246",target:"_blank",rel:"noopener noreferrer"}},[s._v("acme.sh申请Let’s Encrypt的https证书 (阿里云DNS)"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"疑问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#疑问"}},[s._v("#")]),s._v(" 疑问")]),s._v(" "),a("p",[s._v("我很好奇如果不是 root 权限的话,到底如何重启 ngxin 呢, 明明说可以用 root 用户和其他用户安装的.")]),s._v(" "),a("div",{staticClass:"custom-block center"},[a("p",[a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/shininome/blog_imgs@blog/blog/tools/dev/01-1-acme-noroot.png",alt:"git原文"}})])])])}),[],!1,null,null,null);a.default=r.exports}}]);