"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { useState } from "react";

interface ListingCardProps {
  title: string;
  location: string;
  price: string;
  imageUrl: string;
  guestFav?: boolean; // optional prop
}

export const ListingCard: React.FC<ListingCardProps> = ({
  title,
  location,
  price,
  imageUrl,
  guestFav = false
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition w-full relative">
      {/* Image */}
      <div className="relative w-full aspect-square">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-xl"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Guest Fav Badge */}
        {guestFav && (
          <div className="absolute top-3 left-3 bg-amber-50 bg-opacity-80 text-gray-900 text-xs font-semibold px-3 py-1 rounded-lg shadow-sm">
            Guest Favourite
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
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="mt-2 text-sm font-medium text-gray-900">{price}</p>
      </div>
    </div>
  );
};
