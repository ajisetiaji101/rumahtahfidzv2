import { Router } from "express";
import IndexController from "../controller/IndexController.js";

const router = Router();

router.post("/insert", IndexController.AlquranGuruController.insert);
router.get(
  "/getcountalquransantri/",
  IndexController.AlquranGuruController.countAlquranSantri
);
router.get(
  "/getlistawal/",
  IndexController.AlquranGuruController.getListAlquranAwal
);

router.get(
  "/getlisthafalan/:id",
  IndexController.AlquranGuruController.getListHafalanAlquran
);
router.get("/getid/:id", IndexController.AlquranGuruController.getHafalanId);
router.post("/update/:id", IndexController.AlquranGuruController.update);
router.post("/delete/:id", IndexController.AlquranGuruController.delete);

export default router;
