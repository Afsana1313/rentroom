"use client";
import FeatureItem from "./FeatureItem";
import { usePathname } from "next/navigation";

export default function FeaturesSection() {
  const pathname = usePathname(); // get current route

  const isRoot = pathname === "/"; // permanent line if root
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <FeatureItem
        icon={<img src="/images/Home.svg" alt="Home" className="w-10 h-10" />}
        title="Homes"
        description="Trendy and smooth visuals."
        selected={isRoot}
      />
      <FeatureItem
        icon={
          <img
            src="/images/air-baloon.svg"
            alt="Experience"
            className="w-10 h-10"
          />
        }
        title="Experiences"
        description="Trendy and smooth visuals."
      />
      <FeatureItem
        icon={
          <img
            src="/images/service-bell.svg"
            alt="Services"
            className="w-10 h-10"
          />
        }
        title="Services"
        description="Trendy and smooth visuals."
      />
    </div>
  );
}
