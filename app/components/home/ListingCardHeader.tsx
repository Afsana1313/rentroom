import React from "react";

interface ListingCardHeaderProps {
  title: string;
}

const ListingCardHeader: React.FC<ListingCardHeaderProps> = ({ title }) => {
  return <h2 className="text-2xl font-bold text-gray-900">{title}</h2>;
};

export default ListingCardHeader;
