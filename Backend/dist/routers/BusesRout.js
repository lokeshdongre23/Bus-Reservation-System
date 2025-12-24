"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const busController_1 = __importDefault(require("../controller/busController"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", busController_1.default.getBuses);
router.post("/", busController_1.default.regBus);
// router.post("/findbus", busController.findBus);
exports.default = router;
//# sourceMappingURL=BusesRout.js.map