// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MineTrax Suite",
  tagline: "Websuite & Analytics for minecraft servers.",
  url: "https://minetrax.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "MineTrax", // Usually your GitHub org/user name.
  projectName: "minetrax.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/minetrax/minetrax.github.io/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/minetrax/minetrax.github.io/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "MineTrax",
        logo: {
          alt: "MineTrax Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "introduction/what-is-minetrax",
            position: "left",
            label: "Get Started",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/minetrax/minetrax",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentation",
            items: [
              {
                label: "Get Started",
                to: "/docs/introduction/what-is-minetrax",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/Hzfj27k",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/minetraxsuite",
              },
            ],
          },
          {
            title: "Services",
            items: [
              {
                label: "Install Service",
                href: "https://discord.gg/Hzfj27k"
              },
              {
                label: "Managed Hosting",
                href: "https://discord.gg/Hzfj27k"
              },
              {
                label: "Development",
                href: "https://discord.gg/Hzfj27k"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/minetrax/minetrax",
              },
            ],
          },
        ],
        copyright: `Copyright © MineTrax ${new Date().getFullYear()}. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php'],
      },
    }),
};

module.exports = config;
