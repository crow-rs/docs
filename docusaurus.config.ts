import type {Config} from '@docusaurus/types';

const config: Config = {
  title: 'Crow Language',
  tagline: 'Functional language with strong type system',
  url: 'https://crow-rs.github.io',
  baseUrl: '/docs/',
  organizationName: 'crow-rs',
  projectName: 'docs',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Crow',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Crow Language`,
    },
  },
};

export default config;