import { usePortfolioStore } from "@/src/hooks/usePortfolioStore";

export default function Work() {
  const { works } = usePortfolioStore();

  return (
    <div className="pt-32 pb-24 px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <h1 className="text-6xl font-black text-[#243397] tracking-tighter mb-4">WORK</h1>
          <p className="text-gray-500 text-xl">Selected projects that showcase my design journey.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {works.map((work) => (
            <div key={work.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gray-100 rounded-3xl overflow-hidden mb-6 relative">
                <img 
                  src={work.image} 
                  alt={work.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#243397]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-[#243397]">{work.title}</h3>
              <p className="text-gray-400 font-medium uppercase tracking-widest text-sm mt-1">{work.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

