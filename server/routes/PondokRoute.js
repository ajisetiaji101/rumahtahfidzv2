import { Router } from "express";
import IndexController from "../controller/IndexController.js";
import { uploadMultipleFile } from "../helpers/uploadFile.js";

const router = Router();

router.get("/getall", IndexController.PondokController.getListPondok);
router.get("/getcountpondok/", IndexController.PondokController.countPondok);
router.get(
  "/getlistpondokdashboard/",
  IndexController.PondokController.getAllPondokDashboard
);
router.get(
  "/getlist/",
  IndexController.PondokController.getListPondokMasterPondokId
);
router.get("/getlistbyid/", IndexController.PondokController.getListPondokById);
router.post(
  "/insert",
  uploadMultipleFile,
  IndexController.PondokController.createPondok
);

router.post(
  "/update/:id",
  uploadMultipleFile,
  IndexController.PondokController.updatePondok
);
router.post(
  "/updatenofile/:id",
  IndexController.PondokController.updatePondokNoFile
);

router.post("/delete/:id", IndexController.PondokController.deletePondok);

export default router;
