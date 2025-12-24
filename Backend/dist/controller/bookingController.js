"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const booking_1 = __importDefault(require("../modules/booking"));
// import Bus from "../modules/buses";
const busController_1 = __importDefault(require("./busController"));
// const bookingController = (req: Request, res: Response) => {
//   res.send("helllo from booking controller................");
// };
const bookBus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   const { busNumber } = req.body;
    //   console.log(findBusByNumber.findBusByNumber(busNumber));
    const bus = yield busController_1.default.findBusByNumber(req.body.busNumber);
    //   console.log(bus?.busNum);
    //   res.status(400).json({
    //     message: "Somthing went Wrong.....",
    //   });
    try {
        if (!bus) {
            res.status(404).json({
                message: `Bus Number: ${req.body.busNumber}  is unabvailable`,
            });
        }
        else {
            const body = req.body;
            yield booking_1.default.create({
                busNumber: body.busNumber,
                numOfSeats: body.numOfSeats,
            });
            res.status(200).json({
                message: `Booking of ${body.numOfSeats} has being done for BusNumber: ${bus.busNum}, bus Number ${bus.busName}`,
            });
        }
    }
    catch (error) {
        console.log("Error", error);
        res.status(400).json({
            message: "Somthing went Wrong.......",
        });
    }
});
exports.default = { bookBus };
//# sourceMappingURL=bookingController.js.map