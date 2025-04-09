// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Lacorda',
  tagline: '个人主页',
  url: 'https://lacorda.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // github gh-pages部署
  organizationName: 'lacorda',
  projectName: 'lacorda.github.io',
  deploymentBranch: 'gh-pages',

  // 国际化
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  // 插件
  plugins: [
    'docusaurus-plugin-sass',
    // [
    //   'docusaurus-plugin-less',
    //   {
    //     // modifyVars: {},
    //     javascriptEnabled: true,
    //   }
    // ],
    [
      '@docusaurus/plugin-content-docs',
      { // 多docs - 技巧篇
        id: 'tips',
        path: '02.tips',
        routeBasePath: 'tips',
        sidebarPath: require.resolve('./sidebars/tips.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      { // 多docs - 面试题
        id: 'third',
        path: '03.third',
        routeBasePath: 'third',
        sidebarPath: require.resolve('./sidebars/third.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      { // 多docs - 面试题
        id: 'fullStack',
        path: '04.fullStack',
        routeBasePath: 'fullStack',
        sidebarPath: require.resolve('./sidebars/fullStack.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      { // 多docs - 面试题
        id: 'interview',
        path: '99.interview',
        routeBasePath: 'interview',
        sidebarPath: require.resolve('./sidebars/interview.js'),
      },
    ],
    // [
    //   '@docusaurus/plugin-content-blog',
    //   { // 多blog - 报错篇
    //     id: 'someerror',
    //     path: '03.someerror',
    //     routeBasePath: 'someerror',
    //     blogSidebarTitle: '报错篇',  // blog侧边栏总标题
    //     blogSidebarCount: 'ALL', // 所有博文
    //   },
    // ],
  ],

  // 插件 - 主题: 实时代码编辑
  themes: ['@docusaurus/theme-live-codeblock'],

  // 插件 - 预设：docs、blog、theme
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '01.docs',
          sidebarPath: require.resolve('./sidebars/docs.js'),
          // EditUrlFunction
          // editUrl: ({ version, versionDocsDirPath, docPath, permalink, locale }) => {
          //   console.log('editUrl======', version, versionDocsDirPath, docPath, permalink, locale)
          //   return undefined;
          // }
          // EditUrl
          editUrl: 'https://github.com/lacorda/lacorda.github.io/blob/master/docs/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // toc_min_heading_level: 4, // 报错了：ValidationError: "toc_min_heading_level" is not allowed
          // toc_max_heading_level: 6, // 最大层级标题，默认为3 ValidationError: "toc_max_heading_level" is not allowed
          remarkPlugins: [
            // npm和yarn自动tab转换插件
            [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
          ],
        },
        blog: {
          path: '10.blog',
          showReadingTime: false,
          blogSidebarTitle: 'More',  // blog侧边栏总标题
          blogSidebarCount: 'ALL', // 所有博文
          editUrl: 'https://github.com/lacorda/lacorda.github.io/blob/master/blog/',
        },
        theme: {
          customCss: [
            require.resolve('antd/lib/button/style/index.css'),
            require.resolve('antd/lib/message/style/index.css'),
            require.resolve('antd/lib/menu/style/index.css'),
            require.resolve('antd/lib/tabs/style/index.css'),
            require.resolve('./src/styles/custom.scss'),
          ]
        },
      }),
    ],
  ],

  // 主题
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,  // 可隐藏的
          autoCollapseCategories: true, // 自动折叠
        },
      },

      // 导航栏上面的通知条
      // announcementBar: {
      //   id: 'support_us',
      //   content: '⭐️ 如果这个网站能帮助到你，欢迎给一个star支持作者  <a target="_blank" rel="noopener noreferrer" href="https://github.com/lacorda/lacorda.github.io">GitHub</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },

      navbar: {
        title: 'LACORDA',
        hideOnScroll: false, // 滚动时隐藏导航栏
        logo: {
          alt: 'Rabbit Online, frontend',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Chrome篇/devTools使用',
            position: 'left',
            label: '前端',
          },
          {
            type: 'doc',
            docsPluginId: 'third',
            docId: 'monaco-editor/概述',
            position: 'left',
            label: '插件',
          },
          {
            type: 'doc',
            docsPluginId: 'tips',
            docId: 'Charles篇/界面介绍',
            position: 'left',
            label: '技巧',
          },
          {
            type: 'doc',
            docsPluginId: 'fullStack',
            docId: '搭建全栈项目',
            position: 'left',
            label: '全栈',
          },
          {
            to: 'blog',
            position: 'left',
            label: 'MORE',
          },
          {
            to: '/code',
            position: 'left',
            className: 'header-menu iconfont icon-code',
            'aria-label': 'codepen',
          },
          {
            to: '/site#/tools/demo',
            position: 'left',
            className: 'header-menu iconfont icon-democrat',
            'aria-label': 'demo',
          },
          {
            type: 'doc',
            docsPluginId: 'interview',
            docId: 'Javascript篇/数据类型',
            position: 'right',
            className: 'header-menu iconfont icon-book',
            'aria-label': '面试题',
            label: ' '
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/lacorda',
            position: 'right',
            className: 'header-github-link iconfont icon-github-fill',
            'aria-label': 'GitHub repository',
          },
        ]
      },
      // 页脚
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Lacorda, Inc. Built with Docusaurus. 💛`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        //
        // 语法高亮主题，默认使用 Prism 的 Palenight
        // theme: require('prism-react-renderer/themes/vsLight'),
        // darkTheme: require('prism-react-renderer/themes/vsDark'),
        defaultLanguage: 'javascript',
        magicComments: [
          // Remember to extend the default highlight class name as well!
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'This will error',
          },
        ],
        additionalLanguages: ['java'],  // 添加额外支持的语法
      },
      colorMode: {
        defaultMode: 'dark', // 首次访问站点时的颜色模式
        disableSwitch: false, // 隐藏颜色模式开关
        respectPrefersColorScheme: false, // 使用系统自带模式，而不使用defaultMode
      },
      algolia: {
        appId: 'FKJV088HR1',
        apiKey: 'c721f4b7746401603de71e13e026793f',
        indexName: 'lacorda',
        contextualSearch: true,
      },
      // 右侧导航层级配置
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
};

module.exports = config;
