import Image from "next/image";
import Logo from "../assets/Seecondary Logo copy 1.png";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaXTwitter,
} from "react-icons/fa6";

const footer = () => {
  return (
    <footer>
      <section className=" bg-(--Purple) text-white p-6 border-b space-y-6 xl:flex xl:items-center xl:justify-between xl:px-16 xl:py-8">
        <div className=" space-y-4">
          <p>Ready to be a part of something extraordinary?</p>
          <h4 className=" text-2xl">
            Let’s work together to create a difference
          </h4>
        </div>
        <button className="bg-(--primary) px-6 py-3 rounded-sm text-sm">
          Get in Touch
        </button>
      </section>

      <section className=" bg-(--footerPurple) text-white p-6 space-y-5 xl:px-16 xl:py-8">
        <div className=" space-y-5 xl:flex xl:gap-28 xl:justify-between">
          <div className=" space-y-6 xl:w-[30%]">
            <Image src={Logo} alt="Logo" width={200} height={100} />
            <p>
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>
            <div className=" flex items-center gap-5">
              <div className=" w-10 h-10 bg-white text-(--main-text) text-2xl rounded-full flex items-center justify-center">
                <FaLinkedinIn />
              </div>
              <div className=" w-10 h-10 bg-white text-(--main-text) text-2xl rounded-full flex items-center justify-center">
                <FaInstagram />
              </div>
              <div className=" w-10 h-10 bg-white text-(--main-text) text-2xl rounded-full flex items-center justify-center">
                <FaXTwitter />
              </div>
            </div>
          </div>
          {/* what we do section */}
          <div className=" space-y-4 xl:text-nowrap">
            <h4 className=" font-bold text-xl">What We Do</h4>
            <div className=" space-y-3">
              <p>Sustainability Services</p>
              <p>Strategy Planning and Implementation</p>
              <p>Tech Talent Solutions</p>
              <p>Training and Development</p>
              <p>IT Consulting Services</p>
              <p>Social Impact</p>
            </div>
          </div>
          {/* company section */}
          <div className="space-y-4 xl:text-nowrap">
            <h4 className=" font-bold text-xl">Company</h4>
            <div className=" space-y-3">
              <p>About</p>
              <p>Jobs</p>
              <p>Projects</p>
              <p>Our Founder</p>
              <p>Business Model</p>
              <p>The Team</p>
              <p>Contact Us</p>
              <p>Blog</p>
              <p>FAQs</p>
              <p>Testimonials</p>
            </div>
          </div>
          {/* solution section */}
          <div className="space-y-4 xl:text-nowrap">
            <h4 className=" font-bold text-xl">Solution</h4>
            <div className=" space-y-3">
              <p>Tobams Group Academy</p>
              <p>Help a Tech Talent</p>
              <p>Campus Ambassadors Program</p>
              <p>Join Our Platform</p>
              <p>Pricing</p>
              <p>Book a Consultation</p>
              <p>Join Our Slack Community</p>
            </div>
          </div>
        </div>
        <hr className=" border-(--lineBorder)/10 xl:hidden" />
        {/* contact and security section */}
        <div className=" space-y-6">
          <div className=" p-4 rounded-lg bg-white/5 space-y-6 xl:flex xl:flex-row-reverse xl:gap-6">
            {/* contact information */}
            <div className=" space-y-4">
              <h4 className=" text-xl font-bold">Contact Information</h4>
              <div className=" space-y-2.5">
                <div className=" flex gap-4 items-center">
                  <FaEnvelope className=" text-2xl text-(--Secondary)" />
                  <p>theteam@tobamsgroup.com</p>
                </div>
                <div className=" flex gap-4 items-center">
                  <FaPhone className=" text-2xl text-(--Secondary)" />
                  <p>+447886600748</p>
                </div>
              </div>
            </div>
            <div className=" hidden xl:block bg-(--Secondary)/10 w-0.5"></div>
            {/* registered offices */}
            <div className=" space-y-2.5">
              <h4 className=" text-xl font-bold">Registered Offices</h4>
              <div className=" space-y-8 xl:flex xl:flex-row xl:gap-6">
                <div className="">
                  <p className=" text-(--Secondary)">United Kingdom</p>
                  <p>
                    07451196 (Registered by Company House) Vine Cottages, 215
                    North Street, Romford, Essex, United Kingdom, RM1 4QA
                  </p>
                </div>
                {/* vertical line division in desktop view */}
                <div className=" hidden xl:block bg-(--Secondary)/10 w-0.5"></div>
                <div className="">
                  <p className=" text-(--Secondary)">Nigeria</p>
                  <p>
                    RC 1048722 (Registered by the Corporate Affairs Commission){" "}
                    <br className=" xl:hidden" /> 4, Muaz Close,
                    Angwari-Rimi{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className=" border-(--lineBorder)/10" />
          {/* security */}
          <div className=" space-y-3 font-light xl:flex xl:flex-row-reverse xl:items-center xl:justify-between">
            <div className=" underline flex gap-6 flex-wrap justify-center">
              <a href="#">Privacy Policy</a>
              <a href="#">Cookies Policy</a>
              <a href="#">Terms and Conditions</a>
            </div>
            <p className=" text-center">
              Copyright &copy; Tobams Group, 2024. All rights reserved
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default footer;
