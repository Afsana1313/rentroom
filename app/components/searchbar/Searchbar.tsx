"use client";

import { useState, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import GuestModal from "./../home/GuestModal";

import "react-day-picker/dist/style.css";
import Modal from "../Modal";

interface GuestCounts {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}
export default function SearchBar() {
  const [location, setLocation] = useState("");
  const [range, setRange] = useState<DateRange | undefined>();
  const [openModal, setOpenModal] = useState(false);
  const [isGuestModalOpen, setGuestModalOpen] = useState(false);

  const [guests, setGuests] = useState<GuestCounts>({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0
  });
  const handleChange = (type: keyof GuestCounts, delta: number) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta)
    }));
  };

  // Label inside search bar
  const timelineLabel =
    range?.from && range?.to
      ? `${format(range.from, "dd MMM")} → ${format(range.to, "dd MMM")}`
      : "Timeline";

  return (
    <>
      {/* Search Bar */}
      <div className="w-full flex justify-center mt-10 relative">
        <div className="flex items-center bg-white border shadow-md rounded-full px-4 py-2 gap-3 hover:shadow-lg transition">
          {/* Section 1 */}
          <div className="flex flex-col px-4 border-r">
            <SearchbarText title="Destination" />
            <input
              type="text"
              placeholder="Search"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="text-sm focus:outline-none text-gray-600"
            />
          </div>

          {/* Timeline trigger */}
          <div
            className="flex flex-col px-4 border-r cursor-pointer"
            onClick={() => setOpenModal(true)}
          >
            <SearchbarText title="Timeline" />
            <span className="text-sm text-gray-600">{timelineLabel}</span>
          </div>

          {/* Section 3 */}
          <div
            className="flex flex-col px-4"
            onClick={() => setGuestModalOpen(true)}
          >
            <SearchbarText title="Who" />
            <span className="text-sm text-gray-600">
              {displayGuestList(guests)}
            </span>
          </div>

          {/* Search button */}
          <button className="bg-red-500 text-white rounded-full p-2 flex items-center justify-center hover:bg-red-600">
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* ------------------ MODAL ------------------ */}
      {/* Timeline Modal */}
      <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Select your timeline
          </h2>
          <button
            onClick={() => setOpenModal(false)}
            className="hover:bg-gray-200 text-gray-900 rounded-full p-1 transition"
          >
            <X />
          </button>
        </div>

        <div className="flex justify-center">
          <DayPicker
            mode="range"
            selected={range}
            onSelect={(selectedRange) => setRange(selectedRange)}
            numberOfMonths={2}
            pagedNavigation
            captionLayout="dropdown"
            className="airbnb-calendar text-gray-900"
          />
        </div>
      </Modal>
      <Modal isOpen={isGuestModalOpen} onClose={() => setGuestModalOpen(false)}>
        {" "}
        <GuestModal
          isOpen={isGuestModalOpen}
          onClose={() => {
            setGuestModalOpen(false);
          }}
          guests={guests}
          handleChange={handleChange}
        />
      </Modal>

      {/* ------------ Airbnb Calendar Styles ------------ */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.96); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.15s ease-out;
          }

          /* Selected dates */
          .airbnb-calendar .rdp-day_selected,
          .airbnb-calendar .rdp-day_range_start,
          .airbnb-calendar .rdp-day_range_end {
            background-color: #ff385c !important;
            color: white !important;
            border-radius: 12px !important;
          }

          /* Middle range */
          .airbnb-calendar .rdp-day_range_middle {
            background-color: #ff99ab33 !important;
            color: #222 !important;
          }

          /* Hover */
          .airbnb-calendar .rdp-day:hover {
            background-color: #ff385c22 !important;
            border-radius: 12px !important;
          }

          /* Calendar layout */
          .airbnb-calendar {
            --rdp-cell-size: 45px;
          }

          /* Make calendars perfectly horizontal */
          .airbnb-calendar .rdp-months {
            display: flex !important;
            flex-direction: row !important;
            gap: 20px;
          }
        `}
      </style>
    </>
  );
}

interface SearchbarTextProps {
  title: string;
}

const SearchbarText: React.FC<SearchbarTextProps> = ({ title }) => {
  return <span className="text-sm font-semibold text-gray-900">{title}</span>;
};

export const displayGuestList = (guests: GuestCounts): string => {
  const parts: string[] = [];

  if (guests.adults > 0 || guests.children > 0)
    parts.push(
      `${guests.adults + guests.children} guest${
        guests.adults > 1 || guests.children ? "s" : ""
      }`
    );

  if (guests.infants > 0)
    parts.push(`${guests.infants} infant${guests.infants > 1 ? "s" : ""}`);

  // if (guests.pets > 0)
  //   parts.push(`${guests.pets} pet${guests.pets > 1 ? "s" : ""}`);

  return parts.join(" , ") || "Add guests";
};
