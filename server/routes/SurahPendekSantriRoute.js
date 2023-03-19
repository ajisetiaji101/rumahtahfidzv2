import { Router } from "express";
import IndexController from "../controller/IndexController.js";

const router = Router();

router.post("/insert", IndexController.SurahPendekSantriController.insert);
router.get(
  "/getcountsurahpendeksantri/",
  IndexController.SurahPendekSantriController.countSurahPendekSantri
);

router.get(
  "/getlistawal/",
  IndexController.SurahPendekSantriController.getListSurahPendekAwal
);

router.get(
  "/getlisthafalan/:id",
  IndexController.SurahPendekSantriController.getListHafalanSurahPendek
);
router.post("/update/:id", IndexController.SurahPendekSantriController.update);
router.post("/delete/:id", IndexController.SurahPendekSantriController.delete);
router.get(
  "/getid/:id",
  IndexController.SurahPendekSantriController.getHafalanId
);

export default router;
