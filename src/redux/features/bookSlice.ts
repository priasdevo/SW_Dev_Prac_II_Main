import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "@/../../interfaces";

interface BookState {
  booking: BookingItem | null;
  isBooked: boolean;
}

const initialState: BookState = {
  booking: null,
  isBooked: false,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      if (!state.isBooked) {
        state.booking = action.payload;
        state.isBooked = true;
      }
    },
    cancelBooking: (state) => {
      state.booking = null;
      state.isBooked = false;
    },
  },
});

export const { addBooking, cancelBooking } = bookSlice.actions;

export default bookSlice.reducer;
