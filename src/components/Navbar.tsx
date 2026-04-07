import { NavLink, Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";

const NAV_ITEMS = [
  { name: "ABOUT", path: "/about" },
  { name: "WORK", path: "/work" },
  { name: "BLOG", path: "/blog" },
  { name: "GRAD-PROJ", path: "/grad-proj" },
  { name: "CONTACT", path: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center pointer-events-none">
      <Link 
        to="/" 
        className="text-[#243397] font-black text-2xl tracking-tighter pointer-events-auto hover:opacity-70 transition-opacity"
      >
        EUNOIA
      </Link>
      <div className="flex gap-8 pointer-events-auto">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "text-[#243397] font-bold text-sm tracking-widest transition-all duration-300 hover:opacity-70",
                isActive ? "underline underline-offset-4 decoration-2" : ""
              )
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
