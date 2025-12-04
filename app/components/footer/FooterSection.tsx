import React from "react";
import { FooterSection as SectionType } from "./../../dummy/footerData";

interface Props {
  section: SectionType;
}

const FooterSection: React.FC<Props> = ({ section }) => {
  return (
    <div>
      <h3 className="font-semibold text-gray-800 mb-3">{section.title}</h3>
      <ul className="space-y-2">
        {section.links.map((link: string, index: number) => (
          <li
            key={link} // safer than index if links are unique
            className="text-sm text-gray-600 hover:underline cursor-pointer"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
