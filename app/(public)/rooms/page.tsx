/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import {
  Share,
  Heart,
  Grid,
  Search,
  Menu,
  Globe,
  UserCircle
} from "lucide-react";
interface Listing {
  id: string;
  title: string;
  location: string;
  description: string;
  images: string[];
  isRareFind: boolean;
}
const page = () => {
  const listing: Listing = {
    id: "1",
    title: "King Room in Walking Distance to TRX MRT",
    location: "Kuala Lumpur, Malaysia",
    description: "1 king bed · Private attached bathroom",
    isRareFind: true,
    images: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80", // Main
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80"
    ]
  };
  return (
    <div className="max-w-7xl mx-auto px-6 font-sans text-gray-800 flex flex-col">
      {/* 1. Title Section */}
      {/* Mobile: order-2 (moves down) | Desktop: md:order-1 (moves up) */}
      <div className="order-2 md:order-1 flex justify-between items-end mb-6 md:mt-0 mt-4">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold">{listing.title}</h1>
        </div>
      </div>

      {/* 2. Image Gallery Section */}
      {/* Mobile: order-1 (moves to top) | Desktop: md:order-2 */}
      {/* We change 'h-[450px]' to 'h-[300px]' on mobile for better aspect ratio */}
      <div className="order-1 md:order-2 grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[300px] md:h-[450px] rounded-2xl overflow-hidden relative">
        {/* Main Large Image: Spans full width on mobile, half on desktop */}
        <div className="col-span-1 md:col-span-2 md:row-span-2 relative group cursor-pointer h-full">
          <img
            src={listing.images[0]}
            className="w-full h-full object-cover group-hover:brightness-90 transition"
            alt="Main"
          />
        </div>

        {/* 4 Smaller Images: 'hidden' on mobile, 'block' on md (768px+) */}
        {listing.images.slice(1, 5).map((src, i) => (
          <div
            key={i}
            className="hidden md:block relative group cursor-pointer"
          >
            <img
              src={src}
              className="w-full h-full object-cover group-hover:brightness-90 transition"
              alt={`Gallery ${i}`}
            />
          </div>
        ))}

        {/* Mobile-only Indicator (Optional placeholder for your future slider) */}
        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs md:hidden">
          1 / {listing.images.length}
        </div>
      </div>

      {/* 3. Footer Info Section */}
      {/* Mobile: order-3 (remains at bottom) */}
      <div className="order-3 flex flex-col md:flex-row justify-between items-start mt-8 gap-6">
        <div className="flex-1">
          <h2 className="text-xl font-semibold">Room in {listing.location}</h2>
          <p className="text-gray-600 mt-1">{listing.description}</p>
        </div>

        {/* Rare Find Card: Full width on mobile, fixed width on desktop */}
        {listing.isRareFind && (
          <div className="border rounded-xl p-6 flex items-start gap-4 shadow-sm w-full md:w-[350px]">
            <div className="text-[#E31C5F] pt-1">
              <svg viewBox="0 0 32 32" className="w-8 h-8 fill-current">
                <path d="M16 2l-4 4-10 6 2 12 12 6 12-6 2-12-10-6z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold">Rare find!</p>
              <p className="text-gray-600 text-sm">
                This place is usually booked
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
