import Hero from "@/src/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Additional sections can be added here */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[#243397]">SELECTED WORKS</h3>
              <p className="text-gray-500">A collection of projects that define my design philosophy.</p>
            </div>
            <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden relative group">
               <div className="absolute inset-0 bg-[#243397]/0 group-hover:bg-[#243397]/10 transition-colors duration-500" />
               <img 
                 src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop" 
                 alt="Project 1"
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                 referrerPolicy="no-referrer"
               />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
