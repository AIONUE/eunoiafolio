import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePortfolioStore } from "@/src/hooks/usePortfolioStore";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { vinylAsset, tapeAsset } = usePortfolioStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const plasticLayerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const revealContentRef = useRef<HTMLDivElement>(null);
  const tapeXRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=150%",
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Initial state: Plastic wrap is visible, title is behind it
    // Animation: Reveal content slides up like a paper roll
    tl.to(revealContentRef.current, {
      y: "0%",
      duration: 2,
      ease: "power2.inOut",
    })
    .to(plasticLayerRef.current, {
      opacity: 0,
      duration: 1.2,
    }, "-=2")
    .to(titleRef.current, {
      opacity: 0,
      duration: 1.2,
    }, "-=2")
    .to(tapeXRef.current, {
      scale: 1.1,
      opacity: 0,
      duration: 1.2,
    }, "-=2");

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-[#E5E5E5]">
      {/* Plastic Wrap Layer (Background) */}
      <div 
        ref={plasticLayerRef}
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ 
          backgroundImage: `url('${vinylAsset}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      />

      {/* Background Title Layer (Middle) */}
      <div ref={titleRef} className="absolute inset-0 flex items-center justify-center z-20">
        <h1 className="text-[14vw] font-black text-[#243397] tracking-tighter leading-none select-none">
          EUNOIA-FOLIO
        </h1>
      </div>

      {/* Tape Layer (Top) */}
      <div ref={tapeXRef} className="absolute inset-0 z-30 pointer-events-none">
          {tapeAsset ? (
            <>
              <img 
                src={tapeAsset} 
                alt="Tape TL" 
                className="absolute -top-[10%] -left-[10%] w-64 md:w-[35vw] h-auto object-contain opacity-95 drop-shadow-2xl -rotate-12"
                referrerPolicy="no-referrer"
              />
              <img 
                src={tapeAsset} 
                alt="Tape BR" 
                className="absolute -bottom-[10%] -right-[10%] w-64 md:w-[35vw] h-auto object-contain opacity-95 drop-shadow-2xl -rotate-12"
                referrerPolicy="no-referrer"
              />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Top Left Tape */}
                <div className="absolute top-0 left-0 w-64 h-32 bg-gray-400/30 -rotate-12 blur-[1px]" style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0% 100%)' }} />
                {/* Top Right Tape */}
                <div className="absolute top-0 right-0 w-64 h-32 bg-gray-400/30 rotate-12 blur-[1px]" style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0% 100%)' }} />
                
                {/* Blue X Tapes */}
                <div className="absolute top-[10%] left-[5%] w-40 h-16 bg-[#243397] rotate-45 opacity-90 shadow-xl tape-texture" style={{ clipPath: 'polygon(2% 10%, 98% 0%, 100% 90%, 0% 100%)' }} />
                <div className="absolute top-[10%] left-[5%] w-40 h-16 bg-[#243397] -rotate-45 opacity-90 shadow-xl tape-texture" style={{ clipPath: 'polygon(0% 0%, 95% 15%, 100% 85%, 5% 100%)' }} />

                <div className="absolute bottom-[10%] right-[5%] w-40 h-16 bg-[#243397] rotate-45 opacity-90 shadow-xl tape-texture" style={{ clipPath: 'polygon(5% 5%, 100% 0%, 95% 95%, 0% 100%)' }} />
                <div className="absolute bottom-[10%] right-[5%] w-40 h-16 bg-[#243397] -rotate-45 opacity-90 shadow-xl tape-texture" style={{ clipPath: 'polygon(0% 10%, 90% 0%, 100% 90%, 10% 100%)' }} />
            </div>
          )}
      </div>

      {/* Reveal Content Layer (Slides Up) */}
      <div 
        ref={revealContentRef}
        className="absolute inset-0 z-40 bg-white translate-y-full shadow-[0_-20px_50px_rgba(0,0,0,0.1)]"
      >
        {/* Paper Roll Top Shadow */}
        <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-gray-200 to-transparent opacity-50" />
        
        <div className="h-full flex flex-col items-center justify-center px-8 text-center max-w-5xl mx-auto">
          <div className="space-y-12 w-full">
            <div className="text-left space-y-4">
              <h2 className="text-6xl md:text-8xl font-bold text-[#243397] leading-[1.2]">
                안녕하세요!<br />
                사람을 사랑하는 디자이너<br />
                <span className="relative inline-block">
                  이지은
                  <div className="absolute inset-0 bg-[#243397]/10 -z-10 transform -rotate-1 scale-110" />
                </span> 입니다.
              </h2>
            </div>
            
            {/* Blue Banner */}
            <div className="relative w-screen left-1/2 -translate-x-1/2 py-6 bg-[#243397] overflow-hidden transform -rotate-2">
               <div className="flex justify-center gap-12 whitespace-nowrap">
                 {['UIUX DESIGN', 'BRANDING', 'AI GENERATE', 'MEDIA DESIGN'].map((skill, i) => (
                   <span key={skill} className="text-white font-bold tracking-widest text-lg md:text-2xl flex items-center gap-6">
                     {skill}
                     {i < 3 && <span className="w-1 h-8 bg-white/30" />}
                   </span>
                 ))}
               </div>
               {/* Secondary overlapping banner */}
               <div className="absolute inset-0 bg-[#243397]/20 translate-y-2 -z-10" />
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start text-left pt-12">
              <span className="text-[#243397] font-black text-2xl uppercase tracking-tighter border-b-4 border-[#243397]">What I do</span>
              <p className="text-gray-800 text-xl md:text-2xl font-medium leading-relaxed max-w-3xl">
                사람에 대한 애정을 바탕으로 더 나은 경험을 만들어가기 위해 소통합니다. 
                논리적인 피드백과 AI 활용 능력을 통해 디지털 환경에서의 새로운 가능성을 탐구합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

