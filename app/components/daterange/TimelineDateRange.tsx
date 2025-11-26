"use client";

import { useState } from "react";
import { format } from "date-fns";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function TimelineDateRange() {
  const [range, setRange] = useState<DateRange | undefined>();

  return (
    <div className="w-full flex flex-col items-center gap-3">
      {/* Display selected range */}
      <div className="text-lg font-medium">
        {range?.from
          ? `${format(range.from, "dd MMM, yyyy")} → ${
              range.to ? format(range.to, "dd MMM, yyyy") : "Select end date"
            }`
          : "Select a project timeline"}
      </div>

      {/* The actual calendar */}
      <DayPicker
        mode="range"
        selected={range}
        onSelect={(selectedRange) => setRange(selectedRange)}
        numberOfMonths={2}
        pagedNavigation
        captionLayout="dropdown"
        /* 👇 NEW FIXES */
        fromMonth={new Date()} // only show current & future months
        disabled={{ before: new Date() }} // block past dates
        toYear={new Date().getFullYear() + 2} // allow next 2 years
        className="airbnb-calendar text-gray-900"
      />
    </div>
  );
}
