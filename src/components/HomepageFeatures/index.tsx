import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "All in one",
    Svg: require("@site/static/img/undraw_all_the_data_re_hh4w.svg").default,
    description: (
      <>
        Everything included in one suite. Player Tracking, Ingame chat, Rating
        system, Analytics, Shoutbox, Post Feed, Sharings, your name it!
      </>
    ),
  },
  {
    title: "Player Tracking",
    Svg: require("@site/static/img/undraw_developer_activity_re_39tg.svg")
      .default,
    description: (
      <>
        Minetrax will track the stats of players and show it in a nice way.
        Users can signup on the website and link their players.
      </>
    ),
  },
  {
    title: "Custom Ranking Algorithm",
    Svg: require("@site/static/img/undraw_mathematics_-4-otb.svg").default,
    description: (
      <>
        Every server has different need. That is why it give you option to
        create your own player ranking and rating agorithms right from the admin
        dashboard.
      </>
    ),
  },
  {
    title: "Analytics",
    Svg: require("@site/static/img/undraw_analytics_re_dkf8.svg").default,
    description: (
      <>
        Player and Server Analytics and Intel report let you know your server
        and its audience better.
      </>
    ),
  },
  {
    title: "Ingame Chat",
    Svg: require("@site/static/img/undraw_work_chat_re_qes4.svg").default,
    description: (
      <>
        Let yours audience chat with in-game players live from website itself.
        Also give admins option to manage the server and run commands.
      </>
    ),
  },
  {
    title: "and much more...",
    Svg: require("@site/static/img/undraw_load_more_re_482p.svg").default,
    description: (
      <>
        Check out <a href="./docs/introduction/what-is-minetrax">more here</a> &
        Install and see it yourself.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <h1 className={styles.featuresTitle}>Features</h1>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
