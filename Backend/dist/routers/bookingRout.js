"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bookingController_1 = __importDefault(require("../controller/bookingController"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/", bookingController_1.default.bookBus);
exports.default = router;
//# sourceMappingURL=bookingRout.js.map