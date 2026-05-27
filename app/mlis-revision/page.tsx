import Header from "@/components/Header";
import FadeUp from "@/components/gsap/FadeUp";
import ImageReveal from "@/components/gsap/ImageReveal";
import { ADMIN_BASE_URL } from "@/config/api";
import Image from "next/image";
import Link from "next/link";
import { CiCalendarDate } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import "swiper/css";
import "swiper/css/navigation";
type UpcomingWebinar = {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  short_description: string;
  speaker_name: string;
  event_date: string;
  event_time: string;
  event_timezone: string;
  featured_image: string;
  button_text?: string;
  button_url?: string;
};

async function getUpcomingWebinars(): Promise<UpcomingWebinar[]> {
  const res = await fetch(ADMIN_BASE_URL + "/api/webinars", {
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

export default async function MlisRevisionPage() {
  const webinars = await getUpcomingWebinars();

  console.log(webinars);

  return (
    <main className="relative flex flex-col w-full items-center justify-start bg-white overflow-x-hidden"> 
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
                MLIS Is Merger Lawyer Insight Series
              </h1>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white leading-[1.7]  font-sans mb-12 md:mb-16">
                Educational video discussions on M&A strategy, deal structuring,
                and legal best practices for tech founders and executives.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>
      {webinars.length > 0 && webinars.map((webinar) => (
        <section
          key={webinar.id}
          className="relative w-full mt-[60px] md:mt-[100px] flex justify-center items-center pb-[60px] md:pb-[100px]"
        >
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
              <ImageReveal
                delay={0.2}
                direction="left"
                className=" rounded-[24px] md:rounded-[32px]"
              >
                <Image
                  src={
                    ADMIN_BASE_URL + "/storage/" + webinar?.featured_image ||
                    "/founder-img.jpg"
                  }
                  alt="founders-img"
                  width={585}
                  height={779}
                  className="w-full rounded-[24px] md:rounded-[32px]"
                />
              </ImageReveal>
              <p
                className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] font-bold z-20 text-white/40 absolute top-[20px] md:top-[37px] right-[10px] md:right-[18px] rotate-180
            [writing-mode:vertical-rl]"
              >
                Merger Lawyer
              </p>
            </div>

            {/* Right Column: Content */}
            <div className="flex flex-col items-start text-left w-full">
              <FadeUp>
                <h2 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-heading font-medium text-black leading-[1.1] lg:leading-[74px] mb-6 md:mb-8">
                  {webinar?.title || "Upcoming Webinar"}
                </h2>
              </FadeUp>
              <div className="flex flex-col gap-8 md:gap-[40px] w-full">
                <div className="w-full">
                  <FadeUp delay={0.4}>
                    <h3 className="text-[20px] md:text-[24px] lg:text-[30px] font-heading font-bold text-black mb-3">
                      {webinar?.subtitle}
                    </h3>
                  </FadeUp>
                  <FadeUp delay={0.6}>
                    <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-sans text-black mb-6 leading-relaxed">
                      {webinar?.short_description}
                    </p>
                  </FadeUp>
                  <ul className="space-y-[22px]">
                    <FadeUp delay={0.8}>
                      <li className=" md:text-[20px] flex items-center gap-[10px]  font-sans text-black leading-[28px] md:leading-[30px]">
                        {" "}
                        <CiCalendarDate className="text-[40px]" />
                        {webinar?.event_date}
                      </li>
                    </FadeUp>
                    <FadeUp delay={0.1}>
                      <li className="md:text-[20px] flex items-center gap-[10px] font-sans text-black leading-[28px] md:leading-[30px]">
                        <IoTimeOutline className="text-[40px]" />
                        {webinar?.event_time} PT
                      </li>
                    </FadeUp>
                    <FadeUp delay={0.12}>
                      <li className="md:text-[20px] flex items-center gap-[10px] font-sans text-black leading-[28px] md:leading-[30px]">
                        <LuUsers className="text-[40px]" />
                        {webinar?.speaker_name}
                      </li>
                    </FadeUp>
                  </ul>
                  <FadeUp delay={0.14}>
                    <Link
                      href={webinar?.button_url || "#"}
                      className="inline-block bg-primary hover:bg-[#153a6a] mt-[30px] text-white py-[17px] px-[40px] md:px-[50px] rounded-[40px] text-[16px] md:text-[20px] font-normal leading-none transition-all cursor-pointer border-none"
                    >
                      {webinar?.button_text || "Register Now"}
                    </Link>
                  </FadeUp>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

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
              <FadeUp>
                <h2 className="text-[36px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-heading font-medium text-black leading-[42px] md:leading-[60px] lg:leading-[74px]">
                  Unlock the Full <br />
                  Session Library
                </h2>
              </FadeUp>
            </div>
            <div className="w-full lg:w-[40%] max-w-[650px] flex flex-col items-start gap-5">
              <FadeUp delay={0.2}>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] font-sans text-black leading-relaxed">
                  Register to unlock our library of past M&A discussions,
                  webinars, and expert insights designed for founders and
                  investors.
                </p>
              </FadeUp>
              <FadeUp delay={0.4}>
                <Link href={"/contact-us"} className="bg-primary inline-block hover:bg-[#153a6a] text-white py-[17px] px-[40px] md:px-[50px] rounded-[40px] text-[16px] md:text-[20px] font-normal leading-none transition-all cursor-pointer border-none mt-2">
                  Register Now
                </Link>
              </FadeUp>
            </div>
          </div>

          {/* image card */}
          <div className="flex md:flex-row flex-col gap-[25px] w-full">
            <div className="blur-sm w-full">
              <ImageReveal delay={0.1} direction="bottom">
                <Image
                  src="/session-1.jpg"
                  alt="session-1-img"
                  width={585}
                  height={779}
                  className="w-full rounded-[20px]"
                />
              </ImageReveal>
            </div>

            <div className="blur-sm w-full">
              <ImageReveal delay={0.2} direction="bottom">
                <Image
                  src="/session-2.jpg"
                  alt="session-2-img"
                  width={585}
                  height={779}
                  className="w-full  rounded-[20px]"
                />
              </ImageReveal>
            </div>
            <div className="blur-sm w-full">
              <ImageReveal delay={0.3} direction="bottom">
                <Image
                  src="/session-3.jpg"
                  alt="session-3-img"
                  width={585}
                  height={779}
                  className="w-full  rounded-[20px]"
                />
              </ImageReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SELECTED TRANSACTIONS SECTION ── */}
      <section className="my-[60px] md:my-[100px]">
        <div className="container text-center">
          {/* Section Title */}
          <FadeUp delay={0.2}>
            <h2 className="text-[32px] sm:text-[40px] text-center md:text-[50px] lg:text-[64px] font-heading font-medium text-black leading-[42px] md:leading-[60px] mb-[23px]">
              Explore Written Insights from MLIS
            </h2>
          </FadeUp>
          <FadeUp delay={0.4}>
            {/* Subtitle */}
            <p
              className="text-[16px] lg:text-[20px]  text-center 
        text-black font-sans mb-[23px] font-medium max-w-[840px] mx-auto"
            >
              Access summaries, key takeaways, and transcripts from MLIS
              episodes—designed to make complex discussions easy to revisit and
              apply.
            </p>
          </FadeUp>
          <FadeUp delay={0.6}>
            <Link href={"/blog"} className="w-full inline-block sm:w-auto bg-primary hover:bg-[#153a6a] text-white py-[17px] px-[40px] md:px-[50px] rounded-[40px] text-[16px] md:text-[20px] font-bold leading-none transition-all cursor-pointer border-none">
              View Insights & Articles
            </Link>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
