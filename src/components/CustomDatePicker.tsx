"use client";
import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function CustomDatePicker({ onChange }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <div className="h-[50px] w-[250px] rounded-lg space-x-5 space-y-2">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="bg-white"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(params) => <input {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}
