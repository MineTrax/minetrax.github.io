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
  server?: string;
  avatarUrl: string;
  testionial: JSX.Element;
  textSize?: string;
};

const FeatureList: TestiomonialItem[] = [
  {
    textSize: "text-base",
    name: "Reedpasse",
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
  {
    textSize: "text-3xl",
    name: "Lukiqq",
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
    name: "xteri",
    server: "WarNetwork",
    avatarUrl:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    testionial: (
      <>
        Minetrax is the top choice among Minecraft server management suites.
        This open-source software offers exceptional performance while using
        minimal system resources. Its dedication to open-source principles
        allows server owners to customize and optimize their server
        environments. Minetrax stands out for its efficiency, delivering smooth
        gameplay even on servers with limited resources. The owner's active
        involvement and responsiveness to user feedback ensure continuous
        improvements and updates. For Minecraft server owners seeking the
        ultimate management solution, Minetrax is highly recommended for its
        open-source nature, outstanding performance, and dedicated developer.
      </>
    ),
  },
  {
    textSize: "text-2xl",
    name: "audiodk",
    server: "RedQueenGaming",
    avatarUrl:
      "https://www.spigotmc.org/data/avatars/s/550/550112.jpg?1655555597",
    testionial: (
      <>
        Been friends with this man for many years and seen some amazing things
        done by him. This is a very well put together website with features you
        will not see on most sites.
      </>
    ),
  },
  {
    textSize: "text-sm",
    name: "dchu096",
    avatarUrl:
      "https://secure.gravatar.com/avatar/01fb6fc9a5d9b3f83aeef75939feda61?s=48&d=https%3A%2F%2Fstatic.spigotmc.org%2Fstyles%2Fspigot%2Fxenforo%2Favatars%2Favatar_male_s.png",
    testionial: (
      <>
        Have a brief look into minetrax, and its amazing. Although there are a
        few issues I am running into, Xinecraft is being really helpful and
        sorted my issue in no time. The GUI looks amazing and with customization
        features such as a the banner it shows (unfortunately not the tab icon
        but i hope they can resolve that soon) Minetrax is also feature-packed
        so i can put my voting links for user to vote and also discord linking*
        There is a big in-game chat for registered user to type on the website
        and will send to the server which is a bit like discordsrv but on the
        web, pretty neat and ofc I love the staff menu where you can
        kill/kick/ban and mute user on the website. There is quite a bit of
        stats, although i prefer plan better for stats logging but at least this
        feature is here. * minetrax uses its own discord linking which im in
        contact with xinecraft to see if it can hook to dsrv instead but either
        ways, amazing panel and deserve a try.
      </>
    ),
  },
  {
    textSize: "text-2xl",
    name: "MarshyO_o",
    avatarUrl:
      "https://secure.gravatar.com/avatar/01fb6fc9a5d9b3f83aeef75939feda61?s=48&d=https%3A%2F%2Fstatic.spigotmc.org%2Fstyles%2Fspigot%2Fxenforo%2Favatars%2Favatar_male_s.png",
    testionial: (
      <>
        This is such a great plugin the owner of the plugin is so helpful he
        pretty much walked me through it he goes out of his way to help I would
        so recommend this if you need a website 10/10
      </>
    ),
  },
  {
    textSize: "text-lg",
    name: "Duster911",
    avatarUrl:
      "https://secure.gravatar.com/avatar/01fb6fc9a5d9b3f83aeef75939feda61?s=48&d=https%3A%2F%2Fstatic.spigotmc.org%2Fstyles%2Fspigot%2Fxenforo%2Favatars%2Favatar_male_s.png",
    testionial: (
      <>
        MineTrax is exactly the type of web information for my server I was
        looking for. You have options for live chat, player stats, and different
        ways to sign in! The instructions provided on the wiki is excellent! It
        does require a VPS or self hosted server to run it. The developer,
        Xinecraft is very responsive on discord and will even help others
        install it if needed.
      </>
    ),
  },
  {
    textSize: "text-3xl",
    name: "rkfsociety",
    avatarUrl:
      "https://secure.gravatar.com/avatar/01fb6fc9a5d9b3f83aeef75939feda61?s=48&d=https%3A%2F%2Fstatic.spigotmc.org%2Fstyles%2Fspigot%2Fxenforo%2Favatars%2Favatar_male_s.png",
    testionial: (
      <>
        The functionality is amazing. The most user-friendly website and the
        best support. Problems are fixed as soon as possible.
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
            <p className={["font-medium text-gray-900", textSize].join(" ")}>
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

          <p className="text-center m-0">
            <a
              className="text-gray-500 text-sm hover:text-sky-500 hover:no-underline"
              href="https://www.spigotmc.org/resources/minetrax-suite.102378"
              target="_blank"
            >
              Check all Reviews on Spigot
            </a>
          </p>
        </div>

        <Slider {...settings}>
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
