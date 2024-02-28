module.exports = {
  theme: 'reco',
  title: '我的博客',
  base: '/vuepress/',
  description: 'XXX',
  themeConfig: {
    subSidebar: 'auto',
    nav: [
      { text: "首页", link: "/" },
      {
        text: "kai 的博客",
        items: [
          { text: "掘金", link: "https://juejin.cn/user/1557364570327694" },
          { text: "Github", link: "https://github.com/ellison-shilankai" }
        ]
      }
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false,  // 是否折叠
        children: [{ title: "博客简介", path: "/" }],
      },
      {
        title: "基础篇",
        path: "/handbook/1",
        collapsable: true,
        children: [
          { title: "第一篇", path: "/handbook/1" },
          { title: "第二篇", path: "/handbook/2" },
        ]
      } 
    ]
  },
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
}
