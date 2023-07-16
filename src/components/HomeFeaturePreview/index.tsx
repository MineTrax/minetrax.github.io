import React from "react";

type Props = {};

export default function HomeFeaturePreview({}: Props) {
  return (
    <section className="bg-white">
      <div className="">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img
            className="w-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Let's create more tools and ideas that brings us together.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg">
              Flowbite helps you connect with friends and communities of people
              who share your interests. Connecting with your friends and family
              as well as discovering new ones is easy with features like Groups.
            </p>
          </div>
        </div>
      </div>

      <hr className="w-64 h-1 mx-auto my-4 bg-gray-200 border-0 rounded md:my-10" />

      <div className="">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Let's create more tools and ideas that brings us together.
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg">
              Flowbite helps you connect with friends and communities of people
              who share your interests. Connecting with your friends and family
              as well as discovering new ones is easy with features like Groups.
            </p>
          </div>
          <img
            className="w-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
            alt="dashboard image"
          />
        </div>
      </div>
    </section>
  );
}
