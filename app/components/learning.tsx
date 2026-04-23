import Image from "next/image";
import Learning from "../assets/Learning.jpg";
import { HiArrowUpRight } from "react-icons/hi2";

const learning = () => {
  return (
    <section className=" bg-(--primary)/10 p-6 space-y-6 xl:px-16 xl-py-12 xl:grid xl:grid-cols-8 xl:gap-20 items-center justify-center">
      {/* mobile title */}
      <p className=" text-(--primary) text-2xl font-semibold xl:hidden text-center">Learning Management System</p>
      {/* image */}
      <div className=" relative w-96 h-96 xl:w-115 xl:h-115 rounded-full overflow-hidden flex items-center justify-center m-auto xl:col-span-3 mb-6 xl:mb-0">
        <Image
          src={Learning}
          alt="A man and a woman smiling in a cheerful way"
          fill
          className=" object-cover object-center"
        />
      </div>
      <div className=" bg-(--primary)/10 p-6 rounded-lg space-y-6 xl:col-span-5 xl:w-fit">
      {/* desktop title */}
        <p className=" text-(--primary) text-5xl hidden font-semibold xl:block">
          Learning Management System
        </p>
        <p className=" xl:text-lg">
          TG Academy is a hub of knowledge and skill-building resources designed
          to empower tech talents on their learning journey. From technical
          courses covering the latest programming languages and development
          frameworks to soft skills training in leadership, effective
          communication and project management, TG Academy offers a wide range
          of courses to cater to diverse learning needs. With accessible and
          interactive learning materials, individuals can enhance their skills
          and stay ahead in today's competitive tech landscape.
        </p>
        {/* course list */}
        <div className=" space-y-3">
          <p className=" text-(--primary) font-bold text-lg">Some of our courses include:</p>
          <ul className=" list-disc list-inside space-y-3 xl:flex xl:flex-wrap xl:gap-x-6">
            <li>Business Analysis</li>
            <li>Design Thinking</li>
            <li>Effective Communication</li>
            <li>Entrepreneurship</li>
            <li>Career Development</li>
            <li>Business Model</li>
          </ul>
        </div>
        {/* CTA */}
        <button className=" flex items-center gap-2 bg-(--primary) text-white px-8 py-4.5 rounded-sm">
            Learn More <HiArrowUpRight className=" "/>
        </button>
      </div>
    </section>
  );
};

export default learning;
