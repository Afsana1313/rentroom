import React, { useState } from "react";

interface GuestModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleChange: (a: keyof GuestCounts, b: number) => void;
  guests: GuestCounts;
}
interface GuestCounts {
  adults: number;
  children: number;
  infants: number;
  pets: number;
}
export default function GuestModal({
  isOpen,
  onClose,
  handleChange,
  guests
}: GuestModalProps) {
  if (!isOpen) return null;

  const guestOptions: {
    key: keyof GuestCounts;
    label: string;
    desc: string;
  }[] = [
    { key: "adults", label: "Adults", desc: "Age 13 or above" },
    { key: "children", label: "Children", desc: "Age 2–12" },
    { key: "infants", label: "Infants", desc: "Under 2" },
    { key: "pets", label: "Pets", desc: "Service animals allowed" }
  ];

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Select Guests</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          ✕
        </button>
      </div>

      {/* Guest Selectors */}
      {guestOptions.map((item) => (
        <div
          key={item.key}
          className="flex items-center justify-between py-4 border-b last:border-none"
        >
          {/* Left side text */}
          <div>
            <h3 className="text-base font-medium text-gray-900">
              {item.label}
            </h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>

          {/* Counter */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleChange(item.key, -1)}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 disabled:opacity-30"
              disabled={guests[item.key] === 0}
            >
              −
            </button>

            <span className="w-6 text-center text-lg font-medium text-gray-900">
              {guests[item.key]}
            </span>

            <button
              onClick={() => handleChange(item.key, 1)}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600"
            >
              +
            </button>
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Done
        </button>
      </div>
    </>
  );
}
