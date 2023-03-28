import { Router } from "express";
import IndexController from "../controller/IndexController.js";
import { uploadMultipleFile } from "../helpers/uploadFile.js";
import verifyToken from "../middleware/verifyToken.js";

const router = Router();
router.get("/getall", verifyToken, IndexController.SantriController.getAll);
router.get("/getcountsantri/", IndexController.SantriController.countSantri);
router.post(
  "/insert",
  verifyToken,
  uploadMultipleFile,
  IndexController.SantriController.createSantri
);
router.get(
  "/getByPondokId/:id",
  verifyToken,
  IndexController.SantriController.getByPondokId
);
router.get(
  "/getByMasterPondokId/:id",
  verifyToken,
  IndexController.SantriController.getByMasterpondokId
);
router.get(
  "/getById/:id",
  verifyToken,
  IndexController.SantriController.getById
);
router.get(
  "/getByUserId/:id",
  verifyToken,
  IndexController.SantriController.getByUserId
);
router.get(
  "/getdropdownId/:id",
  verifyToken,
  IndexController.SantriController.getDropdownByPondokId
);
router.post(
  "/update/:id",
  verifyToken,
  uploadMultipleFile,
  IndexController.SantriController.updateSantri
);
router.post(
  "/updatenofile/:id",
  verifyToken,
  IndexController.SantriController.updateNoFileSantri
);
router.post(
  "/delete/:id",
  verifyToken,
  IndexController.SantriController.deleteSantri
);

export default router;
