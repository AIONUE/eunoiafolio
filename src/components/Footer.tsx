import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 border-t border-[#243397]/10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[#243397] font-bold text-xl tracking-tighter">
          LEE JI EUN
        </div>
        
        <div className="flex gap-8 text-sm text-gray-400 font-medium">
          <Link to="/admin" className="hover:text-[#243397] transition-colors">ADMIN</Link>
          <a href="mailto:wldms2418@sookmyung.ac.kr" className="hover:text-[#243397] transition-colors">EMAIL</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#243397] transition-colors">INSTAGRAM</a>
        </div>

        <div className="text-xs text-gray-300">
          © 2026 LEE JI EUN. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
