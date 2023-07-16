import React from "react";
import { Tab } from "@headlessui/react";
import image from "../../assets/images/taskmanager.png";

type Props = {};

function TabButton() {
  return (
    <div className="flex">
      <div className="flex items-center justify-center">
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
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
        <div>Text Item</div>
      </div>
    </div>
  );
}

export default function HomeShotTabs({}: Props) {
  return (
    <section className="bg-pink-50 text-gray-900 flex flex-col items-center py-8 px-4 sm:py-16">
      <div className="max-w-screen-md mb-8">
        <h2 className="mb-4 text-4xl tracking-tight text-center font-extrabold text-gray-900">
          Ultimate features in one dashboard
        </h2>
        <p className="text-gray-500 text-center">
          he most intuitive design toolbox to create your next project. From
          ideation to user testing.
        </p>
      </div>

      <Tab.Group>
        <Tab.List className="space-x-6 flex">
          <Tab
            as="div"
            className="cursor-pointer ui-selected:bg-white px-4 py-1.5 rounded ui-selected:shadow ui-selected:font-semibold tracking-wide"
          >
            <TabButton />
          </Tab>
          <Tab
            as="div"
            className="cursor-pointer ui-selected:bg-white px-4 py-1.5 rounded ui-selected:shadow ui-selected:font-semibold tracking-wide"
          >
            <TabButton />
          </Tab>
          <Tab
            as="div"
            className="cursor-pointer ui-selected:bg-white px-4 py-1.5 rounded ui-selected:shadow ui-selected:font-semibold tracking-wide"
          >
            <TabButton />
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-5">
          <Tab.Panel>
            <img src={image} />
          </Tab.Panel>
          <Tab.Panel>
            <img src={image} />
          </Tab.Panel>
          <Tab.Panel>
            <img src={image} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </section>
  );
}
