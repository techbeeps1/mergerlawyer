"use client"
import Header from "@/components/Header";
import FadeUp from "@/components/gsap/FadeUp";
import ImageReveal from "@/components/gsap/ImageReveal";
import Image from "next/image";
import { FiArrowRight, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";



import "swiper/css";
import "swiper/css/navigation";
export default function ContactUsPage() {
  


  return (
    <main className="relative flex flex-col w-full items-center justify-start bg-white overflow-x-hidden">
      {/* Header — absolute positioned, overlays the hero */}
      <Header />

      {/* ── HERO SECTION ── */}
      <section className="relative w-full min-h-[800px] flex flex-col items-center justify-center overflow-hidden pb-[80px]">
        {/* Background Image */}
        <Image
          src="/hero_bg.jpg"
          alt="Hero background"
          fill
          priority
          className="object-cover object-center z-0"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 z-[1]"></div>

        {/* Hero Content */}
        <div className="relative z-[2] w-full container flex flex-col items-center text-center pt-[120px] md:pt-[140px]">
        <div className="max-w-[1000px]">
          <FadeUp delay={0.2}>
            <h1 className="text-[44px] sm:text-[56px] md:text-[68px] lg:text-[80px] font-heading font-bold text-white mb-6 leading-[1.1] drop-shadow-lg">
              Get in Touch
            </h1>
          </FadeUp>

          <FadeUp delay={0.4}>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white leading-[1.7]  font-sans mb-12 md:mb-16">
              Connect with experienced counsel to discuss your transaction, legal strategy, or next stage of growth.
            </p>
          </FadeUp>
        </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-[25px]">
          {/* Left Column - Image */}
          <div className="relative w-full rounded-[25px] overflow-hidden">
            <ImageReveal delay={0.2} direction="right">
              <Image
                src="/contact-img.jpg"
                alt="Contact us"
                width={709} 
                height={819}           
              />
            </ImageReveal>
          </div>

          {/* Right Column - Form */}
          <div className="flex flex-col justify-center">
            <FadeUp>
              <h2 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-heading font-medium text-black leading-[42px] md:leading-[60px] lg:leading-[74px] mb-[30px]">
                Book A Consultation
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <form className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-secondary/30 border border-secondary rounded-[30px] px-[26px] py-[15px] h-[64px] text-[16px] leading-[30px] tracking-normal text-[#666666] placeholder:text-[#666666] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full bg-secondary/30 border border-secondary rounded-[30px] px-[26px] py-[15px] h-[64px] text-[16px] leading-[30px] tracking-normal text-[#666666] placeholder:text-[#666666] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-secondary/30 border border-secondary rounded-[30px] px-[26px] py-[15px] h-[64px] text-[16px] leading-[30px] tracking-normal text-[#666666] placeholder:text-[#666666] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />

              <input
                type="text"
                placeholder="Company"
                className="w-full bg-secondary/30 border border-secondary rounded-[30px] px-[26px] py-[15px] h-[64px] text-[16px] leading-[30px] tracking-normal text-[#666666] placeholder:text-[#666666] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />

              <div className="relative">
                <select 
                  defaultValue="" 
                  className="w-full bg-secondary/30 border border-secondary rounded-[30px] px-[26px] py-[15px] h-[64px] text-[16px] leading-[30px] tracking-normal text-[#666666] appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                >
                  <option value="" disabled className="text-[#666666]">Service Interest</option>
                  <option value="mergers">Mergers & Acquisitions</option>
                  <option value="corporate">Corporate Law</option>
                  <option value="intellectual">Intellectual Property</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-[26px] flex items-center pointer-events-none">
                  {/* Custom dropdown arrow */}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" stroke="#666666"/>
                  </svg>
                </div>
              </div>

              <textarea
                placeholder="Type Your Message"
                className="w-full bg-secondary/30 border border-secondary rounded-[20px] px-[26px] py-[15px] h-[250px] text-[16px] leading-[30px] tracking-normal text-[#666666] placeholder:text-[#666666] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
              ></textarea>

              <button
                type="button"
                className="w-full bg-primary hover:bg-[#153a6a] text-white py-[16px] px-[40px] md:px-[50px] rounded-[40px] text-[16px] md:text-[18px] font-bold leading-none transition-all cursor-pointer"
              >
                Register Now
              </button>
            </form>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH INFO SECTION ── */}
      <section className="w-full pb-16 md:pb-24 bg-white">
        <div className="container">
          <h3 className="text-[28px] md:text-[30px] font-heading font-bold text-black leading-[32px] md:leading-[37px] mb-[30px]">
            Get In Touch
          </h3>          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 mb-[60px]">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] shrink-0 bg-[#0E326B] rounded-full flex items-center justify-center text-white">
                <FiMail className="w-[22px] h-[22px] md:w-[32px] md:h-[32px]" />
              </div>
              <p className="text-[18px] md:text-[20px] text-black duration-300 hover:text-primary"><Link href="mailto:Contact@mergerlawyer.com">Contact@mergerlawyer.com</Link></p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] shrink-0 bg-[#0c2b5e] rounded-full flex items-center justify-center text-white">
                <FiPhone className="w-[22px] h-[22px] md:w-[32px] md:h-[32px]" />
              </div>
              <p className="text-[18px] md:text-[20px] text-black duration-300 hover:text-primary"> <Link href="tel:+17605177694">+1 (760) 517-7694</Link></p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] shrink-0 bg-[#0c2b5e] rounded-full flex items-center justify-center text-white">
                <FiMapPin className="w-[22px] h-[22px] md:w-[32px] md:h-[32px]" />
              </div>
              <p className="text-[18px] md:text-[20px] text-black leading-[1.4]">
                2010 El Camino Real, Ste <br className="hidden lg:block" /> 1463, Santa Clara, CA
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[350px] md:h-[537px] rounded-[26px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.1428383839213!2d-121.95460208469493!3d37.3510529798387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb7c4c1c9c43%3A0x6b1b4b2a8a1c9c43!2s2010%20El%20Camino%20Real%20%231463%2C%20Santa%20Clara%2C%20CA%2095050!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}