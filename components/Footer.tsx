import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full bg-bg-color pt-16 md:pt-20 pb-6 md:pb-8 overflow-hidden font-sans">
      {/* Background Feathers */}
      <div className="absolute top-[-13px] left-[-99px] opacity-20 rotate-[324deg] z-0 pointer-events-none hidden md:block">
        <Image src="/ELS_logo_icon1.png" alt="Decoration" height={505} width={317}/>
      </div>
      <div className="absolute bottom-[-13px] right-[-99px] opacity-20 rotate-[324deg] z-0 pointer-events-none hidden md:block">
        <Image src="/ELS_logo_icon2.png" alt="Decoration" height={505} width={317}/>
      </div>

      <div className="relative z-10 w-full container">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 pb-12">
          {/* Left: Logo and description */}
          <div className="flex flex-col items-start max-w-lg">
            <Image 
              src="/footer-logo.png" 
              alt="Merger Lawyer Logo" 
              width={200} 
              height={75} 
              className="object-contain mb-6 w-[160px] md:w-[200px]"
            />
            <p className="text-[16px] md:text-[20px] md:leading-[30px] text-black leading-[28px] ">
              Boutique M&A counsel for founders and private companies navigating complex business transactions with clarity, rigor, and strategic alignment.
            </p>
          </div>

          {/* Right: Newsletter */}
          <div className="flex flex-col items-start justify-center mt-4 lg:mt-0">
            <p className="text-[16px] md:text-[20px] md:leading-[30px] text-black leading-[28px] mb-6">
              Join founders and operators receiving practical insights on mergers, acquisitions, and deal strategy — delivered in clear, actionable language.
            </p>
            <div className="w-full flex flex-col items-start gap-6 max-w-[500px]">
              <input 
                type="email" 
                placeholder="Enter Your Email" 
                className="w-full bg-transparent border-b-2 border-black text-black placeholder:text-black py-3 outline-none focus:border-primary transition-colors text-[16px] md:text-[20px] font-normal rounded-none"
              />
              <button className="w-full sm:w-auto bg-primary hover:bg-[#153a6a] text-white py-[16px] px-[40px] md:px-[50px] rounded-[40px] text-[16px] md:text-[18px] font-bold leading-none transition-all cursor-pointer border-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-black mb-12"></div>

        {/* Middle Section: Links & Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:grid-cols-[0.8fr_1fr_1fr_1.6fr] sm:gap-10 lg:gap-8 pb-12">
          
          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-[22px] md:text-[26px] font-heading font-bold leading-[1.3] text-[#111111] mb-5 md:mb-6">Quick Links</h3>
            <div className="flex flex-col gap-2 font-normal text-[#111111]">
              <Link href="/" className="hover:text-primary transition-colors text-[16px] md:text-[20px] leading-[1.9]">Home</Link>
              <Link href="/services" className="hover:text-primary transition-colors text-[16px] md:text-[20px] leading-[1.9]">Services</Link>
              <Link href="/attorney" className="hover:text-primary transition-colors text-[16px] md:text-[20px] leading-[1.9]">Attorney</Link>
              <Link href="/insights" className="hover:text-primary transition-colors text-[16px] md:text-[20px] leading-[1.9]">Insights</Link>
              <Link href="/mlis-revision" className="hover:text-primary transition-colors text-[16px] md:text-[20px] leading-[1.9]">MLIS</Link>
              <Link href="/contact-us" className="hover:text-primary transition-colors text-[16px] md:text-[20px] leading-[1.9]">Contact</Link>
            </div>
          </div>

          {/* Services Links */}
          <div className="flex flex-col">
            <h3 className="text-[22px] md:text-[26px] font-heading font-bold leading-[1.3] text-[#111111] mb-5 md:mb-6">Services Links</h3>
            <div className="flex flex-col gap-2 font-normal text-[#111111]">
              <Link href="/services" className="hover:text-primary transition-colors text-[16px] md:text-[20px] leading-[1.9]">Buy-Side M&A</Link>
              <Link href="/services" className="hover:text-primary transition-colors text-[16px] md:text-[20px] leading-[1.9]">Sell-Side M&A</Link>
              <Link href="/services" className="hover:text-primary transition-colors text-[16px] md:text-[20px] leading-[1.9]">M&A Preparation</Link>
              <Link href="/services" className="hover:text-primary transition-colors text-[16px] md:text-[20px] leading-[1.9]">Complex Transactions</Link>
              <Link href="/services" className="hover:text-primary transition-colors text-[16px] md:text-[20px] leading-[1.9]">General Corporate Counsel</Link>
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col">
            <h3 className="text-[22px] md:text-[26px] font-heading font-bold leading-[1.3] text-[#111111] mb-5 md:mb-6">Contact Us</h3>
            <div className="flex flex-col gap-4 text-[#111111]">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[18px] md:text-[22px] mt-1 shrink-0" />
                <a href="mailto:contact@empowering.legal" className="text-[15px] md:text-[20px] font-normal leading-tight md:leading-[1.9] hover:text-primary transition-colors break-words">
                  contact@empowering.legal
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-[18px] md:text-[20px] mt-1 shrink-0" />
                <a href="tel:+17605177694" className="text-[15px] md:text-[20px] font-normal leading-tight md:leading-[1.9] hover:text-primary transition-colors">
                  +1 (760) 517-7694
                </a>
              </div>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[20px] md:text-[24px] mt-1 shrink-0" />
                <p className="text-[15px] md:text-[20px] font-normal leading-tight md:leading-[1.9]">
                  2010 El Camino Real, Ste 1463, Santa Clara, CA
                </p>
              </div>
            </div>
          </div>

          {/* Client Relations */}
          <div className="flex flex-col">
            <h3 className="text-[22px] md:text-[26px] font-heading font-bold leading-[1.3] text-[#111111] mb-5 md:mb-6">Client Relations</h3>
            
            <div className="flex items-center gap-4 mb-8">
              <Image 
                src="/Nazifa.jpg" 
                alt="Syeda Nazifa Nawroj" 
                width={108} 
                height={131} 
                className="w-[80px] h-[100px] md:w-[108px] md:h-[131px] object-cover rounded-[10px]"
              />
              <div className="flex flex-col text-black text-[15px] md:text-[20px] font-heading font-bold leading-tight md:leading-[1.9]">
                <p>Name: Syeda Nazifa Nawroj</p>
                <p className="break-all md:break-normal "><Link href="mailto:syeda@empowering.legal">Email: syeda@empowering.legal</Link></p>
              </div>
            </div>

            <h3 className="text-[22px] md:text-[26px] font-heading font-bold leading-[1.3] text-[#111111] mb-4">Follow Us On:</h3>
            <div className="flex items-center gap-3">
              <a href="#https://www.facebook.com/EmpoweringLegalSolutions/" className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <FaFacebookF size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="https://www.instagram.com/empowering_legal_solutions/" className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <FaInstagram size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="https://www.youtube.com/@EmpoweringLegalSolutionsPC" className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-full bg-[#FF0000] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <FaYoutube size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="https://www.linkedin.com/company/empowering-legal-solutions/" className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:opacity-80 transition-opacity">       
                 <FaLinkedinIn size={18} className="md:w-5 md:h-5"  />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Divider */}
        <div className="w-full h-px bg-black mb-6"></div>

        {/* Copyright */}
        <div className="text-center w-full">
          <p className="text-[14px] sm:text-[16px] md:text-[20px] font-normal text-center text-[#111111]">
            © 2026 <span className="font-bold">Empowering Legal Solutions</span> PC, d/b/a Merger Lawyer. Designed & Developed by <span className="font-bold">Esclatech</span>.
          </p>
        </div>

      </div>
    </footer>
  );
}
