import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
  busName: {
    type: String,
    required: true,
  },
  busNum: {
    type: String,
    unique: true,
    required: true,
  },
  totalSeat: {
    type: Number,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  fair: {
    type: Number,
    required: true,
  },
});

const Bus = mongoose.model("bus", busSchema);

export default Bus;
