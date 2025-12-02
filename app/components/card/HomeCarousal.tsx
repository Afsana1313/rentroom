"use client";

import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ListingCard } from "./ListingCard";

interface Listing {
  id: number;
  title: string;
  location: string;
  price: string;
  imageUrl: string;
  guestFav?: boolean;
}

interface HomeCarouselProps {
  listings: Listing[];
}

export const HomeCarousel: React.FC<HomeCarouselProps> = ({ listings }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const itemWidth = 300 + 16; // card width + gap
    container.scrollBy({
      left: direction === "left" ? -itemWidth : itemWidth,
      behavior: "smooth"
    });
  };

  // Infinite scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handle = () => {
      const scrollWidth = container.scrollWidth / 2; // first set
      if (container.scrollLeft >= scrollWidth) {
        container.scrollLeft -= scrollWidth;
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += scrollWidth;
      }
    };

    container.addEventListener("scroll", handle);
    return () => container.removeEventListener("scroll", handle);
  }, [listings]);

  return (
    <div className="relative w-full">
      {/* Left button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10 hover:scale-110 transition"
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>

      {/* Right button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10 hover:scale-110 transition"
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll scroll-smooth gap-4 py-4 no-scrollbar"
      >
        {listings?.map((item, idx) => (
          <div key={idx} className="min-w-[280px] max-w-[280px]">
            <ListingCard
              title={item.title}
              location={item.location}
              price={item.price}
              imageUrl={item.imageUrl}
              guestFav={item.guestFav}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
