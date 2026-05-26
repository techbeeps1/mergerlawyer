"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="py-6 container flex items-center justify-between text-white relative z-50">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/ELS_Logo.png" 
            alt="Merger Lawyer Logo" 
            width={160} 
            height={60}            
            priority
          />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 font-normal leading-none tracking-normal">
          <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link href="/services" className="hover:text-gray-300 transition-colors">Services</Link>
          <Link href="/attorney" className="hover:text-gray-300 transition-colors">Attorney</Link>
          <Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
          <Link href="/mlis-revision" className="hover:text-gray-300 transition-colors">MLIS</Link>
          <Link href="/contact-us" className="hover:text-gray-300 transition-colors">Contact</Link>
        </nav>

        {/* Right side: Socials & Button (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-3">
            <Link href="https://www.facebook.com/EmpoweringLegalSolutions/" className="w-[38px] h-[38px] rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <FaFacebookF size={15} />
            </Link>
            <Link href="https://www.youtube.com/@EmpoweringLegalSolutionsPC" className="w-[38px] h-[38px] rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <FaYoutube size={15} />
            </Link>
            <Link href="https://www.linkedin.com/company/empowering-legal-solutions/" className="w-[38px] h-[38px] rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <FaLinkedinIn size={15} />
            </Link>
            <Link href="https://www.instagram.com/empowering_legal_solutions/" className="w-[38px] h-[38px] rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <FaInstagram size={15} />
            </Link>
          </div>
          <Link href="/contact-us" className=" block bg-primary hover:bg-white hover:text-primary text-white pt-[16px] pr-[49px] pb-[16px] pl-[49px] rounded-[40px] text-[18px] font-normal leading-none transition-all border border-transparent shadow-lg cursor-pointer">
            Book a Call
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open mobile menu"
        >
          <FaBars size={28} />
        </button>
      </div>

      {/* Mobile Slide-Over Menu (Tailwind UI Style) */}
      
      {/* Backdrop */}
      <div 
        className={`lg:hidden fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Side Panel */}
      <div 
        className={`lg:hidden fixed inset-y-0 right-0 z-[70] w-[80%] max-w-sm bg-[#0a0a0a] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <Image 
            src="/ELS_Logo.png" 
            alt="Merger Lawyer Logo" 
            width={120} 
            height={45} 
            className="object-contain w-[120px] h-auto"
            priority
          />
          <button 
            className="text-white p-2 hover:text-gray-300 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <FaTimes size={28} />
          </button>
        </div>

        <div className="flex flex-col px-8 pb-8 space-y-6 overflow-y-auto h-full">
          {/* Links */}
          <nav className="flex flex-col gap-6 font-normal text-lg mt-6">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-gray-300 transition-colors text-white">Home</Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-gray-300 transition-colors text-white">Services</Link>
            <Link href="/attorney" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-gray-300 transition-colors text-white">Attorney</Link>
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-gray-300 transition-colors text-white">Blog</Link>
            <Link href="/mlis" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-gray-300 transition-colors text-white">MLIS</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block hover:text-gray-300 transition-colors text-white">Contact</Link>
          </nav>

          <div className="border-t border-white/20 my-4"></div>
          
          <div className="pt-2 w-full">
             <button className="w-full bg-primary hover:bg-white hover:text-primary text-white py-[16px] rounded-[40px] text-[18px] font-normal leading-none transition-all border border-transparent shadow-lg cursor-pointer">
              Book a Call
            </button>
          </div>

          <div className="flex items-center gap-4 pt-6 mt-auto pb-4">
            <Link href="#" className="w-[38px] h-[38px] rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
              <FaFacebookF size={15} />
            </Link>
            <Link href="#" className="w-[38px] h-[38px] rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
              <FaYoutube size={15} />
            </Link>
            <Link href="#" className="w-[38px] h-[38px] rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
              <FaLinkedinIn size={15} />
            </Link>
            <Link href="#" className="w-[38px] h-[38px] rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
              <FaInstagram size={15} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
