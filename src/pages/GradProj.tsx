import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface GradWeek {
  id: number;
  title: string;
  description: string;
  images: string[];
}

const GRAD_WEEKS = [
  { id: 1, title: "1주차", imageCount: 13 },
  { id: 2, title: "2주차", imageCount: 8 }, 
  { id: 3, title: "3주차", imageCount: 11 },
  { id: 4, title: "4주차", imageCount: 11 },
  { id: 5, title: "5주차", imageCount: 13 },
  { id: 6, title: "6주차", imageCount: 8 },
];

const getImages = (week: any) => 
  Array.from({ length: week.imageCount }, (_, j) => {
    const index = (j + 1).toString().padStart(2, '0');
    return `/grad-proj/week${week.id}/week${week.id}_${index}.png`;
  });

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
                        src={getImages(week)[0]} 
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
                  <div key={idx} className="w-full rounded-[40px] overflow-hidden shadow-2xl bg-gray-50">
                    <img 
                      src={img} 
                      alt={`${selectedWeek.title} image ${idx + 1}`}
                      className="w-full h-auto object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
