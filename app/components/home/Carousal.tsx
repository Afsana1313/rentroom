import React from "react";
import { HomeCarousel } from "../../components/card/HomeCarousal"; // fix typo: HomeCarousal -> HomeCarousel
import { dummyListings } from "../../dummy/dummy";
const Carousal = () => {
  return (
    <div className="w-full max-w-[1440px] px-4 lg:px-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Explore Listings
      </h1>

      <HomeCarousel listings={dummyListings} />
    </div>
  );
};

export default Carousal;
