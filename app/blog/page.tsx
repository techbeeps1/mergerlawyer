"use client"
import Header from "@/components/Header";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import FadeUp from "@/components/gsap/FadeUp";
import AnimatedCard from "@/components/gsap/AnimatedCard";
import ImageReveal from "@/components/gsap/ImageReveal";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { ADMIN_BASE_URL } from "@/config/api";
import { useEffect, useState } from "react";


type MilsCompanions = {
   id: string;
   title: string;
   slug: string;
   short_description: string;
   hero_image: string | null;
};

type Blogs = {
   id: string;
   title: string;
   slug: string;
   short_description: string;
   feature_image: string | null;
 
};


async function getMilsCompanions(): Promise<MilsCompanions[]> {
  const res = await fetch(ADMIN_BASE_URL + "/api/mils-companions", {
    headers: {
      "X-API-KEY": "tbs-6zQ6v8m4J2q9p3X7",
    },
    cache: "no-store",
  });
  if (!res.ok) {
    return [];
  }else {
  return res.json();
  }
}

async function getBlogs(): Promise<Blogs[]> {
  const res = await fetch(ADMIN_BASE_URL + "/api/posts", {
    headers: {
      "X-API-KEY": "tbs-6zQ6v8m4J2q9p3X7",
    },
    cache: "no-store",
  });
  if (!res.ok) {
    return [];
  }else {
  return res.json();
  }
}


