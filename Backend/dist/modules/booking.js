"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const booking = new mongoose_1.default.Schema({
    busNumber: {
        type: String,
        required: true,
    },
    numOfSeats: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});
const bookingModel = mongoose_1.default.model("Booking", booking);
exports.default = bookingModel;
//# sourceMappingURL=booking.js.map