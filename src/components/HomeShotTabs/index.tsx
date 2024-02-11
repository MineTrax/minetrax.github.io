import React from "react";
import { Tab } from "@headlessui/react";
import image from "../../assets/images/taskmanager.png";
import screenshotDashboard from "../../assets/images/screenshot-dashboard.png";
import screenshotPerf from "../../assets/images/screenshot-perf.png";
import screenshotChat from "../../assets/images/screenshot-chat.png";
import screenshotChangeSkin from "../../assets/images/screenshot-change-skin.png";
import screenshotPlayerStats from "../../assets/images/screenshot-playerrank.png";

type Props = {};

function TabButton({ name, children }: { name: string; children?: any }) {
  return (
    <div className="flex">
      <div className="flex items-center justify-center">
        {children}
        <div className="hidden md:block">{name}</div>
      </div>
    </div>
  );
}

export default function HomeShotTabs({}: Props) {
  return (
    // #d8dadf
    <section className="bg-pink-50 text-gray-900 flex flex-col items-center py-8 px-4 sm:py-16">
      <div className="max-w-screen-md mb-8">
        <h2 className="mb-4 text-4xl tracking-tight text-center font-extrabold text-gray-900">
          Ultimate features in one suite
        </h2>
        <p className="text-gray-500 text-center">
          Have a quick preview of some features of MineTrax Suite.
        </p>
      </div>

      <Tab.Group>
        <Tab.List className="space-x-6 flex">
          <Tab
            as="div"
            className="cursor-pointer ui-selected:bg-white px-4 py-1.5 rounded ui-selected:shadow ui-selected:font-semibold tracking-wide"
          >
            <TabButton name="Server Analytics">
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                />
              </svg>
            </TabButton>
          </Tab>
          <Tab
            as="div"
            className="cursor-pointer ui-selected:bg-white px-4 py-1.5 rounded ui-selected:shadow ui-selected:font-semibold tracking-wide"
          >
            <TabButton name="Server Performance">
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              >
                <rect height="16" rx="2" ry="2" width="16" x="4" y="4" />
                <rect height="6" width="6" x="9" y="9" />
                <line x1="9" x2="9" y1="1" y2="4" />
                <line x1="15" x2="15" y1="1" y2="4" />
                <line x1="9" x2="9" y1="20" y2="23" />
                <line x1="15" x2="15" y1="20" y2="23" />
                <line x1="20" x2="23" y1="9" y2="9" />
                <line x1="20" x2="23" y1="14" y2="14" />
                <line x1="1" x2="4" y1="9" y2="9" />
                <line x1="1" x2="4" y1="14" y2="14" />
              </svg>
            </TabButton>
          </Tab>
          <Tab
            as="div"
            className="cursor-pointer ui-selected:bg-white px-4 py-1.5 rounded ui-selected:shadow ui-selected:font-semibold tracking-wide"
          >
            <TabButton name="Ingame Chat">
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
            </TabButton>
          </Tab>
          <Tab
            as="div"
            className="cursor-pointer ui-selected:bg-white px-4 py-1.5 rounded ui-selected:shadow ui-selected:font-semibold tracking-wide"
          >
            <TabButton name="Player Ranking">
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </TabButton>
          </Tab>
          <Tab
            as="div"
            className="cursor-pointer ui-selected:bg-white px-4 py-1.5 rounded ui-selected:shadow ui-selected:font-semibold tracking-wide"
          >
            <TabButton name="Change Skin">
              <svg
                className="mr-2 -ml-1 w-5 h-5"
                fill="none"
                strokeWidth="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                ></path>
              </svg>
            </TabButton>
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-5 text-center">
          <Tab.Panel>
            <img
              className="imgFeaturePreview w-full"
              src={screenshotDashboard}
            />
          </Tab.Panel>
          <Tab.Panel>
            <img className="imgFeaturePreview w-full" src={screenshotPerf} />
          </Tab.Panel>
          <Tab.Panel>
            <img className="imgFeaturePreview w-full" src={screenshotChat} />
          </Tab.Panel>
          <Tab.Panel>
            <img
              className="imgFeaturePreview w-full"
              src={screenshotPlayerStats}
            />
          </Tab.Panel>
          <Tab.Panel>
            <img
              className="imgFeaturePreview w-full"
              src={screenshotChangeSkin}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}
