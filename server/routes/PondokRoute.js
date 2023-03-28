import { Router } from "express";
import IndexController from "../controller/IndexController.js";
import { uploadMultipleFile } from "../helpers/uploadFile.js";
import verifyToken from "../middleware/verifyToken.js";

const router = Router();

router.get(
  "/getall",
  verifyToken,
  IndexController.PondokController.getListPondok
);
router.get("/getcountpondok/", IndexController.PondokController.countPondok);
router.get(
  "/getlistpondokdashboard/",
  IndexController.PondokController.getAllPondokDashboard
);
router.get(
  "/getlist/",
  verifyToken,
  IndexController.PondokController.getListPondokMasterPondokId
);
router.get(
  "/getlistbyid/",
  verifyToken,
  IndexController.PondokController.getListPondokById
);
router.post(
  "/insert",
  verifyToken,
  uploadMultipleFile,
  IndexController.PondokController.createPondok
);

router.post(
  "/update/:id",
  verifyToken,
  uploadMultipleFile,
  IndexController.PondokController.updatePondok
);
router.post(
  "/updatenofile/:id",
  verifyToken,
  IndexController.PondokController.updatePondokNoFile
);

router.post(
  "/delete/:id",
  verifyToken,
  IndexController.PondokController.deletePondok
);

export default router;
