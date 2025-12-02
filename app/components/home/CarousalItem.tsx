import React from "react";
import ListingCardHeader from "./ListingCardHeader";
import { HomeCarousel } from "../card/HomeCarousal";

// Type for a single listing (should match HomeCarousel's Listing interface)
export interface Listing {
  id: number;
  title: string;
  location: string;
  price: string;
  imageUrl: string;
  guestFav?: boolean;
}

interface CarousalItemProps {
  title: string;
  data: Listing[];
}

const CarousalItem: React.FC<CarousalItemProps> = ({ title, data }) => {
  return (
    <div className="mt-2">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-8">
        <ListingCardHeader title={title} />
      </div>
      <div className="w-full overflow-hidden">
        <HomeCarousel listings={data} />
      </div>
    </div>
  );
};

export default CarousalItem;
