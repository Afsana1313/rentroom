"use client";
import React, { useState } from "react";
import { X, Globe, Facebook } from "lucide-react";

import { useAuthStore } from "./../../store/authStore";
import Modal from "../Modal";
interface Country {
  name: string;
  code: string;
}

const countries: Country[] = [
  { name: "Bangladesh", code: "+880" },
  { name: "India", code: "+91" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" }
];

export default function LoginModal() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phone, setPhone] = useState("");

  const { loginModalOpen, login, closeLoginModal } = useAuthStore();

  if (!loginModalOpen) return null;

  return (
    <Modal onClose={closeLoginModal} isOpen={loginModalOpen}>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-4">
          <button onClick={closeLoginModal}>
            <X
              className="cursor-pointer text-gray-600 hover:text-gray-800"
              size={24}
            />
          </button>
          <h2 className="text-lg font-semibold text-gray-900">
            Log in or sign up
          </h2>
          <div className="w-6" /> {/* Placeholder for centering */}
        </div>

        {/* Body */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Welcome to Rent-A-Room
          </h3>

          {/* Country Select + Phone Input */}
          <div className="border rounded-xl overflow-hidden">
            <select
              className="w-full border-b p-3 text-gray-700"
              value={selectedCountry.code}
              onChange={(e) =>
                setSelectedCountry(
                  countries.find((c) => c.code === e.target.value) ||
                    countries[0]
                )
              }
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name} ({country.code})
                </option>
              ))}
            </select>

            <input
              type="tel"
              pattern="[0-9]*"
              inputMode="numeric"
              className="w-full p-3 outline-none text-gray-700"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <p className="text-xs text-gray-500 mt-2">
            We’ll call or text you to confirm your number. Standard message and
            data rates apply.{" "}
            <span className="underline cursor-pointer">Privacy Policy</span>
          </p>

          {/* Continue button */}
          <button className="mt-4 w-full py-3 bg-gradient-to-r from-pink-600 to-rose-500 text-white rounded-xl text-base font-semibold">
            Continue
          </button>

          {/* Divider */}
          <div className="relative my-6">
            <div className="border-t"></div>
            <span className="absolute left-1/2 -top-3 bg-white px-3 text-gray-500 text-sm -translate-x-1/2">
              or
            </span>
          </div>

          {/* Social Buttons */}
          <div className="space-y-3">
            <button className="text-gray-900 w-full border rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-50">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5"
              />
              Continue with Google
            </button>

            <button className="text-gray-900 w-full border rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-50">
              <img
                src="https://www.svgrepo.com/show/303128/apple-logo.svg"
                className="w-5"
              />
              Continue with Apple
            </button>

            <button className="text-gray-900 w-full border rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-50">
              <span className="text-gray-700">@</span>
              Continue with email
            </button>

            <button className="text-gray-900 w-full border rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-50">
              <Facebook className="text-blue-600" size={20} />
              Continue with Facebook
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
