import Header from "@/components/Header";
import { FiArrowUpRight } from "react-icons/fi";
import FadeUp from "@/components/gsap/FadeUp";
import AnimatedCard from "@/components/gsap/AnimatedCard";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services - Merger Lawyer",
  description: "Legal Services Built For Founders",
};

export default function ServicesPage() {
  return (
    <main className="relative flex flex-col w-full min-h-screen items-center justify-start bg-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full pb-[150px] lg:pb-[200px] flex flex-col items-center">
        {/* Background Image Wrapper */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 h-[800px]" 
          style={{ backgroundImage: "url('/hero_bg.jpg')" }}
        >
          {/* Dark overlay to make text readable */}
          <div className="absolute inset-0 bg-black/20"></div>
          
        </div>

        <Header />

        {/* Hero Content */}
        <div className="relative z-10 w-full container flex flex-col items-center text-center mt-[150px] md:mt-[220px] lg:mt-[280px]">
          <FadeUp delay={0.2}>
            <h1 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[72px] font-heading font-medium text-white mb-6">
              Legal Services Built For Founders
            </h1>
          </FadeUp>
          <FadeUp delay={0.4}>
            <p className="text-[16px] sm:text-[18px] md:text-[22px] text-white leading-[1.6] max-w-4xl font-sans drop-shadow-md">
              From formation to exit, Merger Lawyer provides strategic legal counsel tailored to the unique needs of tech companies and their founders.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Cards Section (Overlapping Hero) */}
      <section className="relative w-full z-20 -mt-[100px] lg:-mt-[105px] mb-32">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-20 md:gap-x-6 md:gap-y-24 lg:gap-x-8 lg:gap-y-20">
          
          {/* Card 1: M&A */}
          <AnimatedCard delay={0.1} className="lg:col-span-2">
            <Link href={"/services"} className="relative bg-secondary rounded-[20px] py-[60px] px-[24px] flex flex-col items-center text-center shadow-xl h-full group transition-colors hover:bg-primary">
            <h3 className="text-[30px] font-heading font-bold text-[#111111] group-hover:text-white mb-6 leading-[40px]">
              Mergers &<br />Acquisitions (M&A)
            </h3>
            <p className="text-[20px] text-[#111111] group-hover:text-white font-medium leading-[30px] text-center">
              Comprehensive M&A counsel for tech companies—from LOI to closing, covering due diligence, deal structuring, negotiation, and post-closing integration.We deliver end-to-end buy- and sell-side transaction expertise, including strategic structuring, valuation, due diligence, negotiations, and post-closing integration support.
            </p>
            {/* Circular Arrow Button */}
            <Link href={"/services"} className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[64px] h-[64px] rounded-full bg-[#11336C] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shadow-lg">
              <FiArrowUpRight size={28} />
            </Link>
            </Link>
          </AnimatedCard>

          {/* Card 2: Fundraising */}
          <AnimatedCard delay={0.2} className="lg:col-span-2">
            <Link href={"/services"} className="relative bg-secondary rounded-[20px] py-[60px] px-[24px] flex flex-col items-center text-center shadow-xl h-full group transition-colors hover:bg-primary">
            <h3 className="text-[30px] font-heading font-bold text-[#111111] group-hover:text-white mb-6 leading-[40px]">
              Fundraising
            </h3>
            <p className="text-[20px] text-[#111111] group-hover:text-white font-medium leading-[30px] text-center">
              Expert guidance through seed, Series A, and growth-stage fundraising, including term sheet negotiation, investor relations, and cap table management. SAFE, convertible note, and equity round structuring, Term sheet review and negotiation, Investment documentation preparation, Investor rights and governance alignment, Cap table management and modeling
            </p>
            {/* Circular Arrow Button */}
            <Link href={"/services"} className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[64px] h-[64px] rounded-full bg-[#11336C] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shadow-lg">
              <FiArrowUpRight size={28} />
            </Link>
            </Link>
          </AnimatedCard>

          {/* Card 3: Complex Transactions */}
          <AnimatedCard delay={0.3} className="lg:col-span-2">
           <Link href={"/services"} className="relative bg-secondary rounded-[20px] py-[60px] px-[24px] flex flex-col items-center text-center shadow-xl h-full group cursor-pointer transition-colors hover:bg-primary">
            <h3 className="text-[30px] font-heading font-bold text-[#111111] group-hover:text-white mb-6 leading-[40px]">
              Complex Transactions
            </h3>
            <p className="text-[20px] text-[#111111] group-hover:text-white font-medium leading-[30px] text-center">
              Strategic counsel for joint ventures, asset purchases, licensing agreements, and other sophisticated commercial transactions. Joint venture formation and governance, Strategic partnership agreements, Asset and stock purchase transactions, Complex licensing and IP transactions, Cross-border transaction support
            </p>
            {/* Circular Arrow Button */}
            <Link href={"/services"} className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[64px] h-[64px] rounded-full bg-[#11336C] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shadow-lg">
              <FiArrowUpRight size={28} />
            </Link>
            </Link>
          </AnimatedCard>

          {/* Card 4: Intellectual Property */}
          <AnimatedCard delay={0.4} className="lg:col-span-2">
            <Link href={"/services"} className="relative bg-secondary rounded-[20px] py-[60px] px-[24px] flex flex-col items-center text-center shadow-xl h-full group cursor-pointer transition-colors hover:bg-primary">
            <h3 className="text-[30px] font-heading font-bold text-[#111111] group-hover:text-white mb-6 leading-[40px]">
              Intellectual Property
            </h3>
            <p className="text-[20px] text-[#111111] group-hover:text-white font-medium leading-[30px] text-center">
              Protect your innovations with comprehensive IP strategy, including patent, trademark, copyright, and trade secret protection.IP portfolio development and strategy, Patent and trademark prosecution, Licensing and technology transfer agreements, IP due diligence for M&A transactions, Trade secret protection programs
            </p>
            {/* Circular Arrow Button */}
             <Link href={"/services"} className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[64px] h-[64px] rounded-full bg-[#11336C] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shadow-lg">
              <FiArrowUpRight size={28} />
            </Link>
            </Link>
          </AnimatedCard>

          {/* Card 5: Privacy (AI & Data) */}
          <AnimatedCard delay={0.5} className="lg:col-span-2">
            <Link href={"/services"} className="relative bg-secondary rounded-[20px] py-[60px] px-[24px] flex flex-col items-center text-center shadow-xl h-full group cursor-pointer transition-colors hover:bg-primary">
            <h3 className="text-[30px] font-heading font-bold text-[#111111] group-hover:text-white mb-6 leading-[40px]">
              Privacy (AI & Data)
            </h3>
            <p className="text-[20px] text-[#111111] group-hover:text-white font-medium leading-[30px] text-center">
              Navigate complex privacy regulations including GDPR, CCPA, and emerging AI governance frameworks to protect your business and customers. Privacy policy development and compliance, GDPR and CCPA compliance programs, AI governance and ethical AI frameworks, Data breach response and remediation, Vendor and third-party data agreements
            </p>
            {/* Circular Arrow Button */}
            <Link href={"/services"} className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[64px] h-[64px] rounded-full bg-[#11336C] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shadow-lg">
              <FiArrowUpRight size={28} />
            </Link>
            </Link>
          </AnimatedCard>

          {/* Card 6: General Counsel Services */}
          <AnimatedCard delay={0.6} className="lg:col-span-2">
            <Link href={"/services"} className="relative bg-secondary rounded-[20px] py-[60px] px-[24px] flex flex-col items-center text-center shadow-xl h-full group cursor-pointer transition-colors hover:bg-primary">
            <h3 className="text-[30px] font-heading font-bold text-[#111111] group-hover:text-white mb-6 leading-[40px]">
              General Counsel<br />Services
            </h3>
            <p className="text-[20px] text-[#111111] group-hover:text-white font-medium leading-[30px] text-center">
              Ongoing strategic legal partnership for founders and executives—your trusted advisor for day-to-day legal needs and long-term planning. Fractional general counsel services, Contract review and negotiation, Employment and compensation matters, Corporate governance and compliance, Risk assessment and mitigation strategy
            </p>
            {/* Circular Arrow Button */}
            <Link href={"/services"} className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[64px] h-[64px] rounded-full bg-[#11336C] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shadow-lg">
              <FiArrowUpRight size={28} />
            </Link>
            </Link>
          </AnimatedCard>

          {/* Card 7: Business Formation (Centered on desktop) */}
          <AnimatedCard delay={0.7} className="lg:col-start-2 lg:col-span-2">
            <Link href={"/services"} className="relative bg-secondary rounded-[20px] py-[60px] px-[24px] flex flex-col items-center text-center shadow-xl h-full group cursor-pointer transition-colors hover:bg-primary">
            <h3 className="text-[30px] font-heading font-bold text-[#111111] group-hover:text-white mb-6 leading-[40px]">
              Business Formation
            </h3>
            <p className="text-[20px] text-[#111111] group-hover:text-white font-medium leading-[30px] text-center">
              Launch your venture on solid legal footing with expert entity formation, founder agreements, and early-stage corporate structure. Entity selection and formation (C-Corp, LLC, etc.), Founder and equity agreements, Initial governance and corporate structure, Stock option plan design and implementation, Early-stage compliance setup
            </p>
            {/* Circular Arrow Button */}
            <Link href={"/services"} className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[64px] h-[64px] rounded-full bg-[#11336C] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shadow-lg">
              <FiArrowUpRight size={28} />
            </Link>
            </Link>
          </AnimatedCard>

          {/* Card 8: Non-Profit (Centered on desktop) */}
          <AnimatedCard delay={0.8} className="lg:col-span-2">
            <Link href={"/services"} className="relative bg-secondary rounded-[20px] py-[60px] px-[24px] flex flex-col items-center text-center shadow-xl h-full group cursor-pointer transition-colors hover:bg-primary">
            <h3 className="text-[30px] font-heading font-bold text-[#111111] group-hover:text-white mb-6 leading-[40px]">
              Non-Profit
            </h3>
            <p className="text-[20px] text-[#111111] group-hover:text-white font-medium leading-[30px] text-center">
              Specialized counsel for non-profit organizations, including formation, tax-exempt status, governance, and compliance.501(c)(3) formation and tax-exemption applications Non-profit governance and board structure, Grant agreements and donor relations, Compliance and annual reporting, Charitable solicitation registration
            </p>
            {/* Circular Arrow Button */}
            <Link href={"/services"} className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[64px] h-[64px] rounded-full bg-[#11336C] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shadow-lg">
              <FiArrowUpRight size={28} />
            </Link>
            </Link>
          </AnimatedCard>

        </div>
      </section>

    </main>
  );
}
