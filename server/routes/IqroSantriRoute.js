import { Router } from "express";
import IndexController from "../controller/IndexController.js";

const router = Router();

router.post("/insert", IndexController.IqroSantriController.insert);
router.get(
  "/getlistawal/",
  IndexController.IqroSantriController.getListIqroAwal
);
router.get(
  "/getcountiqrosantri/",
  IndexController.IqroSantriController.countIqroSantri
);
router.get(
  "/getlisthafalan/:id",
  IndexController.IqroSantriController.getListHafalanIqro
);
router.get("/getid/:id", IndexController.IqroSantriController.getHafalanId);
router.post("/delete/:id", IndexController.IqroSantriController.delete);
router.post("/update/:id", IndexController.IqroSantriController.update);

export default router;
