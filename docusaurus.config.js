// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MineTrax Suite",
  tagline: "Free Web & Analytics Suite for Minecraft Servers",
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
          editUrl: "https://github.com/minetrax/minetrax.github.io/edit/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/minetrax/minetrax.github.io/edit/main/",
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
              {
                label: "SpigotMC",
                href: "https://www.spigotmc.org/resources/minetrax-suite.102378/",
              },
            ],
          },
          {
            title: "Services",
            items: [
              {
                label: "Install Service",
                href: "https://discord.gg/Hzfj27k",
              },
              {
                label: "Managed Hosting",
                href: "https://discord.gg/Hzfj27k",
              },
              {
                label: "Development",
                href: "https://discord.gg/Hzfj27k",
              },
            ],
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
        additionalLanguages: ["php"],
      },
      announcementBar: {
        id: "support_us",
        content:
          '<b>⭐️ If you like MineTrax, give it a star on <a target="_blank" href="https://www.github.com/minetrax/minetrax">GitHub</a> and follow us on <a target="_blank" href="https://www.twitter.com/minetraxsuite">Twitter</a> <svg style="fill: #1DA1F2; vertical-align: middle; margin-left: 3px;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></b>',
        backgroundColor: "#9ee0fd",
        textColor: "#091E42",
        isCloseable: true,
      },
    }),
};

module.exports = config;
