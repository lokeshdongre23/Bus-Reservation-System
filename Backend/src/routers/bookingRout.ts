import bookingController from "../controller/bookingController";
import { Router } from "express";

const router = Router();

router.post("/", bookingController.bookBus);
router.get("/", bookingController.getBookings);

export default router;
