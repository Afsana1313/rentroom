// components/Logo.tsx
import React from "react";

type LogoProps = {
  name?: string; // optional, default name
};

export default function LogoContainer({ name = "MyApp" }: LogoProps) {
  return (
    <div className="flex items-center space-x-2 h-full">
      <img src="/images/logo.svg" alt="Logo" className="w-10 h-10" />
      <span className="text-xl font-bold text-gray-800">Rent a Room </span>
    </div>
  );
}
