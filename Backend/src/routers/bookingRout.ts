import bookingController from "../controller/bookingController";
import { Router } from "express";

const router = Router();

router.post("/", bookingController.bookBus);

export default router;
