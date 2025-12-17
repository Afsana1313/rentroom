"use client";
import Link from "next/link";

import Image from "next/image";
import { Heart } from "lucide-react";
import { useState } from "react";

interface ListingCardProps {
  title: string;
  location: string;
  price: string;
  imageUrl: string;
  rate: number;
  original?: boolean; // optional prop
}
export const ExCard: React.FC<ListingCardProps> = ({
  title,
  rate,
  price,
  imageUrl,

  original = false
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <Link href={"/rooms"}>
      {" "}
      <div className="rounded-xl overflow-hidden cursor-pointer transition w-full relative">
        {/* Image */}
        <div className="relative w-full aspect-square">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
          />

          {/* Guest Fav Badge */}
          {original && (
            <div className="absolute top-3 left-3 bg-amber-50 bg-opacity-80 text-gray-900 text-xs font-semibold px-3 py-1 rounded-lg shadow-sm">
              Original
            </div>
          )}

          {/* Heart Icon */}
          <button
            onClick={() => setLiked(!liked)}
            className="
            absolute top-3 right-3
            bg-black bg-opacity-40
            border border-white
            rounded-full p-2
            flex items-center justify-center
            hover:scale-110
            transition
          "
          >
            <Heart
              className={`h-5 w-5 ${liked ? "text-red-500" : "text-white"}`}
            />
          </button>
        </div>

        {/* Card Content */}
        <div className="p-4 bg-white">
          <h3 className=" font-semibold text-gray-600">{title}</h3>

          <p className="mt-2 text-sm font-medium text-gray-500 flex flex-row items-center gap-1">
            {`From $${price} / guest \u00B7 `}
            <img src="/images/star.svg" alt="Rating" className="w-3 h-3 ml-1" />
            {rate}
          </p>
        </div>
      </div>
    </Link>
  );
};
