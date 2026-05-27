"use client";
import Image from "next/image";
import LogoMarquee from "@/components/LogoMarquee";
import { useState, useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import FadeUp from "@/components/gsap/FadeUp";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import AnimatedCard from "@/components/gsap/AnimatedCard";
import ImageReveal from "@/components/gsap/ImageReveal";

const steps = [
  {
    id: 1,
    title: "Elite Training",
    desc: "Trained at DLA Piper and Fenwick, two of the country's top tech M&A practices, I bring big-law deal expertise to founder-side transactions.",
  },
  {
    id: 2,
    title: "Experienced Insight",
    desc: "I've worked both sides of the table. You'll see their moves before they make them.",
  },
  {
    id: 3,
    title: "Bespoke Specialist Model",
    desc: "I bring in specialists only when your deal needs them — no unnecessary overhead, just the right expertise at the right time.",
  },
  {
    id: 4,
    title: "Technology-Enabled Precision",
    desc: "Enterprise tools and automated systems cut inefficiency. You get sharp deal work, not bloated process.",
  },
  {
    id: 5,
    title: "Boutique Pricing",
    desc: "Big Law pricing doesn't work for most founders. I offer elite M&A counsel with flat fees and cost certainty around liquidity events.",
  },
];

const testimonials = [
  {
    id: 6,
    text: "Syeda and her law firm, Empowering Legal Solutions, were quick and professional to assist me in getting the legal paperwork and foundation established for my company, especially during a particularly difficult time in my life. Couldn't have asked for a more competent and reliable attorney to work with. When we meet, we get down to business, address any problems, and the rest is just pleasant conversation. On a more personal note, it has also been an honor to watch her launch ELS and grow the law firm that anyone would be proud of. I highly recommend her to anybody who is looking for legal services",
    name: "Evan Blackmon",
    company: "Align Accounting LLC",
  },
  {
    id: 7,
    text: "Syeda and ELS guided us through a complex tax deferred spin off and separation transaction, spinning out NewCo from OldCo alongside a broader restructure. She was proactive, thoughtful, and pulled in the right additional resources when needed to ensure every detail was handled correctly. Beyond the legal work, she helped draft clear communications for internal stakeholders and investors, and she ran a disciplined process so I always knew what steps were required, where we stood, and what was next. We have continued working with Syeda as our go to counsel and plan to keep partnering with her as we scale.",
    name: "Waleed Mohsen",
    company: "Verbal AI Technologies, Inc.",
  },
  {
    id: 8,
    text: "Empowering Legal Solutions PC has been instrumental in supporting the growth of HopeLine Connections from day one. Syeda exceeded my expectations from the start. When founding HopeLine Connections, she handled our registration seamlessly and continued providing dedicated legal support throughout the year. Beyond her strong legal expertise, Syeda demonstrated genuine care for our success by connecting us with important contacts who helped us grow. She is fast, reliable, and trustworthy, exactly what you need in a legal partner. I'm grateful for her support and highly recommend her services.",
    name: "Yusuf Alzaeem",
    company: "Hopeline Connections",
  },
  {
    id: 9,
    text: "Syeda and her law firm, Empowering Legal Solutions, were quick and professional to assist me in getting the legal paperwork and foundation established for my company, especially during a particularly difficult time in my life. Couldn't have asked for a more competent and reliable attorney to work with. When we meet, we get down to business, address any problems, and the rest is just pleasant conversation. On a more personal note, it has also been an honor to watch her launch ELS and grow the law firm that anyone would be proud of. I highly recommend her to anybody who is looking for legal services",
    name: "Evan Blackmon",
    company: "Align Accounting LLC",
  },
  {
    id: 10,
    text: "Syeda and ELS guided us through a complex tax deferred spin off and separation transaction, spinning out NewCo from OldCo alongside a broader restructure. She was proactive, thoughtful, and pulled in the right additional resources when needed to ensure every detail was handled correctly. Beyond the legal work, she helped draft clear communications for internal stakeholders and investors, and she ran a disciplined process so I always knew what steps were required, where we stood, and what was next. We have continued working with Syeda as our go to counsel and plan to keep partnering with her as we scale.",
    name: "Waleed Mohsen",
    company: "Verbal AI Technologies, Inc.",
  },
  {
    id: 11,
    text: "Empowering Legal Solutions PC has been instrumental in supporting the growth of HopeLine Connections from day one. Syeda exceeded my expectations from the start. When founding HopeLine Connections, she handled our registration seamlessly and continued providing dedicated legal support throughout the year. Beyond her strong legal expertise, Syeda demonstrated genuine care for our success by connecting us with important contacts who helped us grow. She is fast, reliable, and trustworthy, exactly what you need in a legal partner. I'm grateful for her support and highly recommend her services.",
    name: "Yusuf Alzaeem",
    company: "Hopeline Connections",
  },
];

export default function Home() {
  const [activeStep, setActiveStep] = useState(1);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  useEffect(() => {
    if (typeof window === "undefined" || !window.IntersectionObserver) return;

    const visibilityMap = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = stepRefs.current.findIndex(
            (ref) => ref === entry.target,
          );
          if (index !== -1) {
            visibilityMap.set(index + 1, entry.isIntersecting);
          }
        });

        let lowestVisible = null;
        for (let i = 1; i <= steps.length; i++) {
          if (visibilityMap.get(i)) {
            lowestVisible = i;
            break;
          }
        }

        if (lowestVisible !== null) {
          setActiveStep(lowestVisible);
        }
      },
      { rootMargin: "-30% 0px -30% 0px", threshold: 0 },
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative flex flex-col w-full min-h-screen items-center justify-start overflow-x-hidden bg-[#1A2530]">
        {/* Background Image Wrapper */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: "url('/hero_bg.jpg')" }}
        >
          {/* Dark overlay to make text readable */}
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Gradient fade at the bottom to blend with background color if needed */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a202c] to-transparent opacity-50"></div>
        </div>

        {/* Giant "Merger Lawyer" Text Background Layer */}
        {/* Centered with pure clamp() values for both gap and text size so it perfectly scales */}

        <div className="absolute top-[15%] md:top-[22%] left-1/2 -translate-x-1/2 w-full flex justify-between gap-[clamp(10px,13vw,250px)] 2xl:px-[50px] px-[20px] z-0 opacity-100 pointer-events-none select-none">
          <span className="text-[clamp(30px,10vw,206px)] font-heading font-bold text-white leading-none capitalize whitespace-nowrap">
            Merger
          </span>
          <span className="text-[clamp(30px,10vw,206px)] font-heading font-bold text-white leading-none capitalize whitespace-nowrap">
            Lawyer
          </span>
        </div>

        {/* The Woman Image */}
        {/* Mobile: relative to flow under Merger Lawyer. Desktop: absolute bottom center */}
        <div className="md:absolute relative md:bottom-0 md:left-[48%] md:-translate-x-1/2 mt-[22vh] sm:mt-[25vh] md:mt-0 z-10 h-[50vh] sm:h-[60vh] md:h-[65%] lg:h-[88%] max-h-[900px] w-full md:w-auto flex justify-center pointer-events-none select-none">
          <ImageReveal delay={0.2} direction="bottom" className="h-full w-auto">
            <Image
              src="/Nazifa-4.png"
              alt="Lawyer"
              width={900}
              height={1100}
              className="object-contain h-full w-auto object-bottom drop-shadow-2xl"
              priority
            />
          </ImageReveal>
        </div>

        <div className="relative z-20 w-full container px-4 sm:px-8 md:px-6 lg:px-10 h-full flex flex-col justify-start pt-8 md:pt-32 pb-0 flex-1 md:min-h-[800px]">
          {/* Main Content Layout */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-4 md:mt-[240px] lg:mt-[300px] w-full h-full pb-10 md:pb-20 gap-16 md:gap-4 lg:gap-0 z-20">
            {/* Left Column */}
            <div className="w-full md:w-[40%] lg:w-[32%] flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-5 lg:gap-6 drop-shadow-md">
              <FadeUp delay={0.2}>
                <h2 className="text-[36px] sm:text-[40px] md:text-[32px] lg:text-[44px] xl:text-[50px] font-bold font-heading text-white leading-none">
                  M&A Counsel
                </h2>
              </FadeUp>

              <div className="flex flex-col gap-4 md:gap-4 lg:gap-5 w-full sm:w-[80%] md:w-full lg:w-[85%] mt-2">
                <FadeUp delay={0.2}>
                  <div className="border-b border-white/60 pb-3 w-full">
                    <h3 className="text-[24px] md:text-[28px] lg:text-[32px] leading-[24px] font-bold font-heading text-white mb-1">
                      35+ M&A
                    </h3>
                    <p className="font-heading font-bold text-[16px] lg:text-[18px] leading-[20px] lg:leading-[24px] text-gray-200 mt-1 lg:mt-2">
                      Transactions advised
                    </p>
                  </div>
                </FadeUp>
                <FadeUp delay={0.4}>
                  <div className="border-b border-white/60 pb-3 w-full">
                    <h3 className="text-[24px] md:text-[28px] lg:text-[32px] leading-[24px] font-bold font-heading text-white mb-1">
                      $3B Nearly
                    </h3>
                    <p className="font-heading font-bold text-[16px] lg:text-[18px] leading-[20px] lg:leading-[24px] text-gray-200 mt-1 lg:mt-2">
                      Total deal value experience
                    </p>
                  </div>
                </FadeUp>
                <FadeUp delay={0.6}>
                  <div className="border-b border-white/60 pb-3 w-full">
                    <h3 className="text-[24px] md:text-[28px] lg:text-[32px] leading-[24px] font-bold font-heading text-white mb-1">
                      $25M Boutique
                    </h3>
                    <p className="font-heading font-bold text-[16px] lg:text-[18px] leading-[20px] lg:leading-[24px] text-gray-200 mt-1 lg:mt-2">
                      Focus on private tech deals under
                    </p>
                  </div>
                </FadeUp>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-[40%] lg:w-[32%] flex flex-col items-center md:items-start text-center md:text-start gap-4 md:gap-5 pb-10 drop-shadow-md mt-8 md:mt-0">
              <FadeUp delay={0.4}>
                <h2 className="text-[36px] sm:text-[40px] md:text-[32px] lg:text-[44px] xl:text-[50px] font-bold font-heading text-white leading-none">
                  For Tech Deals
                </h2>
              </FadeUp>
              <FadeUp delay={0.5}>
                <p className="text-[15px] md:text-[13px] lg:text-[16px] text-white/90 leading-relaxed max-w-[420px]">
                  When your buyer shows up with a full team — PE fund, AmLaw
                  counsel, and financial advisors — you need someone in your
                  corner who has been on that side of the table. Merger Lawyer
                  gives founders the deal expertise to compete, protect value,
                  and close on your terms.
                </p>
              </FadeUp>
              <FadeUp delay={0.6}>
                <Link
                  href="/contact-us"
                  className="bg-primary block hover:bg-white hover:text-primary text-white py-[16px] px-[50px] rounded-[40px] text-[16px] md:text-[20px] font-normal leading-none transition-all mt-2 md:mt-4 border border-transparent cursor-pointer"
                >
                  Book a Call
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <LogoMarquee />

      {/* Next Section: Problem/Context */}
      <section className="relative w-full bg-bg-color py-20 md:py-32 overflow-hidden flex justify-center items-center">
        {/* Left Feather */}
        <div className="absolute top-[-13px] left-[-99px] opacity-20 rotate-[324deg]">
          <Image
            src="/ELS_logo_icon1.png"
            alt="Decoration"
            height={505}
            width={317}
          />
        </div>

        {/* Right Feather */}
        <div className="absolute bottom-[-13px] right-[-99px] opacity-20 rotate-[324deg]">
          <Image
            src="/ELS_logo_icon2.png"
            alt="Decoration"
            height={505}
            width={317}
          />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 w-full container px-4 sm:px-8 md:px-10 flex flex-col items-center text-center">
          <FadeUp delay={0.2}>
            <h2 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-heading font-medium text-black leading-[42px] md:leading-[84px] text-center">
              In Lower Middle-Market M&A,
              <br className="hidden md:block" />
              Sophisticated Buyers Often Arrive Better Equipped Than Founders
            </h2>
          </FadeUp>
          <FadeUp delay={0.4}>
            <h3 className="mt-6 md:mt-4 text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] font-bold font-heading text-black max-w-[1225px] leading-relaxed lg:leading-[46px] text-center">
              {
                "When your counterparty shows up with a full team of advisors, having the right counsel on your side isn't optional -- it's the deal."
              }
            </h3>
          </FadeUp>

          <FadeUp delay={0.6}>
            <p className="mt-6 md:mt-4 text-[16px] lg:text-[20px] font-sans font-medium text-black leading-relaxed lg:leading-[34px] text-center">
              Most founders walk into M&A deals outmatched. Whether you are
              acquiring a company or selling one, the moment a term sheet is
              being discussed, you are in a high-stakes negotiation with
              significant consequences. On one side of the table: experienced
              M&A counsel, financial advisors, and often a private equity
              sponsor or corporate development team that has structured dozens
              of transactions like yours. On the other: a founder or operator
              who has built something valuable — and who may be navigating this
              process for the first or second time. The gap between those two
              levels of preparation is where deal value is lost, terms shift,
              and outcomes disappoint. Merger Lawyer was built to put elite M&A
              counsel on your side of that table.
            </p>
          </FadeUp>
          <FadeUp delay={0.7}>
            <Link
              href="/contact-us"
              className="mt-[30px] block bg-primary hover:bg-[#153a6a] text-white py-[17px] px-[50px] rounded-[40px] text-[16px] md:text-[20px] font-normal leading-none transition-all cursor-pointer border-none"
            >
              Book a Call
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Next Section: Why Choose Us Timeline */}
      <section className="w-full bg-white py-20 md:py-32 flex flex-col items-center overflow-hidden">
        {/* Title */}
        <FadeUp delay={0.2}>
          <h2 className="relative z-20 text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-heading font-medium text-black leading-[42px] md:leading-[60px] lg:leading-[74px] text-center max-w-[800px] px-4 mb-12 md:mb-24">
            Why Founders Choose
            <br />
            Merger Lawyer
          </h2>
        </FadeUp>

        {/* Timeline Container */}
        <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-8">
          {/* Central Vertical Line */}
          <div className="absolute left-[38.5px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-[#1C4A87] z-0"></div>

          <div className="flex flex-col gap-12 md:gap-20 relative z-10 w-full">
            {steps.map((step, index) => {
              const isActive = activeStep === step.id;
              const isEven = index % 2 === 1;

              return (
                <div
                  key={step.id}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  className="relative flex flex-col md:flex-row items-center w-full min-h-[140px]"
                >
                  {/* Desktop Left Column */}
                  <div
                    className={`hidden md:flex flex-1 justify-end pr-12 lg:pr-16 w-full ${isEven ? "invisible" : ""}`}
                  >
                    {!isEven && (
                      <div
                        className={`w-full max-w-[510px] rounded-[24px] md:rounded-[30px] py-6 px-5 md:py-[35px] md:px-[25px] transition-all duration-500 border ${isActive ? "bg-secondary border-transparent scale-[1.02] md:scale-105" : "bg-secondary/30 border-secondary shadow-[2px_2px_24px_0px_rgba(0,0,0,0.15)]"}`}
                      >
                        <h3 className="text-[20px] md:text-[26px] leading-tight md:leading-[30px] font-medium font-heading mb-2 md:mb-3 transition-colors duration-500 text-[#111111]">
                          {step.title}
                        </h3>
                        <p
                          className={`text-[15px] md:text-[20px] font-sans font-normal leading-relaxed md:leading-[34px] transition-colors duration-500 ${isActive ? "text-[#0A1A2E]" : "text-[#111111]"}`}
                        >
                          {step.desc}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center Circle */}
                  <div className="absolute top-1/2 -translate-y-1/2 md:top-auto md:translate-y-0 left-0 md:relative md:left-auto flex justify-center items-center shrink-0 w-[45px] md:w-[90px]">
                    {index === 0 && (
                      <div className="absolute bottom-[50%] left-1/2 -translate-x-1/2 w-[20px] h-[220px] bg-white z-[1]"></div>
                    )}

                    {/* Mask below last circle */}
                    {index === steps.length - 1 && (
                      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[20px] h-[500px] bg-white z-[1]"></div>
                    )}

                    {/* Solid White Background to hide line */}
                    <div
                      className={`absolute w-[45px] h-[45px] md:w-[90px] md:h-[90px] rounded-full bg-white z-[5] transition-all duration-500 ${isActive ? "scale-110" : ""}`}
                    ></div>

                    <div
                      className={`relative w-[45px] h-[45px] md:w-[90px] md:h-[90px] rounded-full flex items-center justify-center font-bold text-[24px] md:text-[50px] leading-none md:leading-[64px] transition-all duration-500 z-10 border border-[#0E326B] shadow-none ${isActive ? "bg-[#0E326B] text-white scale-110" : "bg-[#0E326B66] text-[#0E326B]"}`}
                    >
                      {step.id}
                    </div>
                  </div>

                  {/* Desktop Right Column & Mobile All Column */}
                  <div
                    className={`flex flex-1 justify-start pl-[80px] sm:pl-[90px] md:pl-12 lg:pl-16 w-full ${!isEven ? "md:invisible" : ""}`}
                  >
                    <div
                      className={`${!isEven ? "block md:hidden" : ""} w-full max-w-[510px] rounded-[24px] md:rounded-[30px] py-6 px-5 md:py-[35px] md:px-[25px] transition-all duration-500 border ${isActive ? "bg-secondary border-transparent scale-[1.02] md:scale-105" : "bg-secondary/30 border-secondary shadow-[2px_2px_24px_0px_rgba(0,0,0,0.15)]"}`}
                    >
                      <h3 className="text-[20px] md:text-[28px] leading-tight md:leading-[30px] font-medium font-heading mb-2 md:mb-3 transition-colors duration-500 text-[#111111]">
                        {step.title}
                      </h3>
                      <p
                        className={`text-[15px] md:text-[20px] font-sans font-normal leading-relaxed md:leading-[34px] transition-colors duration-500 ${isActive ? "text-[#0A1A2E]" : "text-[#111111]"}`}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Button */}
        <div className="mt-12 md:mt-24 relative z-20">
          <Link
            href={"/blog"}
            className="bg-primary hover:bg-[#153a6a] text-white py-[17px] px-[40px] md:px-[50px] rounded-[40px] text-[16px] md:text-[20px] font-normal leading-none transition-all cursor-pointer border-none"
          >
            Read a Case Study
          </Link>
        </div>
      </section>

      {/* Next Section: Legal Services Built Around the Deal Lifecycle */}
      <section className="w-full bg-[#E5EAEF] py-20 md:py-32 relative overflow-hidden">
        {/* Background Feathers */}
        {/* Left Feather */}
        <div className="absolute top-[-13px] left-[-99px] opacity-20 rotate-[324deg]">
          <Image
            src="/ELS_logo_icon1.png"
            alt="Decoration"
            height={505}
            width={317}
          />
        </div>

        {/* Right Feather */}
        <div className="absolute bottom-[-13px] right-[-99px] opacity-20 rotate-[324deg]">
          <Image
            src="/ELS_logo_icon2.png"
            alt="Decoration"
            height={505}
            width={317}
          />
        </div>

        <div className="w-full container px-4 sm:px-8 relative z-10 flex flex-col items-center">
          {/* Title */}
          <FadeUp delay={0.2}>
            <h2 className="text-[36px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-heading font-medium text-[#111111] leading-[42px] md:leading-[60px] lg:leading-[74px] text-center mb-6">
              Legal Services Built Around
              <br />
              the Deal Lifecycle
            </h2>
          </FadeUp>

          {/* Subtitle */}
          <FadeUp delay={0.4}>
            <p className="max-w-[900px] text-[16px] md:text-[18px] lg:text-[20px] font-sans font-medium text-[#111111] leading-relaxed text-center mb-16">
              From transaction strategy to closing execution, Merger Lawyer
              supports founders and private companies with focused counsel
              across key M&A and corporate matters.
            </p>
          </FadeUp>
          {/* 3-Column Grid */}

          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-[58px] lg:gap-y-[20px] gap-x-[20px] items-stretch">
            {/* Left Column */}
            <div className="flex flex-col gap-[58px]">
              {/* Box 1 */}
              <AnimatedCard
                delay={0.1}
                className="bg-secondary relative max-h-fit text-white px-[20px] py-[60px] rounded-[30px] text-center group hover:bg-primary transition-colors duration-300 h-full"
              >
                <Link href={"/services"} className="inline-block">
                  <h3 className="text-[24px] md:text-[26px] leading-[30px] font-medium font-heading mb-4">
                    Buy-Side M&A
                  </h3>
                  <p className="text-[16px] md:text-[20px] md:leading-[30px] leading-[28px] font-sans mb-8">
                    Strategic legal support for acquisitions, asset deals, stock
                    deals, diligence, negotiation, and closing execution.
                  </p>
                  <Link
                    href={"/services"}
                    className="mt-auto w-[70px] h-[70px] absolute bottom-[-34px] left-1/2 -translate-x-1/2 rounded-full bg-[#11336C] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 z-10"
                  >
                    <FiArrowUpRight size={32} />
                  </Link>
                </Link>
              </AnimatedCard>

              {/* Box 2 */}
              <AnimatedCard
                delay={0.2}
                className="bg-secondary relative  max-h-fit text-white px-[20px] py-[60px] rounded-[30px] text-center group hover:bg-primary transition-colors duration-300 cursor-pointer h-full"
              >
                <Link href={"/services"} className="inline-block">
                <h3 className="text-[24px] md:text-[26px] leading-[30px] font-medium font-heading mb-4">
                  M&A Preparation
                </h3>
                <p className="text-[16px] md:text-[20px] md:leading-[30px] leading-[28px] font-sans mb-8">
                  Pre-sale cleanup, diligence readiness, legal issue-spotting,
                  and structural preparation to reduce friction before going to
                  market.
                </p>
                <Link
                  href={"/services"}
                  className="mt-auto w-[70px] h-[70px] absolute bottom-[-34px] left-1/2 -translate-x-1/2 rounded-full bg-[#11336C] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 z-10"
                >
                  <FiArrowUpRight size={32} />
                </Link>
                </Link>
              </AnimatedCard>
            </div>

            {/* Center Column (Active) */}
            <div className="flex flex-col h-full min-h-[500px]">
              <AnimatedCard
                delay={0.3}
                className="bg-[#1C4A87] h-full text-white px-[20px] pt-[40px] pb-[30px] rounded-[30px] flex flex-col items-center text-center relative overflow-hidden shadow-xl"
              >
                <Link href={"/services"} className="inline-block">
                <h3 className="text-[24px] md:text-[26px] leading-[30px] font-medium font-heading mb-4">
                  General Corporate Counsel
                </h3>
                <p className="text-[16px] md:text-[20px] md:leading-[30px] leading-[28px] mb-8 px-4 flex-grow">
                  Ongoing legal guidance for governance, contracts, compliance,
                  hiring/firing, and day-to-day business support.
                </p>
                <div className="w-full relative mt-[50px] rounded-[20px]">
                  <ImageReveal
                    delay={0.2}
                    direction="bottom"
                    className="rounded-[20px]"
                  >
                    <Image
                      src="/service_img.jpg"
                      alt="Corporate Counsel"
                      height={369}
                      width={409}
                      className="w-full h-auto object-cover"
                    />
                  </ImageReveal>
                  <Link
                    href={"/services"}
                    className="w-[70px] h-[70px] absolute top-[-33px] left-1/2 -translate-x-1/2 rounded-full bg-[#58A9D3] flex items-center justify-center text-white transition-transform duration-300 hover:scale-110 z-10 shrink-0"
                  >
                    <FiArrowUpRight size={32} />
                  </Link>
                  </div>
                </Link>
                
              </AnimatedCard>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-[58px]">
              {/* Box 3 */}
              <AnimatedCard
                delay={0.4}
                className="bg-secondary relative  max-h-fit text-white px-[20px] py-[60px] rounded-[30px] text-center group hover:bg-primary transition-colors duration-300 h-full"
              >
                <Link href={"/services"} className="inline-block">
                <h3 className="text-[24px] md:text-[26px] leading-[30px] font-medium font-heading mb-4">
                  Sell-Side M&A
                </h3>
                <p className="text-[16px] md:text-[20px] md:leading-[30px] leading-[28px] font-sans mb-8">
                  Counsel for founders preparing for sale, evaluating terms,
                  protecting value, and managing the path to a smoother exit.
                </p>
                <Link
                  href={"/services"}
                  className="mt-auto w-[70px] h-[70px] absolute bottom-[-34px] left-1/2 -translate-x-1/2 rounded-full bg-[#11336C] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 z-10"
                >
                  <FiArrowUpRight size={32} />
                </Link>
                </Link>
              </AnimatedCard>

              {/* Box 4 */}
              <AnimatedCard
                delay={0.5}
                className="bg-secondary relative  max-h-fit text-white px-[20px] py-[60px] rounded-[30px] text-center group hover:bg-primary transition-colors duration-300 cursor-pointer h-full"
              >
                <Link href={"/services"} className="inline-block">
                <h3 className="text-[24px] md:text-[26px] leading-[30px] font-medium font-heading mb-4">
                  Other Complex
                  <br />
                  Transactions
                </h3>
                <p className="text-[16px] md:text-[20px] md:leading-[30px] leading-[28px] font-sans mb-8">
                  Support for recapitalizations, reorganizations, spin-offs,
                  joint ventures, and other high-stakes strategic matters.
                </p>
                <Link
                  href={"/services"}
                  className="mt-auto w-[70px] h-[70px] absolute bottom-[-34px] left-1/2 -translate-x-1/2 rounded-full bg-[#11336C] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 z-10"
                >
                  <FiArrowUpRight size={32} />
                </Link>
                </Link>
              </AnimatedCard>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="mt-16 md:mt-20">
            <Link
              href={"/services"}
              className="bg-primary inline-block hover:bg-[#153a6a] text-white py-[17px] px-[40px] md:px-[50px] rounded-[40px] text-[16px] md:text-[20px] font-normal leading-none transition-all cursor-pointer border-none"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full md:mt-[100px] mt-[60px]">
        <div className="container grid lg:grid-cols-2 gap-[44px] items-center">
          {/* MAIN IMAGE CARD */}
          <div
            className="relative shape z-10 pl-[30px] pt-[30px] w-full
    before:absolute
    before:content-['']
    before:top-0
    before:left-0
    before:w-[87%]
    before:h-[91%]
    before:bg-bg-color
    before:rounded-[32px]
    before:-z-10"
          >
            <ImageReveal delay={0.2}>
              <Image
                src="/Nazifa.jpg" // image public folder me rakho
                alt="Attorney"
                width={520}
                height={650}
                className="object-cover rounded-[28px] w-full"
              />
            </ImageReveal>
          </div>
          {/* RIGHT CONTENT */}
          <div>
            <FadeUp delay={0.2}>
              <h2 className="text-[36px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-heading font-medium text-black leading-[42px] md:leading-[60px] lg:leading-[74px] mb-8">
                Meet Syeda <br />
                Nazifa Nawroj
              </h2>
            </FadeUp>
            <FadeUp delay={0.4}>
              <p className="lg:text-[20px] text-[16px] lg:leading-[30px] leading-[28px] text-black font-medium mb-4">
                Syeda Nazifa Nawroj is the founder and principal attorney behind
                Merger Lawyer, a California-based boutique practice built to
                help founders and private companies navigate serious business
                transactions with clarity and strength. Before launching her
                firm, she advised on more than 35 M&A transactions totaling
                nearly $3 billion in deal value. She trained at DLA Piper and
                Fenwick, served as an editor of the NYU Law Review, and built
                her practice around the idea that elite deal counsel should be
                more accessible, more strategic, and more aligned with founder
                realities.
              </p>
            </FadeUp>
            <FadeUp delay={0.6}>
              <ul className="space-y-4 mb-10">
                {[
                  "35+ M&A transactions",
                  "Nearly $3B deal value experience",
                  "NYU School of Law",
                  "Executive Editor, NYU Law Review",
                  "Full scholarship to Mount Holyoke",
                  "Founder of Merger Lawyer",
                  "Author of Sell Your Start-Up",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 lg:text-[20px] text-[16px] lg:leading-[30px] leading-[28px] text-black font-medium"
                  >
                    <span className=" h-[8px] w-[8px] rounded-full bg-black" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={0.6}>
              <Link
                href={"/attorney"}
                className="bg-primary inline-block hover:bg-[#153a6a] text-white py-[17px] px-[40px] md:px-[50px] rounded-[40px] text-[16px] md:text-[20px] font-normal leading-none transition-all shadow-lg cursor-pointer border-none"
              >
                View Attorney Profile
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Next Section: Video Section */}
      <section className="relative w-full mt-12 md:mt-[100px] bg-bg-color py-16 md:py-32 overflow-hidden flex justify-center items-center">
        {/* Background Feathers */}
        <div className="absolute top-[-13px] left-[-99px] opacity-20 rotate-[324deg]">
          <Image
            src="/ELS_logo_icon1.png"
            alt="Decoration"
            height={505}
            width={317}
          />
        </div>
        <div className="absolute bottom-[-13px] right-[-99px] opacity-20 rotate-[324deg]">
          <Image
            src="/ELS_logo_icon2.png"
            alt="Decoration"
            height={505}
            width={317}
          />
        </div>

        <div className="relative z-10 w-full container px-4 sm:px-8 md:px-10 flex flex-col items-center">
          {/* Top Content: Title & Text */}
          <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-16 mb-10 md:mb-12 lg:mb-[60px]">
            <div className="w-full lg:w-[60%]">
              <FadeUp delay={0.2}>
                <h2 className="text-[36px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-heading font-medium text-black leading-[42px] md:leading-[60px] lg:leading-[74px]">
                  Get a Direct Sense of How Syeda Thinks
                </h2>
              </FadeUp>
            </div>
            <div className="w-full lg:w-[40%] max-w-[650px] flex flex-col items-start gap-5">
              <FadeUp delay={0.4}>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-medium text-black leading-relaxed">
                  For many founders, choosing counsel is not just about
                  credentials. It is about judgment, communication, and trust.
                  This section should connect visitors with {"Syeda's"}{" "}
                  presence, clarity, and strategic style before they ever book a
                  call.
                </p>
              </FadeUp>
              <FadeUp delay={0.6}>
                <Link
                  href="/contact-us"
                  className="bg-primary block hover:bg-[#153a6a] text-white py-[17px] px-[40px] md:px-[50px] rounded-[40px] text-[16px] md:text-[20px] font-normal leading-none transition-all cursor-pointer border-none mt-2"
                >
                  Book a Call
                </Link>
              </FadeUp>
            </div>
          </div>

          {/* Video Container */}
          <div className="w-full relative rounded-[16px] md:rounded-[20px] overflow-hidden shadow-none bg-black group aspect-video lg:aspect-auto lg:h-[620px]">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls={isPlaying}
              poster="/video-tumbnail-img.jpg"
              preload="metadata"
              muted
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/lawyer.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <>
                {/* Black overlay with 40% opacity */}
                <div className="absolute inset-0 bg-black/40 pointer-events-none z-10"></div>

                <div
                  className="absolute bottom-[20px] left-[20px] md:bottom-[40px] md:left-[40px] w-[60px] h-[60px] md:w-[90px] md:h-[90px] bg-white rounded-full flex items-center justify-center cursor-pointer shadow-lg z-20 hover:scale-105 transition-transform"
                  onClick={handlePlay}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 w-6 h-6 md:w-10 md:h-10"
                  >
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Next Section: Client Testimonials */}
      <section className="relative w-full mt-[100px] flex flex-col items-center overflow-hidden">
        {/* Title & Subtitle Container (Constrained) */}
        <div className="w-full container px-4 sm:px-8 flex flex-col items-center">
          {/* Title */}
          <FadeUp delay={0.2}>
            <h2 className="text-[36px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-heading font-medium text-black leading-[42px] md:leading-[60px] lg:leading-[74px] text-center mb-6">
              Client Testimonials
            </h2>
          </FadeUp>
          {/* Subtitle */}
          <FadeUp delay={0.2}>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-medium text-black text-center mb-6 md:mb-10">
              Trust matters most when the stakes are high. These testimonials
              reflect the blend of technical excellence, strategic judgment, and
              personal commitment clients value in {"Merger Lawyer's"} work.
            </p>
          </FadeUp>
        </div>

        {/* Slider Container (Custom Smooth Auto-play) */}
        <div className="w-full px-4 sm:px-8 overflow-hidden pt-4">
          <div className="flex gap-[16px] relative  md:gap-[20px] items-stretch w-full">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".test-next-1",
                prevEl: ".test-prev-1",
              }}
              spaceBetween={30}
              slidesPerView={2}
              //           autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: true,
              // }}
              speed={1500}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {testimonials.map((t, idx) => (
                <SwiperSlide key={t.id}>
                  <div
                    key={t.id + "-" + idx}
                    className="h-full w-full bg-secondary rounded-[20px] p-[24px] md:p-[30px] flex flex-col items-center text-center text-white shrink-0 shadow-md h-auto"
                  >
                    <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-medium mb-8 flex-1 whitespace-pre-wrap">
                      {t.text}
                    </p>
                    <div className="flex flex-col items-center mt-auto w-full">
                      <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-bold">
                        {t.name}
                      </p>
                      <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-bold mt-1 mb-4">
                        {t.company}
                      </p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="#FCD34D"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Navigation */}
            <button className="test-prev-1 text-[20px]  cursor-pointer text-white absolute top-1/2 left-0 z-10 -translate-y-1/2 bg-primary w-11 h-11 rounded-full shadow flex items-center justify-center">
              <IoIosArrowForward className="rotate-180 " />
            </button>
            <button className="test-next-1 text-[20px] cursor-pointer text-white absolute top-1/2 right-0 z-10 -translate-y-1/2 bg-primary w-11 h-11 rounded-full shadow flex items-center justify-center">
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        {/* Button Container (Constrained) */}
        <div className="w-full container px-4 sm:px-8 flex flex-col items-center mt-[36px]">
          <Link
            href={"/blog"}
            className="bg-primary inline-block hover:bg-[#153a6a] text-white py-[17px] px-[40px] md:px-[50px] rounded-[40px] text-[16px] md:text-[20px] font-normal leading-none transition-all shadow-lg cursor-pointer border-none"
          >
            Read a Case Study
          </Link>
        </div>
      </section>

      {/* Next Section: Ebook Download */}
      <section className="relative w-full mt-[100px] py-16 md:py-[100px] bg-bg-color overflow-hidden flex justify-center items-center">
        {/* Background Feathers */}
        <div className="absolute top-[-13px] left-[-99px] opacity-20 rotate-[324deg]">
          <Image
            src="/ELS_logo_icon1.png"
            alt="Decoration"
            height={505}
            width={317}
          />
        </div>
        <div className="absolute bottom-[-13px] right-[-99px] opacity-20 rotate-[324deg]">
          <Image
            src="/ELS_logo_icon2.png"
            alt="Decoration"
            height={505}
            width={317}
          />
        </div>

        <div className="relative z-10 w-full container px-4 sm:px-8 md:px-10 grid grid-cols-1 lg:grid-cols-[667fr_773fr] gap-[20px] items-center">
          {/* Left Column: QR Image */}
          <div className="flex justify-center lg:justify-center">
            <ImageReveal delay={0.1} direction="left" className="w-full ">
              <Image
                src="/QR-scane.jpg"
                alt="Scan QR Code to Download Ebook"
                width={550}
                height={680}
                className="w-full rounded-[20px] w-full"
              />
            </ImageReveal>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start text-left mx-auto lg:mx-0">
            <FadeUp delay={0.2}>
              <h2 className="text-[36px] sm:text-[40px] md:text-[50px] lg:text-[54px] font-heading font-bold text-black leading-[42px] md:leading-[60px] lg:leading-[74px] mb-6">
                Download the M&A Guide
              </h2>
            </FadeUp>
            <FadeUp delay={0.4}>
              <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans text-black leading-relaxed mb-8">
                Sell Your Start-Up is a founder-friendly guide designed to make
                the M&A process clearer, less intimidating, and more strategic.
                It is a strong lead magnet for founders who may not be ready to
                engage counsel yet, but need trusted guidance now.
              </p>
            </FadeUp>

            <div className="flex flex-col gap-6 md:gap-8 mb-10">
              {/* Bullet 1 */}
              <FadeUp delay={0.6}>
                <div className="flex items-start gap-4">
                  <div className="w-[16px] h-[16px] md:w-[24px] md:h-[24px] rounded-full bg-[#1C4A87] shrink-0 mt-3"></div>
                  <div>
                    <h3 className="text-[20px] md:text-[22px] lg:text-[30px] font-heading font-bold text-black mb-2">
                      Founder-Friendly M&A Clarity
                    </h3>
                    <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans text-black">
                      Get practical, easy-to-understand guidance that helps
                      founders navigate the M&A process with more confidence,
                      less confusion, and better strategic awareness.
                    </p>
                  </div>
                </div>
              </FadeUp>

              {/* Bullet 2 */}
              <FadeUp delay={0.6}>
                <div className="flex items-start gap-4">
                  <div className="w-[16px] h-[16px] md:w-[24px] md:h-[24px] rounded-full bg-[#1C4A87] shrink-0 mt-3"></div>
                  <div>
                    <h3 className="text-[20px] md:text-[22px] lg:text-[30px] font-heading font-bold text-black mb-2">
                      Early-Stage Strategic Insight
                    </h3>
                    <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans text-black">
                      Access trusted legal and deal insight before hiring
                      counsel, so founders can start preparing smarter, ask
                      better questions, and avoid costly missteps early.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
            <FadeUp delay={1}>
              <Link
                href={
                  "https://www.amazon.in/Sell-Your-Start-Up-Founders-Navigate-ebook/dp/B0D42HRP81"
                }
                className="bg-primary inline-block hover:bg-[#153a6a] text-white py-[17px] px-[40px] md:px-[50px] rounded-[40px] text-[16px] md:text-[20px] font-normal leading-none transition-all shadow-lg cursor-pointer border-none"
              >
                Download the Ebook
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Next Section: Founders */}
      <section className="relative w-full mt-[60px] md:mt-[100px] flex justify-center items-center pb-[60px] md:pb-[100px]">
        <div className="relative z-10 w-full container px-4 sm:px-8 md:px-10 grid grid-cols-1 lg:grid-cols-[585fr_829fr] gap-[20px] items-center">
          {/* Left Column: Image Container */}
          <div
            className="relative
    w-full
    overflow-hidden
    rounded-[24px] md:rounded-[32px]
    before:opacity-70
    before:absolute
    before:inset-0
    before:bg-gradient-to-t
    before:from-[#000000]
    before:via-[#00000066]
    before:to-transparent
    before:z-10 "
          >
            <ImageReveal delay={0.1} direction="left">
              <Image
                src="/founders-img.jpg"
                alt="founders-img"
                width={585}
                height={779}
                className="w-full lg:h-auto object-cover rounded-[24px] md:rounded-[32px]"
              />
            </ImageReveal>
            <p className="absolute z-20 bottom-[24px] md:bottom-[34px] px-[24px] md:px-[30px] text-white text-[18px] sm:text-[20px] md:text-[24px] lg:text-[34px] leading-[1.3] md:leading-[32px] lg:leading-[44px] italic font-heading font-bold">
              “In M&A, the difference isn’t just the deal you make — it’s the
              value you protect.”
            </p>
            <p
              className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-bold z-20 text-white/40 absolute top-[20px] md:top-[37px] right-[10px] md:right-[18px] rotate-180
      [writing-mode:vertical-rl]"
            >
              Merger Lawyer
            </p>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start text-left mx-auto lg:mx-0 w-full">
            <FadeUp delay={0.2}>
              <h2 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-heading font-medium text-black leading-[1.1] lg:leading-[74px] mb-6 md:mb-8">
                Insights for Founders
              </h2>
            </FadeUp>
            <div className="flex flex-col gap-8 md:gap-[40px] w-full">
              <div className="w-full">
                <FadeUp delay={0.2}>
                  <h3 className="text-[20px] md:text-[24px] lg:text-[30px] font-heading font-bold text-black mb-3">
                    Written Insights
                  </h3>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-sans text-black/80 mb-6 leading-relaxed">
                    Practical articles for founders preparing for acquisitions,
                    negotiations, and major transaction decisions.
                  </p>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <Link
                    href={"/blog"}
                    className="bg-primary inline-block hover:bg-[#153a6a] text-white py-[17px] px-[40px] md:px-[50px] rounded-[40px] text-[15px] md:text-[16px] lg:text-[20px] font-normal leading-none transition-all cursor-pointer border-none"
                  >
                    Read More
                  </Link>
                </FadeUp>
              </div>
              <div className="border-t border-black/20 w-full"></div>
              <div className="w-full mt-2">
                <FadeUp delay={0.2}>
                  <h3 className="text-[20px] md:text-[24px] lg:text-[30px] font-heading font-bold text-black mb-3">
                    MLIS / Video Content
                  </h3>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-sans text-black/80 mb-6 leading-relaxed">
                    Conversations and educational sessions exploring M&A topics,
                    deal strategy, and founder-side insight.
                  </p>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <Link
                    href={"/mlis-revision"}
                    className="bg-primary inline-block hover:bg-[#153a6a] text-white py-[17px] px-[40px] md:px-[50px] rounded-[40px] text-[15px] md:text-[16px] lg:text-[20px] font-normal leading-none transition-all cursor-pointer border-none"
                  >
                    Watch Videos
                  </Link>
                </FadeUp>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
