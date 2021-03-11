module.exports = {
  title: 'Selene',
  description: '通过cra/craco定义一个属于你的react工程',
  dest: './dist',
  port: '8080',
  head: [
      ['link', {rel: 'icon', href: 'https://cdn.nlark.com/yuque/0/2020/png/200416/1607571517525-112a3d20-097b-4095-9253-ec9ef81c3230.png'}]
  ],
  markdown: {
      lineNumbers: true
  },
  themeConfig: {
      nav: require('./nav'),
      sidebar: [
        {
          title: 'Selene简介',   // 必要的
          path: '/introduce/guide',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2,    // 可选的, 默认值是 1
        },
        {
          title: '路由',
          path: '/introduce/router',
          collapsable: false,
          sidebarDepth: 2,
        },
        {
          title: '状态管理',
          path: '/introduce/store',
          collapsable: false,
          sidebarDepth: 2,
        },
        {
          title: 'Mock数据',
          path: '/introduce/mock',
          collapsable: false,
          sidebarDepth: 2,
        },
        {
          title: '样式和视觉库',
          path: '/introduce/style',
          collapsable: false,
          sidebarDepth: 2,
        },
        {
          title: '请求库',
          path: '/introduce/request',
          collapsable: false,
          sidebarDepth: 2,
        },
        {
          title: '框架搭建和配置',
          path: '/introduce/other',
          collapsable: false,
          sidebarDepth: 2,
        },
        {
          title: '问题和未来',
          path: '/introduce/feature',
          collapsable: false,
          sidebarDepth: 2,
        },
      ],
      sidebarDepth: 3,
      displayAllHeaders: true,
      lastUpdated: 'Last Updated',
      searchMaxSuggestoins: 10,
      serviceWorker: {
          updatePopup: {
              message: "New content is available.",
              buttonText: 'Refresh'
          }
      },
      editLinks: true,
      editLinkText: '在 GitHub 上编辑此页 ！'
  }
}
