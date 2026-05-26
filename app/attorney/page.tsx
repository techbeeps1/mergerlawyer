import Header from "@/components/Header";
import Image from "next/image";
import FadeUp from "@/components/gsap/FadeUp";
import AnimatedCard from "@/components/gsap/AnimatedCard";
import ImageReveal from "@/components/gsap/ImageReveal";
import { Metadata } from "next";
import Link from "next/link";
import { ADMIN_BASE_URL } from "@/config/api";

export const metadata: Metadata = {
  title: "Attorney - Merger Lawyer",
  description: "Meet Syeda Nazifa Nawroj, Founder of Empowering Legal Solutions PC",
};
type Transaction = {
  id: number;
  title: string;
  slug: string;
  category: string;
  amount: string;
  transaction_type: string;
  short_description: string;
  button_text: string;
  button_url: string;
  featured_image: string;
};

async function getTransactions(): Promise<Transaction[]> {
  const res = await fetch(
    ADMIN_BASE_URL + '/api/transactions', 
    { headers: {
        'Content-Type': 'application/json',
        'X-API-KEY':  'tbs-6zQ6v8m4J2q9p3X7',
      },
      cache: 'no-store',
    }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch transactions');
  }
  return res.json();
}



export default async function AttorneyPage() {
    const transactions = await getTransactions();

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
          className="object-cover object-center z-0 w-full"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 z-[1]"></div>

        {/* Hero Content */}
        <div className="relative z-[2] w-full container flex flex-col items-center text-center pt-[120px] md:pt-[140px]">
          {/* Main Heading */}
          <FadeUp delay={0.2}>
            <h1 className="text-[44px] sm:text-[56px] md:text-[68px] lg:text-[80px] font-heading font-bold text-white mb-6 leading-[1.1] drop-shadow-lg">
              Meet Syeda Nazifa Nawroj
            </h1>
          </FadeUp>

          {/* Subtitle */}
          <FadeUp delay={0.4}>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white leading-[1.7] max-w-4xl font-sans mb-12 md:mb-16">
              Founder of Empowering Legal Solutions PC, a Silicon Valley-based boutique law firm
              specializing in M&A and corporate transactions for tech companies.
            </p>
          </FadeUp>

          {/* Stats Row */}
          <div className="flex flex-row items-center justify-center gap-[50px]">
            {/* Stat 1 */}
            <FadeUp delay={0.2}>
            <div className="flex flex-col items-center">
              <span className="text-[24px] md:text-[28px] lg:text-[32px] leading-[24px] font-bold font-heading text-white mb-1">
                35+ M&A
              </span>
              <span className="font-heading font-bold text-white text-[16px] lg:text-[18px] leading-[20px] lg:leading-[24px] mt-1 lg:mt-2">
                Transactions advised
              </span>
            </div>
            </FadeUp>

            {/* Vertical Divider */}
            <div className="h-16 w-px bg-white/50 shrink-0"></div>

            {/* Stat 2 */}
            <FadeUp delay={0.4}>
            <div className="flex flex-col items-center">
              <span className="text-[24px] md:text-[28px] lg:text-[32px] leading-[24px] font-bold font-heading text-white mb-1">
                $3B Nearly
              </span>
              <span className="font-heading font-bold text-white text-[16px] lg:text-[18px] leading-[20px] lg:leading-[24px]  mt-1 lg:mt-2">
                Total deal value experience
              </span>       
            </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── BIO SECTION ── */}
      <section className="w-full mt-[100px]">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-center">          

          {/* left: Bio Text */}
          <div className="flex flex-col items-start text-left lg:order-1 order-2">
            <FadeUp>
              <h2 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-heading font-medium text-black leading-[42px] md:leading-[60px] lg:leading-[74px] mb-[30px]">
                M&A Expertise
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-[16px] lg:text-[20px] text-black lg:leading-[32px] leading-[26px] mb-4 font-sans font-medium">
                Syeda Nazifa Nawroj is a corporate attorney specializing in mergers and acquisitions, advising private companies and founders through complex transactions across their lifecycle. She has contributed to 35+ M&A transactions totaling nearly $3 billion in deal value, bringing the level of sophistication typically associated with large law firms, combined with a founder-focused boutique approach. Her practice supports technology companies from formation and fundraising through strategic growth and exit, ensuring each transaction is handled with both legal precision and practical business judgment.
              </p>
            </FadeUp>
          </div>
          {/* right: Photo */}
          <div className="lg:order-2 order-1">
            <div className="relative">
              <ImageReveal delay={0.2} direction="left">
                <Image
                  src="/expertise-right-img.jpg"
                  alt="Attorney working on deal documents"
                  width={707}
                  height={126}
                  className="w-full h-auto object-cover rounded-[40px]"
                />
              </ImageReveal>
            </div>
          </div>
        </div>
      </section>
      {/* ── LAW FOUNDATION SECTION ── */}
      <section className="w-full mt-[30px]">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-center"> 
          {/* left: Photo */}
          <div >
            <div className="relative">
              <ImageReveal delay={0.2} direction="right">
                <Image
                  src="/foundation-img.jpg"
                  alt="foundation img"
                  width={707}
                  height={126}
                  className="w-full h-auto object-cover rounded-[40px]"
                />
              </ImageReveal>
            </div>
          </div>
          {/* right: Bio Text */}
          <div className="flex flex-col items-start justify-center text-left">
            <FadeUp delay={0.2}>
            <h2 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-heading font-medium text-black leading-[42px] md:leading-[60px] lg:leading-[74px] mb-[30px]">
              Big Law Foundation
            </h2>
            </FadeUp>
            <FadeUp delay={0.4}>
            <p className="text-[16px] lg:text-[20px] text-black lg:leading-[32px] leading-[26px] mb-4 font-sans font-medium">
              Prior to founding Empowering Legal Solutions PC, Syeda trained at two of the world’s leading corporate law firms—DLA Piper LLP (US) and Fenwick & West LLP. 
              At these firms, she developed deep expertise in high-value transactions, working on complex corporate matters and billion-dollar deals, which now form the foundation of her advisory approach at Merger Lawyer.
            </p>
            </FadeUp>
          </div>        
        </div>
      </section>

      {/* ── AWARDS & RECOGNITION SECTION ── */}
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
          <FadeUp delay={0.2}>
          <h2 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-heading font-medium text-black leading-[42px] md:leading-[60px] mb-[20px]">
            Awards & Recognition
          </h2>
          </FadeUp>
          {/* Subtitle */}
          <FadeUp delay={0.4}>
          <p className="text-[16px] lg:text-[20px] text-black font-sans mb-[40px]">
            A record of academic excellence, professional recognition, and thought leadership.
          </p>
          </FadeUp>
          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[25px] items-stretch">

            {/* Left — Academic Card (tall) */}
            <FadeUp delay={0.2}>
            <div className="bg-white flex flex-col justify-center h-full border-2 border-[#1C4A87] shadow-[2px_6px_24px_0px_#00000040] rounded-[24px] md:rounded-[32px] lg:rounded-[40px] p-[24px] md:p-[32px] lg:pt-[40px] lg:pr-[66px] lg:pb-[48px] lg:pl-[24px]">
              <h3 className="text-[24px] md:text-[28px] lg:text-[34px] font-heading font-medium text-black mb-4 md:mb-5">
                Academic
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Full Scholarship (including room & board), Mount Holyoke College",
                  "177th Commencement Baccalaureate Speaker, Mount Holyoke College",
                  "Award for Service — Revived historic all-women's debate team",
                  "Anna C. Edwards Debate Award — Intercollegiate distinction",
                  "J. Creighton International Internship Award",
                  "Executive Editor, NYU Law Review (2 years)",
                  "NYU Women's Bar Association Fellowship",
                  "Minority Corporate Counsel Association (MCCA) Scholarship",
                  "Latham & Watkins (BARBRI) Law Preview Scholarship",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[16px] md:text-[18px] lg:text-[20px] font-sans font-medium text-black leading-relaxed lg:leading-[36px]">
                    <span className="mt-[6px] lg:mt-[10px] w-[6px] h-[6px] lg:w-[7px] lg:h-[7px] rounded-full bg-black shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            </FadeUp>

            {/* Right — Two Stacked Cards */}

            <div className="flex flex-col gap-[25px] h-full">
             <FadeUp delay={0.4} className="h-full">
              {/* Professional Card */}
              <div className="bg-white flex flex-col justify-center h-full border-2 border-[#1C4A87] shadow-[2px_6px_24px_0px_#00000040] rounded-[24px] md:rounded-[32px] lg:rounded-[40px] p-[24px] md:p-[32px] lg:pt-[40px] lg:pr-[66px] lg:pb-[48px] lg:pl-[24px]">
                <h3 className="text-[24px] md:text-[28px] lg:text-[34px] font-heading font-medium text-black mb-4 md:mb-5">
                  Professional
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                     <>
    2025 U.S.–Bangladesh Chamber of Commerce & Industry Women's Entrepreneur Award
    <br />
    (5th Entrepreneur Awards Program)
  </>,
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[16px] md:text-[18px] lg:text-[20px] font-sans font-medium text-black leading-relaxed lg:leading-[36px]">
                      <span className="mt-[6px] lg:mt-[10px] w-[6px] h-[6px] lg:w-[7px] lg:h-[7px] rounded-full bg-black shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
             </FadeUp>
              <FadeUp delay={0.6} className="h-full">
              {/* Publication & Thought Leadership Card */}
              <div className="bg-white flex flex-col justify-center h-full border-2 border-[#1C4A87] shadow-[2px_6px_24px_0px_#00000040] rounded-[24px] md:rounded-[32px] lg:rounded-[40px] p-[24px] md:p-[32px] lg:pt-[40px] lg:pr-[66px] lg:pb-[48px] lg:pl-[24px]">
                <h3 className="text-[24px] md:text-[28px] lg:text-[34px] font-heading font-medium text-black mb-4 md:mb-5">
                  Publication &amp; Thought Leadership
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    "Author, Sell Your Start-Up: A Founder's Guide to Navigate and Win at M&A (2024)",
                    "Founder & Host, Merger Lawyer Insight Series (MLIS)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[16px] md:text-[18px] lg:text-[20px] font-sans font-medium text-black leading-relaxed lg:leading-[36px]">
                      <span className="mt-[6px] lg:mt-[10px] w-[6px] h-[6px] lg:w-[7px] lg:h-[7px] rounded-full bg-black shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── RECENT TRANSACTIONS SECTION ── */}
      <section className="w-full mt-[100px]">
        <div className="container flex flex-col items-center">
          {/* Section Title */}
          <FadeUp delay={0.2}>
          <h2 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-heading font-medium text-black leading-[1.2] text-center mb-4">
            Recent Transactions at Merger Lawyer
          </h2>
          </FadeUp>
          {/* Subtitle */}
          <FadeUp delay={0.4}>
          <p className="text-[16px] lg:text-[20px] font-medium text-black font-sans text-center mb-[40px]">
            Transactions led by Syeda through her boutique practice.
          </p>
          </FadeUp>
          {/* Grid */}
        
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] md:gap-[25px] w-full">
            {transactions.map((tx, idx) => (
              <AnimatedCard delay={idx * 0.1} key={idx} className="bg-secondary rounded-[24px] md:rounded-[32px] lg:rounded-[40px] p-[24px] md:p-[30px] lg:p-[36px] flex flex-col items-start h-full">
                {/* Tag */}
                <div className="bg-primary text-white text-[14px] lg:text-[18px] font-medium font-sans px-[12px] lg:px-[14px] py-[6px] lg:py-[8px] leading-snug lg:leading-[20px] text-center rounded-full mb-[20px] lg:mb-[30px]">
                  {tx.category}
                </div>
                
                {/* Title & Amount */}
                <div className="flex flex-row justify-between items-center w-full mb-[16px] lg:mb-[20px]">
                  <h3 className="font-heading font-bold text-[24px] md:text-[28px] lg:text-[34px] text-black leading-tight lg:leading-[46px]">
                    {tx.title}
                  </h3>
                  {tx.amount &&
                  <span className="font-heading font-bold text-[24px] md:text-[28px] lg:text-[34px] text-black leading-tight lg:leading-[46px]">
                     {'$'}{tx.amount}
                  </span>
                }
                </div>
                
                {/* Subtitle */}
                <p className="font-sans font-medium text-[18px] lg:text-[24px] text-[#172C5B] leading-snug lg:leading-[30px] mb-[16px] lg:mb-[20px]">
                  {tx.transaction_type}
                </p>
                
                {/* Description */}
                <p className="font-sans font-medium text-[16px] lg:text-[20px] text-black leading-normal lg:leading-[30px] mb-[20px] lg:mb-[24px]">
                  {tx.short_description}
                </p>
                
                {/* Button */}
                {tx.button_text && (
                  <div className="mt-auto">
                    <Link  href={tx.button_url} className="w-full sm:w-auto bg-primary hover:bg-[#153a6a] text-white py-[17px] px-[40px] md:px-[50px] rounded-[40px] text-[16px] md:text-[20px] font-bold leading-none transition-all cursor-pointer border-none">
                      {tx.button_text}
                    </Link>
                  </div>
                )}
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROFESSIONAL EXPERIENCE SECTION ── */}
      <section className="relative w-full py-[60px] md:py-[100px] mt-[100px] bg-bg-color overflow-hidden">
        {/* Background Feathers */}
        <div className="absolute top-[-13px] left-[-99px] opacity-20 rotate-[324deg] pointer-events-none">
          <Image src="/ELS_logo_icon1.png" alt="Decoration" height={505} width={317} />
        </div>
        <div className="absolute bottom-[-13px] right-[-99px] opacity-20 rotate-[324deg] pointer-events-none">
          <Image src="/ELS_logo_icon2.png" alt="Decoration" height={505} width={317} />
        </div>

        <div className="relative z-10 container flex flex-col items-center">
          {/* Section Title */}
          <FadeUp delay={0.2}>
          <h2 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-heading font-medium text-black leading-[1.2] text-center mb-[40px] md:mb-[60px]">
            Professional Experience
          </h2>
          </FadeUp>
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[25px] w-full">
            {[
              {
                logo: "/DLA_Piper_Logo.svg 1.png",
                title: "Corporate Law Training &\nTransactional Foundation",
                desc: "Syeda began her corporate law career at DLA Piper, a global legal powerhouse, where she built a strong foundation in corporate transactions, deal structuring, and legal strategy. Working within a large-scale international practice, she developed the rigor and precision required to support complex business deals."
              },
              {
                logo: "/Fenwick-Logo 1.png",
                title: "Technology M&A & Founder\nRepresentation",
                desc: "At Fenwick, a premier technology law firm, Syeda focused on representing founders and emerging growth companies in strategic mergers and acquisitions. During a period of strong private company M&A activity, she gained deep experience in deal execution, negotiation strategy, and founder-side advocacy."
              },
              {
                logo: "/ELS-card-logo.png",
                title: "Founder-Led Boutique\nPractice",
                desc: "Syeda is the founder and principal attorney of Empowering Legal Solutions PC, a Silicon Valley-based boutique firm advising founders, investors, and private companies from formation through exit. She has successfully contributed to 35+ M&A transactions totaling nearly $3 billion in deal value."
              }
            ].map((exp, idx) => (
              <AnimatedCard delay={idx * 0.1} key={idx} className="bg-white rounded-[40px] py-[45px] px-[20px] flex flex-col items-center text-center shadow-[2px_3px_14px_0px_#00000040] h-full z-10 relative">
                {/* Logo Image */}
                <div className="h-[90px] flex items-center justify-center mb-[20px]">
                  <Image 
                    src={exp.logo} 
                    alt={exp.title.replace("\n", " ")} 
                    width={210} 
                    height={118} 
                    className="object-contain max-h-full"
                  />
                </div>
                
                {/* Card Title */}
                <h3 className="font-heading font-bold text-[24px] text-black leading-[34px] mb-[16px] whitespace-pre-line">
                  {exp.title}
                </h3>
                
                {/* Description */}
                <p className="font-sans font-medium text-[16px] lg:text-[20px] text-black text-center lg:leading-[30px] leading-[26px]">
                  {exp.desc}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPEAKING & MEDIA APPEARANCES SECTION ── */}
      <section className="w-full mt-[60px] md:mt-[100px]">
        <div className="container flex flex-col items-center">
          {/* Section Title */}
          <FadeUp delay={0.2}>
          <h2 className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[64px] font-heading font-medium text-black leading-[1.2] text-center mb-[16px]">
            Speaking &amp; Media Appearances
          </h2>
          </FadeUp>
          {/* Subtitle */}
          <FadeUp delay={0.4}>
          <p className="text-[16px] lg:text-[20px] font-sans font-medium text-black text-center mb-[40px] max-w-[800px]">
            Syeda shares insights on M&A, AI, and founder strategy through professional discussions and industry platforms.
          </p>
          </FadeUp>
          {/* Grid */}
       
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[30px] w-full mb-[30px]">
            {[
              {
                tag: "Podcast",
                title: "M&A Strategy for\nTech Founders",
                image: "/media-img-1.jpg"
              },
              {
                tag: "LinkedIn",
                title: "Deal Structure Best\nPractices",
                image: "/media-img-2.jpg"
              },
              {
                tag: "LinkedIn",
                title: "Navigating AI in\nM&A Transactions",
                image: "/media-img-3.jpg"
              }
            ].map((media, idx) => (
              <AnimatedCard delay={idx * 0.1} key={idx} className={`bg-secondary rounded-[20px] overflow-hidden flex flex-col h-full ${idx === 2 ? 'border-[2px] border-[#58A9D3]' : ''}`}>
                {/* Thumbnail */}
                <div className="relative h-[220px] md:h-[260px] lg:h-[300px] w-full bg-white rounded-t-[20px]">

                  <Image 
                    src={media.image} 
                    alt={media.title.replace("\n", " ")} 
                    fill
                    className="object-cover rounded-t-[20px]"
                  />
                  {/* Tag Pill */}
                  <div className="absolute top-[13px] right-[16px] md:right-[22px] w-[87px] h-[25px] bg-secondary text-black font-sans font-medium text-[12px] leading-[20px] text-center flex items-center justify-center rounded-[40px] z-10">
                    {media.tag}
                  </div>
                </div>
                
                {/* Content */}
                <div className="px-[20px] py-[25px] md:py-[35px] flex flex-col flex-grow justify-between rounded-b-[20px]">

                  <h3 className="font-heading font-bold text-[24px] md:text-[28px] lg:text-[34px] text-black leading-snug lg:leading-[46px] mb-[20px] whitespace-pre-line">
                    {media.title}
                  </h3>
                  
                  <button className="w-full sm:w-auto bg-primary hover:bg-[#153a6a] text-white py-[17px] px-[40px] md:px-[50px] rounded-[40px] text-[16px] md:text-[20px] font-bold leading-none transition-all cursor-pointer border-none self-start">
                    Watch Now
                  </button>
                </div>
              </AnimatedCard>
            ))}
          </div>
          
          {/* Bottom CTA Text */}
          <FadeUp delay={0.2}>
          <p className="text-[16px] lg:text-[20px] font-sans font-medium text-black text-center mb-[25px] max-w-[700px]">
            Invite Syeda to speak on M&A strategy, AI transactions, and founder-focused deal execution.
          </p>
          </FadeUp>
          {/* Bottom CTA Button */}
          <FadeUp delay={0.4}>
          <button className="w-full sm:w-auto bg-primary hover:bg-[#153a6a] text-white py-[17px] px-[40px] md:px-[50px] rounded-[40px] text-[16px] md:text-[20px] font-bold leading-none transition-all cursor-pointer border-none">
            Book a Speaking Engagement
          </button>
          </FadeUp>
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

        <div className="relative z-10 max-w-[1000px] mx-auto px-[20px]">
          {/* Section Title */}
          <FadeUp delay={0.2}>
          <h2 className="text-[32px] sm:text-[40px] text-center md:text-[50px] lg:text-[64px] font-heading font-medium text-black leading-[42px] md:leading-[60px] mb-[20px]">
            Bespoke Staffing Model
          </h2> 
          </FadeUp>
          <FadeUp delay={0.4}>
          <p className="text-[16px] lg:text-[20px]  text-center 
           text-black font-sans mb-[40px] font-medium">
            Merger Lawyer operates with a flexible, specialist-driven model. For complex matters requiring additional expertise, Syeda builds custom teams from a network of senior attorneys with backgrounds at top firms.
          </p> 
          </FadeUp>  
          {/* Left — Academic Card (tall) */}
          <FadeUp delay={0.6}>
            <div className="bg-secondary/30 h-full border-2 border-[#0E326B] shadow-[2px_6px_24px_0px_#00000040] rounded-[24px] md:rounded-[32px] lg:rounded-[40px] p-[24px] md:p-[32px] lg:pt-[50px] lg:pr-[66px] lg:pb-[50px] lg:pl-[24px]">
              <h3 className="text-[24px] md:text-[28px] lg:text-[34px] text-center font-heading font-bold text-black mb-4 md:mb-5">
                Why This Model Works
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Senior-level expertise on every matter—no junior associates learning on your time",
                  "Custom-built teams matched to your specific transaction needs",
                  "Big Law quality without Big Law overhead and inefficiency",
                  "Transparent, founder-friendly pricing aligned with your budget",
                  "Direct partner access throughout every engagement",                  
                ].map((item, i) => (
                  <li key={i} className="flex items-center justify-center gap-3 text-[16px] md:text-[18px] lg:text-[20px] font-sans font-medium text-black leading-relaxed lg:leading-[36px]">
                    <span className=" w-[6px] h-[6px] lg:w-[7px] lg:h-[7px] rounded-full bg-black shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>           
          </FadeUp>
        </div>
      </section>
      {/* ── SELECTED TRANSACTIONS SECTION ── */}
      <section className="my-[60px] md:my-[100px]">
        <div className="max-w-[840px] mx-auto px-[20px] text-center">
        {/* Section Title */}
        <FadeUp delay={0.2}>
        <h2 className="text-[32px] sm:text-[40px] text-center md:text-[50px] lg:text-[64px] font-heading font-medium text-black leading-[42px] md:leading-[60px] mb-[23px]">
          Selected Transactions
        </h2>
        </FadeUp>
        <FadeUp delay={0.4}>
        {/* Subtitle */}
        <p className="text-[16px] lg:text-[20px]  text-center 
        text-black font-sans mb-[23px] font-medium">
          Advised on 35+ M&A transactions totaling nearly $3 billion in deal value prior to founding Merger Lawyer.
        </p>
        </FadeUp>
        <FadeUp delay={0.6}>
        <button className="w-full sm:w-auto bg-primary hover:bg-[#153a6a] text-white py-[17px] px-[40px] md:px-[50px] rounded-[40px] text-[16px] md:text-[20px] font-bold leading-none transition-all cursor-pointer border-none">
          View Representative Transactions
        </button>
        </FadeUp>
        </div>
      </section>

    </main>
  );
}
