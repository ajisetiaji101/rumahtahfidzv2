import { Router } from "express";
import IndexController from "../controller/IndexController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = Router();

router.post(
  "/insert",
  verifyToken,
  IndexController.AlquranSantriController.insert
);
router.get(
  "/getcountalquransantri/",
  IndexController.AlquranSantriController.countAlquranSantri
);
router.get(
  "/getlistawal/",
  verifyToken,
  IndexController.AlquranSantriController.getListAlquranAwal
);

router.get(
  "/getlisthafalan/:id",
  verifyToken,
  IndexController.AlquranSantriController.getListHafalanAlquran
);
router.get(
  "/getid/:id",
  verifyToken,
  IndexController.AlquranSantriController.getHafalanId
);
router.post(
  "/update/:id",
  verifyToken,
  IndexController.AlquranSantriController.update
);
router.post(
  "/delete/:id",
  verifyToken,
  IndexController.AlquranSantriController.delete
);

export default router;
