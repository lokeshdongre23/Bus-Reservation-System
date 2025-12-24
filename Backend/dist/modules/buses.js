"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const busSchema = new mongoose_1.default.Schema({
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
const Bus = mongoose_1.default.model("bus", busSchema);
exports.default = Bus;
//# sourceMappingURL=buses.js.map