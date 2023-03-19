import { Router } from "express";
import IndexController from "../controller/IndexController.js";

const router = Router();

router.post("/insert", IndexController.AlquranSantriController.insert);
router.get(
  "/getcountalquransantri/",
  IndexController.AlquranSantriController.countAlquranSantri
);
router.get(
  "/getlistawal/",
  IndexController.AlquranSantriController.getListAlquranAwal
);

router.get(
  "/getlisthafalan/:id",
  IndexController.AlquranSantriController.getListHafalanAlquran
);
router.get("/getid/:id", IndexController.AlquranSantriController.getHafalanId);
router.post("/update/:id", IndexController.AlquranSantriController.update);
router.post("/delete/:id", IndexController.AlquranSantriController.delete);

export default router;
