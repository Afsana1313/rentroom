import { bangkokListings, dummyListings } from "../../dummy/dummy";
import CarousalItem from "./CarousalItem";
const Carousal = () => {
  return (
    <div className="w-full py-5">
      <CarousalItem title="Popular Homes in Kualalampur" data={dummyListings} />
      <CarousalItem title="Explore Bangkok...." data={bangkokListings} />
    </div>
  );
};

export default Carousal;
