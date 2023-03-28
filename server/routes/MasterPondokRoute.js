import { Router } from "express";
import IndexController from "../controller/IndexController.js";
import { uploadMultipleFile } from "../helpers/uploadFile.js";
import verifyToken from "../middleware/verifyToken.js";

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
  verifyToken,
  IndexController.MasterPondokController.getAllMasterPondok
);
router.get(
  "/getbyid/",
  verifyToken,
  IndexController.MasterPondokController.getMasterPondokById
);
router.post(
  "/insert",
  verifyToken,
  uploadMultipleFile,
  IndexController.MasterPondokController.insertMasterpondok
);
router.post(
  "/update/:id",
  verifyToken,
  uploadMultipleFile,
  IndexController.MasterPondokController.updateMasterpondok
);
router.post(
  "/updatenofile/:id",
  verifyToken,
  IndexController.MasterPondokController.updateMasterpondokNoFile
);
router.post(
  "/delete/:id",
  verifyToken,
  IndexController.MasterPondokController.deleteMasterpondok
);

export default router;
