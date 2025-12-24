"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConection_1 = __importDefault(require("./dbConnection/dbConection"));
const BusesRout_1 = __importDefault(require("./routers/BusesRout"));
const bookingRout_1 = __importDefault(require("./routers/bookingRout"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = process.env.PORT;
(0, dbConection_1.default)();
app.get("/favicon.ico", () => {
    return "";
});
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("get request............. ");
});
app.use("/buses", BusesRout_1.default);
app.use("/booking", bookingRout_1.default);
app.listen(port, () => {
    console.log(`RUnning on ${port}`);
});
//# sourceMappingURL=server.js.map