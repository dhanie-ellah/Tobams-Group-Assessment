import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { MdKeyboardArrowRight } from "react-icons/md";

const training = () => {
  const training = [
    {
      title: "Expert-Led Learning",
      description:
        "Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.",
    },
    {
      title: "Comprehensive Curriculum",
      description:
        "Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.",
    },
    {
      title: "Interactive Workshops",
      description:
        "Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.",
    },
    {
      title: "Global Recognition",
      description:
        "You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.",
    },
  ];

  const xlOrder = ["xl:order-1", "xl:order-3", "xl:order-2", "xl:order-4"];

  return (
    <div className=" bg-(--primary)/10 p-6 space-y-8 xl:px-16 xl:py-12">
      <div className=" space-y-3">
        <h4 className=" text-2xl xl:text-5xl text-(--primary) font-semibold">
          Training The Consultant
        </h4>
        <p className=" text-(--primary) text-lg xl:text-xl font-semibold">
          Maximize Your Potential as a Certified Trainer:
        </p>
      </div>
      <p className=" xl:text-xl">
        With the help of our Business Analysis Training Consultants program,
        take a revolutionary step toward becoming a distinguished certified
        trainer. Learn from professionals in the field, immerse yourself in a
        thorough curriculum, and hone your training methods through interactive
        workshops. Participating in our program will enable you to gain
        expertise in Business Analysis while also developing the abilities to
        mentor and encourage others in their career advancement.
      </p>
      <div className=" bg-(--primary) rounded-lg p-6 space-y-5 text-white xl:grid xl:grid-cols-2 xl:gap-5">
        {training.map((item, index) => (
          <div key={index} className={`space-y-3 ${xlOrder[index]}`}>
            <h4 className="font-bold text-lg">{item.title}</h4>
            <p className=" xl:text-lg">{item.description}</p>
          </div>
        ))}
      </div>
      <button className=" flex items-center gap-2 bg-(--primary) text-white px-6 py-3.5 rounded-lg">
        Learn More <MdKeyboardArrowRight className=" text-3xl xl:hidden" /> <HiArrowUpRight className="hidden xl:block "/>
      </button>
    </div>
  );
};

export default training;