export default function BlogPage() {
const [Companion , setCompanion] = useState<MilsCompanions[]>([]);
const [blogs, setBlogs] = useState<Blogs[]>([]);
const [blogs1, setBlogs1] = useState<Blogs[]>([]);
  useEffect(() => { 

getBlogs().then((data) => {

if (data.length <= 3) {
  // Only first slider
  setBlogs(data);
  setBlogs1([]);

} else if (data.length <= 6) {
  // Max 3-3 split
  setBlogs(data.slice(0, 3));
  setBlogs1(data.slice(3));

} else {
  // More than 6 => 50%-50% split
  const mid = Math.floor(data.length / 2);

  setBlogs(data.slice(0, mid));
  setBlogs1(data.slice(mid));
}

}).catch((error) => {
  console.error("Error fetching blogs:", error);  
});
getMilsCompanions().then((data) => {
  setCompanion(data);
}).catch((error) => {
  console.error("Error fetching MILS Companions:", error);  
});


  }, [])


 const slides = [
  {
    id: 1,
    title: "AI SaaS Company Acquisition",
    desc: "Advising a founder through the acquisition of a high-growth AI SaaS company by a strategic buyer. The engagement focused on aligning valuation expectations, structuring key deal terms, and navigating negotiations to protect founder interests while ensuring a smooth path to closing.",
    image: "/case-studies-img-1.jpg",
    link: "/case-studies/ai-saas",
  },
  {
    id: 2,
    title: "Cybersecurity Company – Strategic Exit",
    desc: "Guiding a leading cybersecurity firm through a complex strategic exit, ensuring optimal valuation and seamless transition for stakeholders.",
    image: "/case-studies-img-2.jpg",
    link: "/case-studies/cybersecurity",
  },
  {
    id: 3,
    title: "Fintech, Acquisition by Public Company",
    desc: "Strategic legal counsel for a high-growth fintech startup during its acquisition by a major publicly traded financial institution.",
    image: "/case-studies-img-3.jpg",
    link: "/case-studies/fintech",
  },
  {
    id: 4,
    title: "E-Commerce Platform – Series B",
    desc: "Advising a founder through the acquisition of a high-growth E-Commerce platform by a strategic buyer, structuring key deal terms.",
    image: "/case-studies-img-2.jpg",
    link: "/case-studies/ecommerce",
  },
];


const Card = Companion

  return (
    <main className="relative flex flex-col w-full items-center justify-start bg-white overflow-x-hidden">

      <Header />
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
        <div className="absolute inset-0 bg-black/55 z-[1]"></div>

        {/* Hero Content */}
        <div className="relative z-[2] w-full container flex flex-col items-center text-center pt-[120px] md:pt-[140px]">
          <FadeUp delay={0.2}>
            <h1 className="text-[44px] sm:text-[56px] md:text-[68px] lg:text-[80px] font-heading font-bold text-white mb-6 leading-[1.1] drop-shadow-lg">
              Insights & Articles
            </h1>
          </FadeUp>

          <FadeUp delay={0.4}>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white leading-[1.7] max-w-4xl font-sans mb-12 md:mb-16">
              Practical insights on M&A, corporate strategy, and legal
              decision-making for tech founders and investors.
            </p>
          </FadeUp>
        </div>
      </section>

       <section className="relative w-full mt-[60px] md:mt-[100px]" id="case-studies">
      <div className="container px-4 sm:px-8 md:px-10">
        {/* Header – reuse same styling as original */}
        <div className="mb-12 md:mb-[30px] flex flex-col items-start text-left">
          <FadeUp>
            <h2 className="text-[36px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-heading font-medium text-black leading-[42px] md:leading-[60px] lg:leading-[74px] mb-4">
              Case Studies
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans font-medium text-black max-w-[800px] leading-relaxed">
              A closer look at select transactions, highlighting strategy, structure, and execution across real-world deals.
            </p>
          </FadeUp>
        </div>

        {/* Slider container – horizontal scroll with snap */}
        <div          
          className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[25px]"          
        >
          {slides.map((study, idx) => (
            <AnimatedCard
              delay={idx * 0.1}
              key={study.id}
              className="group relative flex-shrink-0 h-[400px] md:h-[428px] rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col justify-end snap-start"
            >
              {/* Image */}              
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000E6] via-[#00000080] to-transparent z-10 transition-opacity duration-500 opacity-90 group-hover:opacity-100"></div>
              {/* Card content */}
              <div className="relative z-20 w-full p-[24px] md:p-[34px] flex flex-col justify-end h-full mt-auto">
                <Link href={study.link} className="inline-block w-fit">
                  <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-heading font-medium text-white leading-[1.2] mb-3 transition-colors hover:text-gray-200">
                    {study.title}
                  </h3>
                </Link>
                <p className="text-[16px] lg:text-[20px] text-white/90 font-sans leading-relaxed mb-5 md:mb-6 line-clamp-3 md:line-clamp-4 max-w-[95%]">
                  {study.desc}
                </p>
                <Link
                  href={study.link}
                  className="inline-flex items-center gap-2 text-white font-bold text-[16px] md:text-[18px] font-sans group/btn w-fit relative"
                >
                  <span className="pb-[2px]">Read Case Studies</span>
                  <FiArrowRight className="transform group-hover/btn:translate-x-1 transition-transform" />
                  <span className="absolute bottom-0 left-0 w-[calc(100%-24px)] h-[1.5px] bg-white transform origin-left transition-transform duration-300 group-hover/btn:scale-x-100"></span>
                </Link>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
    {/* ── STAFFING MODEL SECTION ── */}
          <section className="relative w-full mt-[60px] md:mt-[100px] py-[60px] md:py-[100px] bg-bg-color overflow-hidden">
            {/* Background Feathers */}
            <div className="absolute top-[-13px] left-[-99px] opacity-20 rotate-[324deg]">
              <Image src="/ELS_logo_icon1.png" alt="Decoration" height={505} width={317} />
            </div>
            <div className="absolute bottom-[-13px] right-[-99px] opacity-20 rotate-[324deg]">
              <Image src="/ELS_logo_icon2.png" alt="Decoration" height={505} width={317} />
            </div>
    
            <div className="relative z-10 container">
              {/* Section Title */}
              <div className="max-w-[710px] mx-auto">
                <FadeUp>
                  <h2 className="text-[32px] sm:text-[40px] text-center md:text-[50px] lg:text-[64px] font-heading font-medium text-black leading-[42px] md:leading-[60px] mb-[20px]">
                  Written Insights
                </h2>
                </FadeUp>          
              <FadeUp delay={0.2}>
                <p className="text-[16px] lg:text-[20px]  text-center 
                 text-black font-sans mb-[40px] font-medium">
                  Plain-English guidance on M&A strategy, legal structuring, and emerging issues shaping modern dealmaking.
                </p>
              </FadeUp>
              </div>
              
            
            <div>
               {/* FIRST ROW */}
        <div className="relative">
          <Swiper
           modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".blog-next-1",
              prevEl: ".blog-prev-1",
            }}
            spaceBetween={24}
            slidesPerView={3}
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
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {blogs.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="bg-white shadow-[2px_3px_6px_0px_#00000040] px-[20px] rounded-[40px] py-[32px] h-full">
                  
                  <ImageReveal delay={0.1} direction="top" className="relative md:h-[286px] h-[220px] rounded-[20px]">
                  { blog?.feature_image && (
                    <Image
                     src={ADMIN_BASE_URL + '/storage/' + blog?.feature_image}
                      alt={blog.title}
                      fill
                      className="object-cover rounded-[20px]"
                    />
                  )}
                  </ImageReveal>

                  <div className="mt-[22px]">
                    <span className="text-black">
                      April 26, 2026 
                    </span>

                    <h3 className="text-[20px] text-black hover:text-primary duration-400 font-semibold leading-[1.3] mt-2 mb-3 line-clamp-2">
                      <Link href={`/blog/${blog.id}`}>
                      {blog.title}
                      </Link>
                    </h3>

                    <p className="text-black text-[18px] leading-[24px] mb-5 line-clamp-2">
                      {blog.short_description}
                    </p>

                    <button className="bg-primary hover:bg-[#153a6a] text-white py-[16px] px-[40px] md:px-[50px] rounded-[40px] text-[16px] md:text-[18px] font-normal leading-none transition-all cursor-pointer border-none">
                      Read More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <button className="blog-prev-1 text-[20px]  cursor-pointer absolute top-1/2 -left-5 z-10 -translate-y-1/2 bg-primary w-11 h-11 rounded-full shadow flex items-center justify-center">
            <IoIosArrowForward className="rotate-180"/>
          </button>

          <button className="blog-next-1 text-[20px] cursor-pointer absolute top-1/2 -right-5 z-10 -translate-y-1/2 bg-primary w-11 h-11 rounded-full shadow flex items-center justify-center">
            <IoIosArrowForward />
          </button>
        </div>

        {/* SECOND ROW */}
       <div className="relative">
          <Swiper
           modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".blog-next-2",
              prevEl: ".blog-prev-2",
            }}
            spaceBetween={24}
            slidesPerView={3}
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
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {blogs1.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="bg-white shadow-[2px_3px_6px_0px_#00000040] px-[20px] rounded-[40px] py-[32px] h-full">
                  
                  <ImageReveal delay={0.1} direction="top" className="relative md:h-[286px] h-[220px] rounded-[20px]">
                  { blog?.feature_image && (
                    <Image
                      src={ADMIN_BASE_URL + '/storage/' + blog?.feature_image}
                      alt={blog.title}
                      fill
                      className="object-cover rounded-[20px]"
                    />
                  )}
                  </ImageReveal>

                  <div className="mt-[22px]">
                    <span className="text-black">
                      April 26, 2026 
                    </span>

                    <h3 className="text-[20px] text-black hover:text-primary  duration-400 font-semibold leading-[1.3] mt-2 mb-3 line-clamp-2">
                      <Link href={`/blog/${blog.id}`}>
                      {blog.title}
                      </Link>
                      
                    </h3>

                    <p className="text-black text-[18px] leading-[24px] mb-5 line-clamp-2">
                      {blog.short_description}
                    </p>

                    <button className="bg-primary hover:bg-[#153a6a] text-white py-[16px] px-[40px] md:px-[50px] rounded-[40px] text-[16px] md:text-[18px] font-normal leading-none transition-all cursor-pointer border-none">
                      Read More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <button className="blog-prev-2 text-[20px]  cursor-pointer absolute top-1/2 -left-5 z-10 -translate-y-1/2 bg-primary w-11 h-11 rounded-full shadow flex items-center justify-center">
            <IoIosArrowForward className="rotate-180"/>
          </button>

          <button className="blog-next-2 text-[20px] cursor-pointer absolute top-1/2 -right-5 z-10 -translate-y-1/2 bg-primary w-11 h-11 rounded-full shadow flex items-center justify-center">
            <IoIosArrowForward />
          </button>
        </div>
            </div>
            </div>
            </section>

<section className="relative w-full my-[60px] md:my-[100px] ">
  <div className="relative z-10 container">

    {/* Section Title */}
    <div className="max-w-[1045px] mx-auto mb-[40px]">
      <FadeUp>
        <h2 className="text-[32px] sm:text-[40px] text-center md:text-[50px] lg:text-[64px] font-heading font-medium text-black leading-[42px] md:leading-[60px] mb-[20px]">
          MLIS Companion
        </h2>
      </FadeUp>

      <FadeUp delay={0.2}>
        <p className="text-[16px] lg:text-[20px] text-center text-black font-sans font-medium">
          Written summaries and key takeaways from the Merger Lawyer Insight Series—making complex discussions accessible and actionable.
        </p>
      </FadeUp>
    </div>

    {/* Slider */}
    <div className="relative">

          <Swiper
            modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".companion-next-1",
                prevEl: ".companion-prev-1",
              }}
              spaceBetween={24}
              slidesPerView={3}
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
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
          }}
          >
        {Card.map((Companion) => (
          <SwiperSlide key={Companion.id} className="pb-4">

            <div className="bg-white shadow-[2px_3px_10px_0px_#00000020] px-[20px] rounded-[32px] pt-[45px] pb-[50px] h-full">

              <div className="mt-[22px] text-center">

                <h3 className="text-[22px] md:text-[26px] lg:text-[34px] text-black font-semibold leading-[1.3] mt-2 mb-3">
                  {Companion.title}
                </h3>

                <p className="text-black text-[16px] md:text-[18px] leading-[1.5] mb-5 line-clamp-3">
                  {Companion.short_description}
                </p>

                <button className="bg-primary mx-auto flex items-center gap-2 hover:bg-[#153a6a] text-white py-[14px] px-[35px] md:px-[45px] rounded-full text-[16px] md:text-[18px] transition-all">

                  Read Summary

                  <FiArrowRight />

                </button>

              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* LEFT ARROW */}
      <button className="companion-prev-1 flex absolute top-1/2 left-[-20px] -translate-y-1/2 z-20 bg-primary text-white w-[48px] h-[48px] rounded-full items-center justify-center shadow-lg cursor-pointer">

        <IoIosArrowForward className="rotate-180 text-[20px]" />

      </button>

      {/* RIGHT ARROW */}
      <button className="companion-next-1 flex absolute top-1/2 right-[-20px] -translate-y-1/2 z-20 bg-primary text-white w-[48px] h-[48px] rounded-full items-center justify-center shadow-lg cursor-pointer">

        <IoIosArrowForward className="text-[20px]" />

      </button>

    </div>

  </div>

</section>

    
    </main>
  );
}