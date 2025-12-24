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
const buses_1 = __importDefault(require("../modules/buses"));
// constroler to get busses
const getBuses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const buses = yield buses_1.default.find({});
        res.status(200).json(buses);
        console.log("bus Controller called", buses);
    }
    catch (error) {
        console.log("Eroor Encounted:", error);
    }
});
// Controller to add busses
const regBus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        // console.log(body);
        yield buses_1.default.create({
            busName: body.busName,
            busNum: body.busNum,
            totalSeat: body.totalSeat,
            source: body.source,
            destination: body.destination,
        });
        res.status(200).json({
            status: 200,
            message: " Bus Registration is sucessFull",
        });
    }
    catch (error) {
        console.log("Error:", error);
        res.status(400).json({
            message: "you got some error",
        });
    }
});
// const findBus = async (req: Request, res: Response) => {
//   try {
//     // const { busNumber } = req.params;
//     // const foundBus = await Bus.find({ busNum: busNumber }).exec();
//     const body = req.body;
//     const busNumber = body.busNumber;
//     console.log();
//     res.status(200).json({
//       messsage: "fount",
//       busNUmber: busNumber,
//     });
//     return busNumber;
//   } catch (error) {
//     console.log("Error:", error);
//     res.status(400).json({
//       message: "somthing went wrong...........",
//     });
//   }
// };
const findBusByNumber = (busNumber) => __awaiter(void 0, void 0, void 0, function* () {
    const foundBus = yield buses_1.default.findOne({ busNum: busNumber });
    return foundBus;
});
exports.default = { getBuses, regBus, findBusByNumber };
//# sourceMappingURL=busController.js.map