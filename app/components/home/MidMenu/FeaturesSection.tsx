"use client";
import FeatureItem from "./FeatureItem";
import { usePathname } from "next/navigation";

export default function FeaturesSection() {
  const pathname = usePathname(); // get current route
  const isRoot = pathname === "/"; // permanent line if root
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-row gap-6 justify-center">
        <FeatureItem
          icon={<img src="/images/home.svg" alt="Home" className="w-10 h-10" />}
          title="Homes"
          description="Trendy and smooth visuals."
          url={"/"}
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
          url={"/experiences"}
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
          url={"/services"}
        />
      </div>
    </div>
  );
}
