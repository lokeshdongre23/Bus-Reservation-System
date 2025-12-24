import mongoose from "mongoose";

const booking = new mongoose.Schema(
  {
    busNumber: {
      type: String,
      required: true,
    },
    numOfSeats: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const bookingModel = mongoose.model("Booking", booking);

export default bookingModel;
