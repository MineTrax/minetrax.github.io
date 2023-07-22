import React from "react";

type Props = {};

export default function HomeFeaturePreview({}: Props) {
  return (
    <section className="bg-white">
      <div className="">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className="w-full"
            src="./img/charts.png"
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Gain deeper understanding of your server.
            </h2>
            <p className="mb-6 text-gray-500">
              With Intel, you can keep track of your server's performance and
              player activity. Intel is a powerful tool that helps you
              understand various insights about your server and players, detect
              suspicious activity, and more.
            </p>
          </div>
        </div>
      </div>

      <hr className="w-64 h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-10" />

      <div className="">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Craft your unique experience.
            </h2>
            <p className="mb-6 text-gray-500">
              You can customize MineTrax to fit your server's needs. Customize
              player rating and scoring system, Custom navigation, custom pages,
              Custom hero sections, and more.
            </p>
          </div>
          <img
            className="w-full"
            src="img/customize.png"
            alt="dashboard image"
          />
        </div>
      </div>

      <hr className="w-64 h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-10" />

      <div className="">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className="w-full"
            src="./img/askdb-light.png"
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              AskDB - Powerful AI based database query system.
            </h2>
            <p className="mb-6 text-gray-500">
              AskDB is a powerful AI base database query system that allows you
              to ask questions about your server and players. You can ask
              questions like "How many players joined my server in the last 24
              hours?" or "What is the average player rating of my server?" and
              AskDB will answer them for you.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
