import express, { Request, Response } from "express";
import dbConnection from "./dbConnection/dbConection";
import BusRout from "./routers/BusesRout";
import bookingRout from "./routers/bookingRout";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT;

dbConnection();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("get request............. ");
});

app.use("/buses", BusRout);
app.use("/booking", bookingRout);

app.listen(port, () => {
  console.log(`RUnning on ${port}`);
});
