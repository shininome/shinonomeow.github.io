// 插件配置
const feed_options = {
  canonical_base: 'https://shinonomoew.top',
  count: 5000,
};

module.exports = [
  // 自定义插件，即本地插件

  //樱花插件
  ["sakura", {
    num: 10,  // 默认数量
    show: true, //  是否显示
    zIndex: -1,   // 层级
    img: {
      replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
      httpUrl: '...'     // 绝对路径
    }
  }],
  [
    'md-enhance',
    {
      sup: true,
      sub: true,
      footnote: true,
      mark: true,
      tex: true,
      align: true,
    },
  ],
  ['feed', feed_options],
  [
    {
      name: "custom-plugins",
      clientAppRootComponentFiles: ["BlockToggle", "Aplayer"], //, "GlobalTip" 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    },
  ],
  [
    "vuepress-plugin-vdoing-comment",
    {
      choosen: "gitalk",
      options: {
        clientID: "334bd66f29e29bf222e5",
        clientSecret: "a1869dd151bf7f08745525158763ae12f585b308",
        repo: "shinonomeow.github.io", // 仓库
        owner: "shininome", //所有者
        admin: ["shininome"],
        distractionFreeMode: false,
        pagerDirection: "last", // 'first'正序 | 'last'倒序
        id: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>", //  页面的唯一标识,长度不能超过50
        title: "「评论」<%- frontmatter.title %>", // GitHub issue 的标题
        labels: ["Gitalk", "Comment"], // GitHub issue 的标签
        body: "页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>", // GitHub issue 的内容
      },
    },
  ],
  ["vuepress-plugin-mermaidjs"],
  ["sitemap", { hostname: "https://shinonomoew.top/" }],
  // 谷歌统计代码
  [
    'google-analytics-4',
    {
      gtag: 'G-0356YMD7GY'
    }
  ],
  // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
  [
    "thirdparty-search",
    {
      thirdparty: [
        // 可选，默认 []
        {
          title: "在MDN中搜索",
          frontUrl: "https://developer.mozilla.org/zh-CN/search?q=", // 搜索链接的前面部分
          behindUrl: "", // 搜索链接的后面部分，可选，默认 ''
        },
        {
          title: "在Runoob中搜索",
          frontUrl: "https://www.runoob.com/?s=",
        },
        {
          title: "在Vue API中搜索",
          frontUrl: "https://cn.vuejs.org/v2/api/#",
        },
        {
          title: "在Bing中搜索",
          frontUrl: "https://cn.bing.com/search?q=",
        },
        {
          title: "通过百度搜索本站的",
          frontUrl: "https://www.baidu.com/s?wd=",
        },
      ],
    },
  ],
  // 官网：https://github.com/leo-buneev/vuepress-plugin-fulltext-search
  ["fulltext-search"],
  [
    "one-click-copy",
    {
      // 代码块复制按钮
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside',
      ], // String or Array
      copyMessage: "复制成功", // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    "vuepress-plugin-zooming", // 放大图片
    {
      selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除 class 是 no-zoom 的图片
      options: {
        bgColor: "rgba(0,0,0,0.6)",
      },
    },
  ],
  // 顶部阅读进度插件
  ["reading-progress"],
  // 动态标题，官网：https://moefyit.github.io/moefy-vuepress/packages/dynamic-title.html
  [
    "dynamic-title",
    {
      showIcon:
        "https://gcore.jsdelivr.net/gh/shininome/blog_imgs@blog/blog/basic/favicon.ico",
      showText: "ヾ(≧▽≦*)o喵喵喵喵！",
      hideIcon:
        "https://gcore.jsdelivr.net/gh/shininome/blog_imgs@blog/blog/basic/favicon.ico",
      hideText: "ಥ_ಥ喵喵喵喵！",
      recoverTime: 2000, //  持续时间
    },
  ],
  // vuepress-plugin-tabs。官网：https://github.com/pskordilakis/vuepress-plugin-tabs
  ["tabs"],
];
