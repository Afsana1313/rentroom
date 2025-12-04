import React from "react";
import FooterSection from "./FooterSection";
import {
  footerSections,
  FooterSection as FooterSectionType
} from "./../../dummy/footerData";
import { Globe, Facebook, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {footerSections.map((section: FooterSectionType) => (
            <FooterSection key={section.title} section={section} />
          ))}
        </div>

        {/* Divider */}
        <div className="border-t my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-sm">
          <div>
            &copy; 2025 Rent-A-Room, Inc. · Terms · Privacy · Your Privacy
            Choices
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 cursor-pointer hover:underline">
              <Globe size={16} />
              English (US)
            </div>

            <div className="cursor-pointer hover:underline">$ USD</div>

            <Facebook className="cursor-pointer" size={18} />
            <Instagram className="cursor-pointer" size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
