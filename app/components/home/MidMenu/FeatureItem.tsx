// components/FeatureItem.tsx
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type FeatureItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;

  url: string;
};

export default function FeatureItem({
  icon,
  title,
  description,
  url
}: FeatureItemProps) {
  const pathname = usePathname(); // current URL path
  const isActive = pathname === url; // check if URL matches
  return (
    <Link href={url}>
      {" "}
      <div
        className={`flex flex-col items-center text-center p-4 cursor-pointer 
        border-transparent transition-all
        `}
      >
        <div className="max-w-8 max-h-8 text-blue-600">{icon}</div>

        <div>
          <h3
            className={`text-lg font-semibold text-gray-800 pb-1 border-b-2 transition-all ${
              isActive ? "border-gray-700" : "border-transparent"
            }`}
          >
            {title}
          </h3>

          {/* <p className="text-gray-600 text-sm">{description}</p> */}
        </div>
      </div>
    </Link>
  );
}
