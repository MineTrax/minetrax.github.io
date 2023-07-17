import React from "react";
import Link from "@docusaurus/Link";

type Props = {};

function getRandomTitle() {
  const titles = [
    "Install MineTrax in a Click!",
    "Don't want to host yourself?",
    "Deploy MineTrax the Easy Way",
  ];
  return titles[Math.floor(Math.random() * titles.length)];
}

export default function HomeCraftDeploy({}: Props) {
  return (
    <section className="bg-[#1b1b1d]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-white">
            {getRandomTitle()}
          </h2>
          <p className="mb-6 text-gray-400">
            Try <b>CraftDeploy.com</b>, a one-click fully managed hosting
            platform for MineTrax and more. It take care of the infrastructure,
            backups, ssl and more so you can focus on building your audience.
          </p>

          <Link
            to="https://www.craftdeploy.com"
            className="inline-flex hover:no-underline justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border border-solid focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800"
          >
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </svg>
            Deploy with CraftDeploy
          </Link>
        </div>
      </div>
    </section>
  );
}
