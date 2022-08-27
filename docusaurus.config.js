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
  plugins: ['docusaurus-plugin-sass'],

  // 插件 - 主题: 实时代码编辑
  themes: ['@docusaurus/theme-live-codeblock'],

  // 插件 - 预设：docs、blog、theme
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
          showReadingTime: true,
          blogSidebarTitle: 'Blog',  // blog侧边栏总标题
          blogSidebarCount: 'ALL', // 所有博文
          editUrl:
            'https://github.com/lacorda/lacorda.github.io/blob/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/styles/custom.scss'),
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
        hideOnScroll: true, // 滚动时隐藏导航栏
        logo: {
          alt: 'Rabbit Online, frontend',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'helloWorld',
            position: 'left',
            label: '大前端',
          },
          {
            to: '/blog',
            docId: '/blog/helloWorld',
            position: 'left',
            label: '面经',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/lacorda',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      // 页脚
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                // to: '/docs/DOM/DOM操作',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rabbit Online, Inc. Built with Docusaurus.`,
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
        // The application ID provided by Algolia
        appId: 'QUY2MQ2NGM',

        // Public API key: it is safe to commit it
        apiKey: '81f006887e1fd026f7360336eeceb378',

        indexName: 'lacorda',

        contextualSearch: true,
      }
    }),
};

module.exports = config;
