import Corporate from "../assets/corporate training.jpg";
import Individual from "../assets/individual training.jpg";
import Development from "../assets/capacity development.jpg";
import Image from "next/image";
import Bolt from '../assets/Vector.png'

// Component must be PascalCase
const Features = () => {
  interface FeatureProp {
    title: string;
    description: string;
    list: string[];
    image: any;
    topLeft?: number;
    topRight?: number;
    bottomLeft?: number;
    bottomRight?: number;
  }

  const features: FeatureProp[] = [
    {
      title: "Corporate Trainings",
      description:
        "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
      list: [
        "Leadership Training",
        "Strategic Planning and Implementation",
        "Project Management",
        "Sustainability Training",
        "Customised Training",
      ],
      image: Corporate,
      topLeft: 30,
      topRight: 24,
      bottomLeft: 40,
      bottomRight: 23,
    },
    {
      title: "Personalised Individual Training",
      description:
        "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.",
      list: [
        "Leadership Development",
        "Soft Skills Development",
        "Industry Specific Knowledge",
        "Technical Skills Enhancement",
        "Time Management and Productivity",
        "Career Development",
      ],
      image: Individual,
      topLeft: 33,
      topRight: 8,
      bottomLeft: 8,
      bottomRight: 8,
    },
    {
      title: "Capacity Development",
      description:
        "At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:",
      list: [
        "Tailored Training Programs",
        "Expert-Led Workshops",
        "Personalized Mentorship",
        "Technical Skills Enhancement",
        "Collaborative Learning Environment",
        "Ongoing Support and Resources",
      ],
      image: Development,
      topLeft: 33,
      topRight: 8,
      bottomLeft: 8,
      bottomRight: 8,
    },
  ];

  return (
    <section className="p-6 space-y-6 pt-12 xl:p-16">
      {features.map((feature, index) => (
        <div
          key={index}
          className="space-y-6 xl:flex xl:items-center xl:odd:flex-row xl:even:flex-row-reverse xl:gap-16"
        >
          {/* mobile title */}
          <p className="text-2xl font-semibold xl:hidden">{feature.title}</p>

          {/* Image - I used style prop for dynamic border radius because I was unable to achieve it with tailwindcss */}
          <div
            className="xl:w-1/2 overflow-hidden"
            style={{
              borderTopLeftRadius: `${feature.topLeft}px`,
              borderTopRightRadius: `${feature.topRight}px`,
              borderBottomLeftRadius: `${feature.bottomLeft}px`,
              borderBottomRightRadius: `${feature.bottomRight}px`,
            }}
          >
            <Image
              src={feature.image}
              alt={feature.title}
              className="w-full h-auto object-cover"
            />
          </div>
            {/* text content */}
          <div className="space-y-5 text-(--subdued) xl:w-1/2">
          {/* desktop title */}
            <p className="text-4xl text-(--main-text) font-semibold hidden xl:block">
              {feature.title}
            </p>
            <p className="xl:text-xl">{feature.description}</p>
            <ul className="space-y-1.5 xl:px-8">
              {feature.list.map((item, i) => (
                <li key={i} className="flex items-center gap-3.5 xl:text-xl">
                  <Image src={Bolt} alt='Bolt icon' width={12} height={12} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;