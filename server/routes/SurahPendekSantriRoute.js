import { Router } from "express";
import IndexController from "../controller/IndexController.js";
import verifyToken from "../middleware/verifyToken.js";

const router = Router();

router.post(
  "/insert",
  verifyToken,
  IndexController.SurahPendekSantriController.insert
);
router.get(
  "/getcountsurahpendeksantri/",
  IndexController.SurahPendekSantriController.countSurahPendekSantri
);

router.get(
  "/getlistawal/",
  verifyToken,
  IndexController.SurahPendekSantriController.getListSurahPendekAwal
);

router.get(
  "/getlisthafalan/:id",
  verifyToken,
  IndexController.SurahPendekSantriController.getListHafalanSurahPendek
);
router.post(
  "/update/:id",
  verifyToken,
  IndexController.SurahPendekSantriController.update
);
router.post(
  "/delete/:id",
  verifyToken,
  IndexController.SurahPendekSantriController.delete
);
router.get(
  "/getid/:id",
  verifyToken,
  IndexController.SurahPendekSantriController.getHafalanId
);

export default router;
