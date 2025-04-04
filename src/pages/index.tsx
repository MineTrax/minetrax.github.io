import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Head from "@docusaurus/Head";
import styles from "./index.module.css";
import HomeFeatures from "../components/HomeFeatures";
import HomeShotTabs from "../components/HomeShotTabs";
import HomeFeaturePreview from "../components/HomeFeaturePreview";
import HomeTestimonials from "../components/HomeTestimonials";
import HomeCraftDeploy from "../components/HomeCraftDeploy";

// Add structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MineTrax",
  applicationCategory: "Analytics Software, Game Server Management",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free and open-source analytics and web suite for Minecraft servers with features like player analytics, store module, ban management, and more.",
  softwareVersion: "Latest",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "50",
  },
};

function getRandomTitle() {
  const titles = [
    "The Modern Way to Grow Your Minecraft Servers",
    "The Growth Potion for Your Minecraft Servers",
    "Minecraft Analytics: Gain Modern Insights for Your Server",
    "Complete All-in-One Minecraft Website Solution",
    "Minecraft Self-Hosted Store: Keep 100% of Your Profits",
    "Modern Analytics for Minecraft: Make Data-Driven Decisions",
  ];
  return titles[Math.floor(Math.random() * titles.length)];
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="flex flex-col justify-center items-center mb-2 md:mb-5">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300 text-4xl md:text-5xl lg:text-7xl leading-tight tracking-tight md:w-4/5 font-extrabold">
            {getRandomTitle()}
          </h1>
          <p className="text-gray-400 md:w-4/5 lg:w-1/2 text-sm lg:text-lg">
            Build a thriving Minecraft community with MineTrax. Our powerful
            suite of tools includes server analytics, a store module, ban
            management, account linking, and more. Gain valuable insights into
            your server's health, retain existing players, and attract new ones.
          </p>
        </div>

        <div className="flex flex-col mb-8 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link
            to="/docs/introduction/what-is-minetrax"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-sky-500 hover:bg-sky-600 focus:outline-none hover:no-underline hover:text-white"
          >
            Get Started, It's Free
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            to="https://minetrax.world"
            className="inline-flex hover:no-underline justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border border-solid focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
          >
            <svg
              fill="none"
              className="mr-2 -ml-1 w-5 h-5"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Online Demo
          </Link>
        </div>
      </div>
      <img
        className={styles.bannerImage}
        src="/img/shots/hero-min.png"
        alt="Homepage"
      />
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="MineTrax - Free Analytics & Web Suite for Minecraft Servers | Player Analytics, Store Module & More"
      description="Build a thriving Minecraft community with MineTrax. Our powerful suite includes server analytics, store module, ban management, account linking, and more. Get valuable insights, retain players, and grow your server."
    >
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://minetrax.github.io" />
      </Head>
      <HomepageHeader />
      <main>
        <HomeFeatures />
        <HomeShotTabs />
        <HomeCraftDeploy />
        <HomeFeaturePreview />
        <HomeTestimonials />

        <section className="bg-[#1b1b1d]">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:pt-16 lg:px-6">
            <div className="mb-8 md:mb-14">
              <div className="flex justify-center flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Link
                  to="/docs/introduction/what-is-minetrax"
                  className="inline-flex justify-center items-center py-4 px-16 text-base font-medium text-center text-white rounded-lg bg-sky-500 hover:bg-sky-600 focus:outline-none hover:no-underline hover:text-white"
                >
                  RTFM!
                </Link>
              </div>
            </div>
            <hr className="w-64 h-1 mx-auto bg-gray-700 border-0 rounded" />
          </div>
        </section>
      </main>
    </Layout>
  );
}
