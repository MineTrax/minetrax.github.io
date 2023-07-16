import React from "react";

type FeatureItem = {
  title: string;
  Svg: JSX.Element;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Powerful Analytics",
    Svg: (
      <svg
        className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6"
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
    ),
    description: (
      <>
        Provides you with detailed analytics about your server, so you can track
        player activity, identify trends, and make informed decisions about how
        to improve your server.
      </>
    ),
  },
  {
    title: "Player Linking",
    Svg: (
      <svg
        fill="none"
        className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    description: (
      <>
        Users can signup on the website and link their players for rewards. Your
        user can also view detailed stats about their player profile and compare
        against other players.
      </>
    ),
  },
  {
    title: "Custom Ranking Tools",
    Svg: (
      <svg
        className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6"
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
    ),
    description: (
      <>
        Every server has different need. That is why minetrax give you option to
        create your own player ranking and rating agorithms right from the admin
        panel settings.
      </>
    ),
  },
  {
    title: "Ingame Chat",
    Svg: (
      <svg
        className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6"
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
    ),
    description: (
      <>
        Let yours audience chat with in-game players live from website itself.
        Admin can also send commands or manage players like kick, ban, mute etc
        from the website itself.
      </>
    ),
  },
  {
    title: "Scalable & Secure",
    Svg: (
      <svg
        className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6"
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
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
    description: (
      <>
        Add as many servers as you want. Minetrax can handle it. All ciritical
        data is encrypted and stored & web to plugin communication is also
        encrypted in transit.
      </>
    ),
  },
  {
    title: "Constantly Evolving",
    Svg: (
      <svg
        className="w-5 h-5 text-sky-600 lg:w-6 lg:h-6"
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
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    description: (
      <>
        We are constantly adding new features and improving existing ones. You
        can be sure that MineTrax will always be feature-rich and meet your
        server's needs.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div>
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-sky-100 lg:h-12 lg:w-12">
        {Svg}
      </div>
      <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}

export default function HomeFeatures(): JSX.Element {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Features you will love
          </h2>
          <p className="text-gray-500 sm:text-xl">
            Everything included in one suite. Player Tracking, Ingame chat,
            Rating system, Analytics, Shoutbox, Post Feed, News & Announcements,
            Polls, CustomPages, Sharings, your name it!
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
