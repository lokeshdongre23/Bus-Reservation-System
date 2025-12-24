import { Request, Response } from "express";
import bookingModel from "../modules/booking";
// import Bus from "../modules/buses";
import findBus from "./busController";

// const bookingController = (req: Request, res: Response) => {
//   res.send("helllo from booking controller................");
// };

const bookBus = async (req: Request, res: Response) => {
  //   const { busNumber } = req.body;
  //   console.log(findBusByNumber.findBusByNumber(busNumber));
  const bus = await findBus.findBusByNumber(req.body.busNumber);
  //   console.log(bus?.busNum);
  //   res.status(400).json({
  //     message: "Somthing went Wrong.....",
  //   });
  try {
    if (!bus) {
      res.status(404).json({
        message: `Bus Number: ${req.body.busNumber}  is unabvailable`,
      });
    } else {
      const body = req.body;
      await bookingModel.create({
        busNumber: body.busNumber,
        numOfSeats: body.numOfSeats,
      });
      res.status(200).json({
        message: `Booking of ${body.numOfSeats} has being done for BusNumber: ${bus.busNum}, bus Number ${bus.busName}`,
      });
    }
  } catch (error) {
    console.log("Error", error);
    res.status(400).json({
      message: "Somthing went Wrong.......",
    });
  }
};

export default { bookBus };
