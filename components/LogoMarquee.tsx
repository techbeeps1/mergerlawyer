import Image from "next/image";

export default function LogoMarquee() {
  const logos = [
    { src: "/DLA_Piper_Logo.svg%201.png", alt: "DLA Piper" },
    { src: "/Fenwick-Logo%201.png", alt: "Fenwick" },
    { src: "/NYU-Law-Logo-removebg-preview%201.png", alt: "NYU Law" },
    { src: "/Mount_Holyoke_College_seal.svg%201.png", alt: "Mount Holyoke College" },
    { src: "/logo%201.png", alt: "ProVisors" },
    { src: "/American_Bar_Association_logo.svg%201.png", alt: "ABA" },
    { src: "/67e2c35b8fb1fa999246e13a_heycounsel_logo_black%201.png", alt: "HeyCounsel" },
    { src: "/download-removebg-preview%201.png", alt: "AMC" },
  ];

  return (
    <div className="w-full bg-white py-[60px] md:py-[100px] overflow-hidden flex relative z-30">
      <div className="flex shrink-0 animate-marquee-mobile md:animate-marquee whitespace-nowrap min-w-max items-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 px-6 md:px-12 flex items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={80}
              className="object-contain h-[40px] sm:h-[50px] md:h-[70px] w-auto max-w-[150px] md:max-w-[240px]"
            />
          </div>
        ))}
      </div>
      
      {/* Duplicate for infinite effect */}
      <div className="flex shrink-0 animate-marquee-mobile md:animate-marquee whitespace-nowrap min-w-max items-center" aria-hidden="true">
        {logos.map((logo, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0 px-6 md:px-12 flex items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={80}
              className="object-contain h-[40px] sm:h-[50px] md:h-[70px] w-auto max-w-[150px] md:max-w-[240px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
