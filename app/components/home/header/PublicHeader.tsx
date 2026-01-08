"use client";
import React, { useState, useRef, useEffect } from "react";
import LogoContainer from "../../logo/LogoContainer";
import FeaturesSection from "../MidMenu/FeaturesSection";
import { usePathname } from "next/navigation";

import { useAuthStore } from "./../../../store/authStore";

export default function FeaturesRow() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { isLoggedIn, openLoginModal } = useAuthStore();

  const pathname = usePathname();
  const hideOnRoutes = ["/rooms", "/room", "/checkout"];
  const shouldHide = hideOnRoutes.includes(pathname);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="relative flex items-center justify-center h-16 px-6">
      {/* Logo - hidden on tablet/mobile */}
      <div className="absolute left-6 hidden md:block">
        <LogoContainer />
      </div>

      {/* Features Section - full width on small screens */}
      {/* flex-1 md:flex-none */}
      <div className="">
        <FeaturesSection />
      </div>

      {/* Right Menu / Burger Icon - hidden on tablet/mobile */}
      <div className="absolute right-6 hidden md:block">
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md hover:bg-gray-200 transition"
        >
          <img src="/images/burger-menu.svg" alt="Menu" className="w-10 h-10" />
        </button>

        {open && (
          <div
            ref={menuRef}
            className="absolute right-0 mt-5 w-48 bg-white shadow-lg rounded-md border border-gray-200 z-50"
          >
            <ul className="flex flex-col p-1">
              <SideMenuItem
                text={"Become a host"}
                description={
                  "It's easy to start hosting and earn extra income."
                }
                icon={"/images/rental-income.svg"}
              />
              <div className="my-1 border-t border-gray-200"></div>
              <SideMenuItem text={"Refer a host"} />
              <SideMenuItem text={"Find a co-host"} />
              <SideMenuItem text={"Gift Cards"} />
              <div className="my-1 border-t border-gray-200"></div>
              <div onClick={openLoginModal}>
                <SideMenuItem text={"Login or Signup"} />
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

type SideMenuItemProps = {
  text: string;
  description?: string;
  icon?: string;
};
const SideMenuItem: React.FC<SideMenuItemProps> = ({
  text,
  description,
  icon
}) => {
  return (
    <li className="px-2 py-2 hover:bg-gray-100 rounded text-zinc-800 cursor-pointer">
      <div className="flex items-center space-x-3">
        {/* Text block */}
        <div className="flex flex-col">
          <span className="text-[12px] font-medium text-gray-800">{text}</span>
          {description && (
            <span className="text-[10px] text-gray-500">{description}</span>
          )}
        </div>

        {/* Optional SVG/Icon */}
        {icon && <img src={icon} alt={text} className="w-10 h-10" />}
      </div>
    </li>
  );
};
