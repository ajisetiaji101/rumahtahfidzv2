import { Router } from "express";
import IndexController from "../controller/IndexController.js";
import { uploadMultipleFile } from "../helpers/uploadFile.js";

const router = Router();

router.get(
  "/getcountmasterpondok",
  IndexController.MasterPondokController.countMasterPondok
);
router.get(
  "/getbysumsantri",
  IndexController.MasterPondokController.getAllMasterPondokDashboard
);
router.get(
  "/getall",
  IndexController.MasterPondokController.getAllMasterPondok
);
router.get(
  "/getbyid/",
  IndexController.MasterPondokController.getMasterPondokById
);
router.post(
  "/insert",
  uploadMultipleFile,
  IndexController.MasterPondokController.insertMasterpondok
);
router.post(
  "/update/:id",
  uploadMultipleFile,
  IndexController.MasterPondokController.updateMasterpondok
);
router.post(
  "/updatenofile/:id",
  IndexController.MasterPondokController.updateMasterpondokNoFile
);
router.post(
  "/delete/:id",
  IndexController.MasterPondokController.deleteMasterpondok
);

export default router;
