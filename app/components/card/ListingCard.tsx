import Image from "next/image";

interface ListingCardProps {
  title: string;
  location: string;
  price: string;
  imageUrl: string;
}

export const ListingCard: React.FC<ListingCardProps> = ({
  title,
  location,
  price,
  imageUrl
}) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl transition w-full">
      {/* Responsive image container */}
      <div className="relative w-full aspect-square">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-xl"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Card content */}
      <div className="p-4 bg-white ">
        <h3 className="text-lg font-semibold text-gray-900 ">{title}</h3>
        <p className="text-sm text-gray-600 ">{location}</p>
        <p className="mt-2 text-sm font-medium text-gray-900 ">{price}</p>
      </div>
    </div>
  );
};
