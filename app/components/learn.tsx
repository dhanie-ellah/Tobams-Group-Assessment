import Image from "next/image";
import React from "react";
import LearnImage from "../assets/learn-with-ceo.jpg";
import Bolt from "../assets/bolt (2).png";
import { HiArrowUpRight } from "react-icons/hi2";

const learn = () => {
  return (
    <div className=" bg-white p-6 xl:p-16">
      <div className=" bg-(--pink) px-4 py-6 xl:p-10 rounded-xl xl:rounded-2xl space-y-5">
        <div className=" space-y-2">
          <p className=" text-(--Blue) xl:text-2xl">Learning With Our CEO:</p>
          <h4 className=" text-(--primary) text-xl xl:text-4xl font-semibold italic">
            Transformation Hub With Jite Newton
          </h4>
        </div>
        <p className=" xl:text-xl">
          Transformation Hub with Jite Newton is a flagship webinar series
          curated by the CEO, Dr. Jite Newton. Designed to elevate career
          trajectories and leadership capabilities, this exclusive event offers
          invaluable insights and strategies for personal and professional
          growth. Whether you're seeking to advance your career or enhance your
          leadership skills, the Transformation Hub provides a transformative
          learning experience to unlock your full potential and drive success in
          your endeavours.
        </p>
        <div className=" space-y-5 xl:flex xl:items-center xl:gap-8">
          <Image
            src={LearnImage}
            alt="Learn with CEO"
            className=" rounded-lg xl:w-2/5"
          />
          <div className=" bg-white/30 rounded-lg p-5 space-y-6 xl:px-5 xl:py-8 xl:w-3/5">
            <div className=" space-y-3 xl:grid xl:grid-cols-2 xl:gap-x-6 xl:gap-y-3">
              {[
                "Strategic Career Guidance",
                "Leadership Development",
                "CV Development",
                "Sustainability Leadership",
                "Communication Skills",
                "Business Model",
              ].map((feature, index) => (
                <div
                  key={index}
                  className=" bg-white rounded-xl p-4 flex items-center gap-2.5"
                >
                  <Image src={Bolt} alt="Bolt" width={24} height={24} />
                  {feature}
                </div>
              ))}
            </div>
            <button className=" flex items-center gap-2 bg-(--primary) text-white px-6 py-3.5 rounded-sm">
              Learn More <HiArrowUpRight className=" " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default learn;
