import { HomeCarousel } from "../../components/card/HomeCarousal";
import { dummyListings } from "../../dummy/dummy";
import ListingCardHeader from "./ListingCardHeader";
const Carousal = () => {
  return (
    <div className="w-full py-5">
      <div className="mx-auto w-full max-w-[1440px] px-4 lg:px-8">
        <ListingCardHeader title="Popular Homes in Kualalampur" />
      </div>
      <div className="w-full overflow-hidden">
        <HomeCarousel listings={dummyListings} />
      </div>
    </div>
  );
};

export default Carousal;
