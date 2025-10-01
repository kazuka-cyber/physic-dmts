import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Хүсвэл өөр icon ашиглаж болно

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/motion", label: " Хөдөлгөөн", icon: "./animation.svg" },
    { href: "/sound", label: "Дуу ба долгион", icon: "./soundwave.svg" },
    { href: "/heat", label: "Дулаан", icon: "./heating.svg" },
    { href: "/quantum", label: "Квантын үзэгдэл", icon: ".hysics.svg" },
    { href: "/light", label: "Гэрэл ба цацраг", icon: "./radiation.svg" },
    {
      href: "/energy",
      label: "Цахилгаан, соронз ба хэлхээ",
      icon: "./magnetic.svg",
    },
  ];

  return (
    <div className="w-full  lg:w-[20%] flex-shrink-0 p-6  text-[#6C7280] hover:text-black bg-[#FFFFFF]  lg:sticky top-0 lg:min-h-screen  ">
      {/* Hamburger button - Mobile only */}
      <div className="lg:hidden flex justify-between items-center w-full  ">
        <Link href="/">
          <h2 className="text-3xl font-semibold text-black ">Menu</h2>
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Main navigation */}
      <div className={`lg:block ${isOpen ? "block" : "hidden"}`}>
        <Link
          href="/"
          className="lg:block hidden text-2xl font-semibold mb-6 block hover:bg-[#EFEFFE] p-3 rounded-lg transition-all "
        >
          ДМЦС
        </Link>

        <div className="flex flex-wrap lg:flex-col gap-4 text-black">
          {links.map(({ href, label, icon }, idx) => (
            <Link
              key={idx}
              href={href}
              className="flex items-center gap-3 text-base sm:text-lg py-3 px-4 rounded-lg text-black hover:bg-[#EFEFFE] transition-all "
            >
              {icon && (
                <img src={icon} alt={label} className="w-6 h-6 text-black  " />
              )}
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
