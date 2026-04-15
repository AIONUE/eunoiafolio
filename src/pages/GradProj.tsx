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
  { id: 1, title: "1주차", description: "1주차 진행 과정 및 결과물 아카이브입니다.", imageCount: 13 },
  { id: 2, title: "2주차", description: "2주차 진행 과정 및 결과물 아카이브입니다.", imageCount: 8 },
  { id: 3, title: "3주차", description: "3주차 진행 과정 및 결과물 아카이브입니다.", imageCount: 11 },
  { id: 4, title: "4주차", description: "4주차 진행 과정 및 결과물 아카이브입니다.", imageCount: 11 },
  { id: 5, title: "5주차", description: "5주차 진행 과정 및 결과물 아카이브입니다.", imageCount: 13 },
  { id: 6, title: "6주차", description: "6주차 진행 과정 및 결과물 아카이브입니다.", imageCount: 8 },
];

// 이미지를 생성하는 유틸리티 함수
const getImages = (weekId: number, count: number) => 
  Array.from({ length: count }, (_, j) => {
    const index = (j + 1).toString().padStart(2, '0');
    return `grad-proj/week${weekId}/week${weekId}_${index}.png`;
  });

export default function GradProj() {
  const [selectedWeek, setSelectedWeek] = useState<any>(null);

  return (
    <div className="pt-32 pb-24 px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        {!selectedWeek ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GRAD_WEEKS.map((week) => (
              <div key={week.id} onClick={() => setSelectedWeek(week)} className="cursor-pointer">
                <img 
                  src={getImages(week.id, week.imageCount)[0]} 
                  alt={week.title} 
                  className="w-full h-64 object-cover"
                />
                <h3 className="text-xl font-bold mt-4">{week.title}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-12">
            <button onClick={() => setSelectedWeek(null)}>← BACK TO LIST</button>
            <h1 className="text-4xl font-bold mb-8">{selectedWeek.title}</h1>
            <div className="flex flex-col gap-4 mt-8">
              {getImages(selectedWeek.id, selectedWeek.imageCount).map((src, idx) => (
                <img key={idx} src={src} alt={`${selectedWeek.title} ${idx}`} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
