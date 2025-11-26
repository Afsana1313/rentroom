"use client";

import Slider from "react-slick";
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
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {listings.map((item) => (
          <div key={item.id} className="px-2">
            <ListingCard
              title={item.title}
              location={item.location}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
