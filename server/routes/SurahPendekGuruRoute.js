import { Router } from "express";
import IndexController from "../controller/IndexController.js";

const router = Router();

router.post("/insert", IndexController.SurahPendekGuruController.insert);
router.get(
  "/getcountsurahpendeksantri/",
  IndexController.SurahPendekGuruController.countSurahPendekGuru
);

router.get(
  "/getlistawal/",
  IndexController.SurahPendekGuruController.getListSurahPendekAwal
);

router.get(
  "/getlisthafalan/:id",
  IndexController.SurahPendekGuruController.getListHafalanSurahPendek
);
router.post("/update/:id", IndexController.SurahPendekGuruController.update);
router.post("/delete/:id", IndexController.SurahPendekGuruController.delete);
router.get(
  "/getid/:id",
  IndexController.SurahPendekGuruController.getHafalanId
);

export default router;
