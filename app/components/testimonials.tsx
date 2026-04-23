'use client'

import Aisha from "../assets/Aisha.png";
import John from "../assets/John.png";
import Chinonso from "../assets/Chinonso.png";
import Rita from "../assets/Rita.jpg";
import Femi from "../assets/Femi.png";
import David from "../assets/David.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

// Component must be PascalCase
const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  const testimonialsData = [
    {
      name: "Aisha Yusuf",
      title: "Founder, CraftHub NG",
      testimonial:
        "Working with Tobams Group on our website was a breeze. They understood our vision and transformed it into a beautiful online space. Highly recommend their Website Design service!",
      image: Aisha,
    },
    {
      name: "John Davies",
      title: "Marketing Manager, E-Commerce Emporium",
      testimonial:
        "Tobams Group's Digital Marketing strategies gave our brand the boost it needed. Simple yet powerful techniques that delivered tangible results. A pleasure to collaborate with!",
      image: John,
    },
    {
      name: "Chinonso Nwankwo",
      title: "HR Director, FutureTech Solutions",
      testimonial:
        "Tobams Group has been instrumental in our talent acquisition journey. Their Tech Talent Solution service consistently connects us with the right professionals. Reliable and straightforward.",
      image: Chinonso,
    },
    {
      name: "Rita Ahmed",
      title: "Creative Director, ArtInnovate Studios",
      testimonial:
        "The Creative and Digital Media services at Tobams Group brought our ideas to life. Simple, creative, and impactful – exactly what we needed for our projects.",
      image: Rita,
    },
    {
      name: "David Johnson",
      title: "Small Business Owner",
      testimonial:
        "Tobams Group's Digital Marketing tips transformed my small business. Their guidance is simple, effective, and perfect for anyone looking to grow online.",
      image: David,
    },
    {
      name: "Femi Adekunle",
      title: "IT Professional",
      testimonial:
        "As an IT professional, Tobams Group's Tech Talent Development program sharpened my skills. The hands-on approach and mentorship are invaluable",
      image: Femi,
    },
  ];

  // Set cardsToShow based on screen size
  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(window.innerWidth >= 1280 ? 3 : 1);
    };
    handleResize(); // set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setStartIndex((prev) => 
      prev + 1 > testimonialsData.length - cardsToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) => 
      prev - 1 < 0 ? testimonialsData.length - cardsToShow : prev - 1
    );
  };

  return (
    <div className="p-6 space-y-6 xl:p-16">
      <h4 className="font-nunito font-bold text-xl text-center xl:text-3xl">
        Testimonials
      </h4>
      
      {/* Cards Container */}
      <section className="flex gap-6 overflow-hidden">
        {testimonialsData.map((testimonial, index) => {
          const isVisible = index >= startIndex && index < startIndex + cardsToShow;
          return (
            <div
              key={index}
              className={`bg-(--Secondary) rounded-xl overflow-hidden shrink-0 w-full xl:w-[calc(33.333%-16px)] ${
                isVisible ? "block" : "hidden"
              }`}
            >
              <div className="bg-white ml-1.5 rounded-xl px-6 py-5 space-y-5 h-full">
                <div className="flex items-center gap-5">
                  <div className="h-11 w-11 rounded-full flex items-center justify-center overflow-hidden relative shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-center object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div>
                    <h6 className="text-lg font-semibold">{testimonial.name}</h6>
                    <p className="text-(--subdued) text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed">{testimonial.testimonial}</p>
              </div>
            </div>
          );
        })}
      </section>

      {/* Buttons */}
      <div className="flex items-center justify-end gap-3">
        <button
          className="text-(--Secondary) bg-(--Secondary)/10 w-10 h-10 rounded-sm flex items-center justify-center hover:bg-(--Secondary)/20 transition"
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          <MdOutlineKeyboardArrowLeft className="text-xl" />
        </button>
        <button
          className="text-(--Secondary) bg-(--Secondary)/10 w-10 h-10 rounded-sm flex items-center justify-center hover:bg-(--Secondary)/20 transition"
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          <MdOutlineKeyboardArrowRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;