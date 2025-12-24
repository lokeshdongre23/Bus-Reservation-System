import Bus from "../modules/buses";
import { Request, Response } from "express";
// constroler to get busses
const getBuses = async (req: Request, res: Response) => {
  try {
    const buses = await Bus.find({});
    res.status(200).json(buses);
    console.log("bus Controller called");
  } catch (error) {
    console.log("Eroor Encounted:", error);
  }
};
// Controller to add busses
const regBus = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    // console.log(body);
    await Bus.create({
      busName: body.busName,
      busNum: body.busNum,
      totalSeat: body.totalSeat,
      source: body.source,
      destination: body.destination,
      fair: body.fair,
    });
    res.status(200).json({
      status: 200,
      message: " Bus Registration is sucessFull",
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(400).json({
      message: "you got some error",
    });
  }
};

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

const findBusByNumber = async (busNumber: string) => {
  const foundBus = await Bus.findOne({ busNum: busNumber });
  return foundBus;
};

export default { getBuses, regBus, findBusByNumber };
