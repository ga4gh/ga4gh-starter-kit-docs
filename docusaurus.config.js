/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'GA4GH Starter Kit',
  tagline: 'Get up and running with GA4GH APIs',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/ga4gh.ico',
  organizationName: 'ga4gh', // Usually your GitHub org/user name.
  projectName: 'ga4gh-starter-kit-docs', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en',
      'fr'
    ]
  },
  themeConfig: {
    navbar: {
      title: 'GA4GH Starter Kit',
      logo: {
        alt: 'GA4GH',
        src: 'img/ga4gh.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'getting-started/intro',
          position: 'left',
          label: 'Start Here'
        },
        {
          type: 'doc',
          docId: 'starter-kit-apis/overview',
          position: 'left',
          label: 'APIs'
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right'
        },
        {
          type: 'docsVersionDropdown',
          position: 'right'
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Start Here',
              to: '/docs/getting-started/intro',
            },
            {
              label: 'APIs',
              to: '/docs/starter-kit-apis/overview'
            }
          ],
        },
        {
          title: 'APIs',
          items: [
            {
              label: 'DRS',
              to: '/docs/starter-kit-apis/drs/drs_overview'
            },
            {
              label: 'WES',
              to: '/docs/starter-kit-apis/wes/wes_overview'
            }
          ]
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
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
