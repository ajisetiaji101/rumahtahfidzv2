import { Router } from "express";
import IndexController from "../controller/IndexController.js";

const router = Router();

router.post("/insert", IndexController.IqroGuruController.insert);
router.get("/getlistawal/", IndexController.IqroGuruController.getListIqroAwal);
// router.get(
//   "/getcountiqrosantri/",
//   IndexController.IqroGuruController.countIqroSantri
// );
router.get(
  "/getlisthafalan/:id",
  IndexController.IqroGuruController.getListHafalanIqro
);
router.get("/getid/:id", IndexController.IqroGuruController.getHafalanId);
router.post("/delete/:id", IndexController.IqroGuruController.delete);
router.post("/update/:id", IndexController.IqroGuruController.update);

export default router;
