import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface GradWeek {
  id: number;
  title: string;
  description: string;
  images: string[];
}

const generateImages = (weekNum: number, count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const imgNum = (i + 1).toString().padStart(2, '0');
    return `/grad-proj/week${weekNum}/week${weekNum}_${imgNum}.png`;
  });
};

const GRAD_WEEKS: GradWeek[] = [
  {
    id: 1,
    title: "1주차",
    description: "1주차 프로젝트 기획 및 리서치 단계입니다.",
    images: generateImages(1, 20)
  },
  {
    id: 2,
    title: "2주차",
    description: "2주차 컨셉 도출 및 스케치 단계입니다.",
    images: generateImages(2, 20)
  },
  {
    id: 3,
    title: "3주차",
    description: "3주차 디자인 구체화 및 프로토타이핑 단계입니다.",
    images: generateImages(3, 20)
  },
  {
    id: 4,
    title: "4주차",
    description: "4주차 피드백 반영 및 디자인 고도화 단계입니다.",
    images: generateImages(4, 20)
  },
  {
    id: 5,
    title: "5주차",
    description: "5주차 최종 결과물 정리 및 아카이빙 단계입니다.",
    images: generateImages(5, 20)
  },
  {
    id: 6,
    title: "6주차",
    description: "6주차 프로젝트 마무리 및 회고 단계입니다.",
    images: generateImages(6, 20)
  }
];

export default function GradProj() {
  const [selectedWeek, setSelectedWeek] = useState<GradWeek | null>(null);

  return (
    <div className="pt-32 pb-24 px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!selectedWeek ? (
            <motion.div 
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-16"
            >
              <div className="space-y-4">
                <h1 className="text-8xl font-black text-[#243397] tracking-tighter">GRAD-PROJ</h1>
                <p className="text-xl text-gray-500 font-medium">졸업 작품 프로젝트 아카이브</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {GRAD_WEEKS.map((week) => (
                  <article 
                    key={week.id} 
                    className="group cursor-pointer"
                    onClick={() => setSelectedWeek(week)}
                  >
                    <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                      <img 
                        src={week.images[0]} 
                        alt={week.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=2070&auto=format&fit=crop";
                        }}
                      />
                    </div>
                    <div className="space-y-3">
                      <span className="text-[#243397] font-bold text-sm tracking-widest uppercase">Week {week.id}</span>
                      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#243397] transition-colors">
                        {week.title}
                      </h2>
                      <p className="text-gray-500 line-clamp-2 leading-relaxed">
                        {week.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <button 
                onClick={() => setSelectedWeek(null)}
                className="flex items-center gap-2 text-[#243397] font-bold hover:gap-4 transition-all"
              >
                <ArrowLeft size={20} />
                BACK TO LIST
              </button>

              <div className="space-y-6">
                <h2 className="text-6xl font-black text-[#243397] tracking-tighter">{selectedWeek.title}</h2>
                <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
                  {selectedWeek.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-12 pt-12">
                {selectedWeek.images.map((img, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.8 }}
                    className="w-full rounded-[40px] overflow-hidden shadow-2xl bg-gray-50"
                  >
                    <img 
                      src={img} 
                      alt={`${selectedWeek.title} image ${idx + 1}`}
                      className="w-full h-auto object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
