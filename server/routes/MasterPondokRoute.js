import { Router } from "express";
import IndexController from "../controller/IndexController.js";
import { uploadMultipleFile } from "../helpers/uploadFile.js";
import verifyToken from "../middleware/verifyToken.js";
import authRole from "../middleware/authRole.js";

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
  authRole(["8b273d68-fe09-422d-a660-af3d8312f883"]),
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
  "/updatetotaladmin/:id",
  verifyToken,
  IndexController.MasterPondokController.updateMasterpondokTotalAdmin
);
router.post(
  "/delete/:id",
  verifyToken,
  IndexController.MasterPondokController.deleteMasterpondok
);

export default router;
