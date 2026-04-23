import React from 'react'
import Image from 'next/image'
import HeroImage from '../assets/Hero.jpg'
import { nunito } from '../layout'

const hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <Image 
        src={HeroImage} 
        alt="Woman operating a laptop"
        fill
        className="object-cover"
        priority
        placeholder="blur"
      />
      {/* text content */}
      <div className="relative z-10 bg-black/70 flex flex-col text-white items-center justify-center w-full px-6 py-10 xl:px-16 xl:py-28 xl:space-y-10">
        <h4 className="text-xs px-8 py-2.5 bg-white/10 rounded-full mb-2">WHAT WE DO</h4>
        <h1 className="text-2xl mb-3 font-nunito font-bold xl:text-6xl">Learning and Development</h1>
        <p className="text-center leading-5.5 mb-6 xl:text-xl xl:px-30">
          Our comprehensive range of programs and resources is designed to enhance skills, 
          broaden knowledge, and propel careers forward in today's ever-evolving landscape.
        </p>
        <button className="bg-(--primary) px-6 py-2.5 rounded-sm text-sm">
          Book a Consultation
        </button>
      </div>
    </section>
  )
}

export default hero