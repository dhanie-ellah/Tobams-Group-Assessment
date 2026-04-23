import Image from "next/image";
import Management from "../assets/Management.jpg";
import Bolt from '../assets/bolt.png'

const management = () => {
  return (
    <section className=" m-6 xl:m-16 px-5 py-4 xl:p-10 bg-(--Purple) text-white rounded-3xl space-y-5 xl:grid xl:grid-cols-2 xl:gap-12">
      {/* mobile title */}
      <h4 className="text-lg xl:hidden">Management Development Program</h4>
      <div className=" overflow-hidden rounded-lg rounded-br-none relative">
        {/* mobile image */}
        <Image src={Management} alt="Management Development Program" className=" xl:hidden" />
        {/* desktop image */}
        <Image src={Management} alt="Management Development Program" fill className=" hidden xl:block object-cover object-center" />
      </div>
      <div className="space-y-8">
        {/* desktop title */}
        <h4 className="text-5xl hidden xl:block">Management Development Program</h4>
        <p className=" text-xl">
          Tobams Group offers a comprehensive Management Development Program
          designed to equip corporate organisations with the high -performing
          leaders they need to thrive.
        </p>
        <p className=" text-xl">
          Our program includes workshops, seminars, coaching sessions, online
          courses, and experiential learning opportunities designed to improve
          leadership, strategic thinking, communication, and other essential
          managerial competencies for corporate organisations.
        </p>
        <ul className=" space-y-6 my-2 xl:px-4 xl:py-2">
          {[
            "Enhanced Leadership Skills",
            "Improved Employee Enagagement",
            "Stronger Organizational Culture",
            "Sustainable Growth",
          ].map((benefit, index) => (
            <li key={index} className=" flex items-center bg-(--Purple40) px-2 py-1 rounded-lg gap-2">
              {/* <FaBoltLightning /> */}
              <Image src={Bolt} alt='Bolt icon' width={32} height={32} />
              <p>{benefit}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default management;
