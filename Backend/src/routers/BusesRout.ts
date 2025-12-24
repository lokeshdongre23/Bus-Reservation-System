import busController from "../controller/busController";
import { Router } from "express";

const router = Router();

router.get("/", busController.getBuses);
router.post("/", busController.regBus);
// router.post("/findbus", busController.findBus);

export default router;
