import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const settings = {
  arrows: false,
  autoplay: true,
  dots: true,
  speed: 500,
  autoplaySpeed: 10000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

type TestiomonialItem = {
  name: string;
  server: string;
  avatarUrl: string;
  testionial: JSX.Element;
  textSize?: string;
};

const FeatureList: TestiomonialItem[] = [
  {
    name: "Lukiqq",
    server: "Proton Servers",
    avatarUrl:
      "https://www.spigotmc.org/data/avatars/s/493/493884.jpg?1651003136",
    testionial: (
      <>
        This is the best site that exists for free to manage a minecraft server
        at the moment!
      </>
    ),
  },
  {
    textSize: "text-sm",
    name: "Reedpasse",
    server: "X Servers",
    avatarUrl:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    testionial: (
      <>
        I have to say, it is working like a charm! Not only is the functionality
        top-notch, but the creator of the plugin is also incredibly accessible
        and helpful in getting everything set up. I have had a great experience
        using this plugin and highly recommend it to others. The creator is
        amazing to work with and very responsive to any questions or concerns.
        Overall, this plugin is a fantastic I couldn't be happier with it.
      </>
    ),
  },
];

function Testimonial({
  name,
  server,
  avatarUrl,
  testionial,
  textSize = "text-2xl",
}: TestiomonialItem) {
  return (
    <section className="">
      <div className="max-w-screen-xl px-4 py-4 md:py-8 mx-auto text-center lg:py-6 lg:px-6">
        <figure className="max-w-screen-md mx-auto">
          <svg
            className="h-12 mx-auto mb-3 text-gray-400"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote className="border-none">
            <p
              className={["font-medium text-gray-900", textSize].join(
                " "
              )}
            >
              {testionial}
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <img
              className="w-6 h-6 rounded-full"
              src={avatarUrl}
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500">
              <div className="pr-3 font-medium text-gray-900">{name}</div>
              <div className="pl-3 text-sm font-light text-gray-500">
                {server}
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default function HomeTestimonials({}: Props) {
  return (
    <div className="bg-slate-50">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl pb-16">
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-gray-900">
            Don't just take our word for it.
          </h2>
        </div>

        <Slider styles={styles.slider} {...settings}>
          {FeatureList.map((item) => (
            <Testimonial
              key={item.name}
              name={item.name}
              server={item.server}
              avatarUrl={item.avatarUrl}
              testionial={item.testionial}
              textSize={item.textSize}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}

const styles = {
  slider: {
    ".slick-list": {
      // mx: [null, null, null, null, -2, 0],
    },
    ".slick-slide": {
      // mr: [null, null, null, null, 4, 0],
    },
    ".slick-dots": {
      display: "flex !important",
      margin: 0,
      padding: 0,
      listStyle: "none",
      alignItems: "center",
      justifyContent: "center",
      marginTop: [3, null, null, 13],
      li: {
        mx: 1,
        display: "flex",
      },
      button: {
        backgroundColor: "rgb(45 61 80 / 15%)",
        borderRadius: 50,
        border: 0,
        cursor: "pointer",
        padding: 0,
        overflow: "hidden",
        textIndent: "-9999em",
        width: 10,
        height: 6,
        outline: 0,
        transition: "all 0.3s ease-in-out 0s",
      },
      ".slick-active button": {
        backgroundColor: "rgb(45 61 80 / 40%)",
        width: 20,
      },
    },
  },
};
