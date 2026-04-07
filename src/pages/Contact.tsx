export default function Contact() {
  return (
    <div className="pt-32 pb-24 px-8 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="space-y-12">
          <h1 className="text-8xl font-black text-[#243397] tracking-tighter">LET'S<br />TALK.</h1>
          <p className="text-2xl text-gray-500 max-w-md">
            새로운 프로젝트, 협업 제안, 혹은 가벼운 인사도 언제나 환영합니다.
          </p>
          
          <div className="space-y-4">
            <a href="mailto:wldms2418@sookmyung.ac.kr" className="block text-3xl font-bold text-[#243397] hover:underline underline-offset-8">
              wldms2418@sookmyung.ac.kr
            </a>
            <div className="flex gap-8 pt-8">
              <a href="#" className="text-[#243397] font-bold hover:opacity-50 transition-opacity">INSTAGRAM</a>
              <a href="#" className="text-[#243397] font-bold hover:opacity-50 transition-opacity">BEHANCE</a>
              <a href="#" className="text-[#243397] font-bold hover:opacity-50 transition-opacity">LINKEDIN</a>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-12 rounded-[40px] border border-gray-100 flex flex-col justify-center space-y-8">
          <h3 className="text-3xl font-black text-[#243397] tracking-tight">CONTACT INFO</h3>
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</span>
              <p className="text-xl font-bold text-gray-800">wldms2418@sookmyung.ac.kr</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Location</span>
              <p className="text-xl font-bold text-gray-800">Seoul, South Korea</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Availability</span>
              <p className="text-xl font-bold text-gray-800">Available for freelance & full-time</p>
            </div>
          </div>
          <div className="pt-8">
            <p className="text-gray-500 font-medium leading-relaxed">
              프로젝트 제안이나 궁금한 점이 있으시면 언제든 메일로 연락주세요.<br />
              보통 24시간 이내에 답변 드립니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
