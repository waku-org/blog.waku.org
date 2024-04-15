// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()

const math = require('remark-math')
const katex = require('rehype-katex')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Waku | Blog',
  url: 'https://blog.waku.org/',
  baseUrl: '/',

  markdown: {
    mermaid: true,
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    path: 'i18n',
    localeConfigs: {
      en: {
        path: 'en',
      },
      es: {
        path: 'es',
      },
    },
  },

  presets: [
    [
      '@acid-info/logos-docusaurus-preset',
      /** @type {import('@acid-info/logos-docusaurus-preset').PluginOptions} */
      ({
        businessUnit: 'Waku',
        theme: {
          name: 'default',
          options: {
            customCss: [require.resolve('./src/css/custom.scss')],
          },
        },
        docs: false,
        og: {},
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      /** @type {import('@docusaurus/plugin-content-blog').PluginOptions} */
      ({
        id: 'blog',
        routeBasePath: '/',
        path: 'posts',
        blogTitle: 'Waku Blog',
        blogSidebarCount: 0,
        authorsMapPath: 'authors.yml',
        remarkPlugins: [math],
        rehypePlugins: [katex],
      }),
    ],
    [
      '@docusaurus/plugin-content-blog',
      /** @type {import('@docusaurus/plugin-content-blog').PluginOptions} */
      ({
        id: 'es-blog',
        routeBasePath: '/es',
        path: 'i18n/es',
        blogTitle: 'Waku Blog',
        blogSidebarCount: 0,
        authorsMapPath: 'authors.yml',
        remarkPlugins: [math],
        rehypePlugins: [katex],
      }),
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [{ from: '/blog', to: '/' }],
        createRedirects(existingPath) {
          return existingPath.startsWith('/blog') && existingPath !== '/blog'
            ? [existingPath.replace('/blog', '')]
            : undefined
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'root-pages',
        routeBasePath: '/',
        path: 'root-pages',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@acid-info/logos-docusaurus-preset').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        items: [
          {
            type: 'search',
          },
          {
            label: 'About',
            href: 'https://waku.org/',
          },
        ],
      },
      footer: {
        links: [
          {
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/waku_org',
              },
              {
                label: 'Discord',
                href: 'https://discord.waku.org',
              },
              {
                label: 'Github',
                href: 'https://github.com/waku-org',
              },
            ],
          },
          {
            items: [
              {
                label: 'Work With Us',
                href: 'https://jobs.status.im/',
              },
              {
                href: '/terms',
                label: 'Terms of Use',
              },
              {
                href: '/privacy-policy',
                label: 'Privacy Policy',
              },
            ],
          },
        ],
      },
    }),

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
}

module.exports = config
