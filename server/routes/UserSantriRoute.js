import { Router } from "express";
import IndexController from "../controller/IndexController.js";

const router = Router();

router.post("/create", IndexController.UserSantriController.create);
router.post("/delete", IndexController.UserSantriController.delete);
router.get("/byuserid/:id", IndexController.UserSantriController.getByUserId);
router.get(
  "/hafalaniqrosantri/:id",
  IndexController.UserSantriController.getByHafalanIqroId
);
router.get(
  "/hafalanalquransantri/:id",
  IndexController.UserSantriController.getByHafalanAlquranId
);
router.get(
  "/hafalansurahpendeksantri/:id",
  IndexController.UserSantriController.getByHafalanSurahPendekId
);

export default router;
