import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { searchPlugin } from '@vuepress/plugin-search'
export default {
  lang: 'en-CN',
  title: 'Blog',
  description: 'My first Blog',

  theme: defaultTheme({
    logo: '/images/logo.png',
    logoDark: '/images/darkLogo.png',
    navbar: [
      // NavbarItem
      {
        text: '主页',
        link: '/',
      },
      {
        text: 'Git',
        link: '/Git/git笔记.md',
      },
      // NavbarGroup
      {
        text: 'Group',
        
        children: [
          {
            text: 'Git',
            link: '/Git/git笔记.md',
          },
          {
            text: 'Git',
            link: '/Git/git笔记.md',
          },

          {
            text: 'Group',
            children: ['/Git/git笔记.md', '/Git/git笔记.md']
          },

        ],
      },
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],

  }),
  plugins: [
    searchPlugin({
      maxSuggestions: 5,
      isSearchable: (page) => page.path !== '/',
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
    }),
  ],
}