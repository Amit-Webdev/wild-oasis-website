"use client";

import ReservationCard from "./ReservationCard";
import { deleteBooking } from "../_lib/actions";

import { useOptimistic } from "react";

function ReservationList({ bookings }) {
  // while using useOptimistic we need to be thinking about 2 states a) current state b) optimistic state - state after performing mutations
  // The second value, (optimisticDelete in this case) acts as setter function
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    // curBookings is the current state i.e bookings and bookingId is what we passed in optimisticDelete(bookingId)
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    }
  );

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteBooking(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          onDelete={handleDelete}
          key={booking.id}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
