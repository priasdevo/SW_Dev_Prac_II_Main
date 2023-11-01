"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { cancelBooking } from "@/redux/features/bookSlice";

const MyBooking: React.FC = () => {
  const dispatch = useDispatch();
  const booking = useSelector((state: RootState) => state.book.booking);

  const handleCancelBooking = () => {
    dispatch(cancelBooking());
  };

  return (
    <main className="flex flex-col justify-content items-center p-24 pt-0 min-h-screen">
      <h1>My Booking Details</h1>
      {booking ? (
        <div>
          <p>
            <strong>Name:</strong> {booking.name}
          </p>
          <p>
            <strong>Surname:</strong> {booking.surname}
          </p>
          <p>
            <strong>Id:</strong> {booking.id}
          </p>
          <p>
            <strong>Hospital:</strong> {booking.hospital}
          </p>
          <p>
            <strong>Date:</strong> {booking.date}
          </p>
          <button
            className="mt-4 py-2 px-5 bg-blue-600 text-white rounded border border-blue-700 hover:bg-blue-700"
            onClick={handleCancelBooking}
          >
            Cancel Booking
          </button>
        </div>
      ) : (
        <p>You haven't booked any appointments yet.</p>
      )}
    </main>
  );
};

export default MyBooking;
