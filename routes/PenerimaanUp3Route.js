import { Router } from "express";
import IndexController from "../controller/IndexController.js";

const router = Router();

router.get(
  "/penerimaanup3bydo/:no_do",
  IndexController.PenerimaanUP3Controller.getPenerimaanUP3sn
);

export default router;
