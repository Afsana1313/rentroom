"use client";

import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ListingCard } from "./ListingCard";

interface Listing {
  id: number;
  title: string;
  location: string;
  price: string;
  imageUrl: string;
}

interface HomeCarouselProps {
  listings: Listing[];
}

export const HomeCarousel: React.FC<HomeCarouselProps> = ({ listings }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Clone items (infinite effect)
  const loopedList = [...listings, ...listings, ...listings];

  // Start at the *middle set*
  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const itemWidth = 300; // must match card width
      const middle = listings.length * itemWidth;
      container.scrollLeft = middle;
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const itemWidth = 300; // width of each card

    const newScroll =
      direction === "left"
        ? container.scrollLeft - itemWidth
        : container.scrollLeft + itemWidth;

    container.scrollTo({ left: newScroll, behavior: "smooth" });
  };

  // Handle infinite loop by jumping back
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;

    const itemWidth = 300;
    const totalWidth = itemWidth * listings.length;

    // Hard reset when reaching left
    if (container.scrollLeft <= itemWidth) {
      container.scrollLeft = totalWidth + itemWidth;
    }

    // Hard reset when reaching right
    if (container.scrollLeft >= totalWidth * 2) {
      container.scrollLeft = totalWidth;
    }
  };

  return (
    <div className="relative w-full">
      {/* Left button */}
      <button
        onClick={() => scroll("left")}
        className="
          absolute left-2 top-1/2 -translate-y-1/2
          bg-white shadow-lg rounded-full p-2 z-10
          hover:scale-110 transition
        "
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>

      {/* Right button */}
      <button
        onClick={() => scroll("right")}
        className="
          absolute right-2 top-1/2 -translate-y-1/2
          bg-white shadow-lg rounded-full p-2 z-10
          hover:scale-110 transition
        "
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>

      {/* Infinite Scroll Row */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="
          flex overflow-x-scroll scroll-smooth gap-4 py-4 no-scrollbar
        "
      >
        {loopedList.map((item, index) => (
          <div key={index} className="min-w-[280px] max-w-[280px]">
            <ListingCard
              title={item.title}
              location={item.location}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
