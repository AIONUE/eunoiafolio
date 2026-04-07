import { usePortfolioStore } from "@/src/hooks/usePortfolioStore";

export default function GradProj() {
  const { gradProjPosts } = usePortfolioStore();

  return (
    <div className="pt-32 pb-24 px-8 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="space-y-4">
          <h1 className="text-8xl font-black text-[#243397] tracking-tighter">GRAD-PROJ</h1>
          <p className="text-xl text-gray-500 font-medium">졸업 작품 프로젝트 아카이브</p>
        </div>

        {gradProjPosts.length === 0 ? (
          <div className="py-24 text-center border-2 border-dashed border-gray-100 rounded-[40px]">
            <p className="text-gray-400 font-bold text-xl">아직 등록된 프로젝트가 없습니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {gradProjPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="aspect-video bg-gray-100 rounded-3xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#243397]/20 font-black text-4xl">
                      GRAD
                    </div>
                  )}
                </div>
                <div className="space-y-3">
                  <span className="text-[#243397] font-bold text-sm tracking-widest">{post.date}</span>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#243397] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 line-clamp-3 leading-relaxed">
                    {post.content}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
