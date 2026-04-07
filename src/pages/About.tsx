import { usePortfolioStore } from "@/src/hooks/usePortfolioStore";

export default function About() {
  const { profileImage } = usePortfolioStore();

  return (
    <div className="pt-32 pb-24 px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="space-y-12">
          <h1 className="text-6xl font-black text-[#243397] tracking-tighter">ABOUT</h1>
          
          <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
            <p className="font-bold text-[#243397]">
              "디자인은 사람과 사람 사이의 온기를 전달하는 매개체라고 믿습니다."
            </p>
            <p>
              안녕하세요, 사용자 경험을 깊이 있게 탐구하고 시각적 언어로 풀어내는 디자이너 이지은입니다. 
              저는 단순히 아름다운 것을 만드는 것을 넘어, 사용자가 마주하는 문제의 본질을 파악하고 
              그에 대한 논리적이고 감각적인 해답을 제시하는 과정을 즐깁니다.
            </p>
            <p>
              최근에는 AI 기술을 디자인 프로세스에 접목하여 효율성을 높이고, 
              새로운 창의적 가능성을 확장하는 실험을 지속하고 있습니다.
            </p>
          </div>

          <div className="space-y-8 pt-12 border-t border-gray-100">
            <div>
              <h3 className="text-[#243397] font-bold mb-4 uppercase tracking-widest text-sm">Experience</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-start">
                  <span className="font-bold text-gray-800">Sookmyung Women's Univ.</span>
                  <span className="text-gray-400 text-sm">2022 - Present</span>
                </li>
                <li className="flex justify-between items-start">
                  <span className="font-bold text-gray-800">Freelance Designer</span>
                  <span className="text-gray-400 text-sm">2023 - 2024</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[3/4] bg-gray-100 rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src={profileImage} 
              alt="Lee Ji-eun"
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#243397] rounded-full -z-10 opacity-10" />
          <div className="absolute -top-8 -right-8 w-48 h-48 border-4 border-[#243397]/20 rounded-full -z-10" />
        </div>
      </div>
    </div>
  );
}
