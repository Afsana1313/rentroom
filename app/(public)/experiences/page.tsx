import { ExperienceCarousal } from "@/app/components/card/ExperienceCarousal";
import {
  experienceOriginalList,
  experienceBangkokList
} from "@/app/dummy/dummy";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen w-full bg-white font-sans px-6">
      <main className="w-full flex flex-col justify-center">
        {/* Rent Room Originals */}
        <h3 className="text-xl font-bold text-gray-600 mt-6 pl-3">
          Original In Our RentARoom
        </h3>
        <ExperienceCarousal listings={experienceOriginalList} />
        <h3 className="text-xl font-bold text-gray-600 mt-6 pl-3">
          Popular Experiences in Bangkok
        </h3>
        <ExperienceCarousal listings={experienceBangkokList} />
      </main>
    </div>
  );
};

export default page;
