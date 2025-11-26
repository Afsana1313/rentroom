// components/FeatureItem.tsx
import React from "react";

type FeatureItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  selected?: boolean;
};

export default function FeatureItem({
  icon,
  title,
  description,
  selected = false
}: FeatureItemProps) {
  return (
    <div
      className={`flex flex-col items-center text-center p-4 cursor-pointer border-b-5 
        border-transparent hover:border-gray-500 transition-all
        ${selected ? "border-gray-500" : ""}`}
    >
      <div className="w-8 h-8 text-blue-600">{icon}</div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {/* <p className="text-gray-600 text-sm">{description}</p> */}
      </div>
    </div>
  );
}
