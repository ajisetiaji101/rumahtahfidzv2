import { Router } from "express";
import IndexController from "../controller/IndexController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = Router();

router.post(
  "/insert",
  verifyToken,
  IndexController.IqroSantriController.insert
);
router.get(
  "/getlistawal/",
  verifyToken,
  IndexController.IqroSantriController.getListIqroAwal
);
router.get(
  "/getcountiqrosantri/",
  IndexController.IqroSantriController.countIqroSantri
);
router.get(
  "/getlisthafalan/:id",
  verifyToken,
  IndexController.IqroSantriController.getListHafalanIqro
);
router.get(
  "/getid/:id",
  verifyToken,
  IndexController.IqroSantriController.getHafalanId
);
router.post(
  "/delete/:id",
  verifyToken,
  IndexController.IqroSantriController.delete
);
router.post(
  "/update/:id",
  verifyToken,
  IndexController.IqroSantriController.update
);

export default router;
