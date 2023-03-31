import { Router } from "express";
import IndexController from "../controller/IndexController.js";
import { uploadMultipleFileUser } from "../helpers/uploadFileUser.js";
import verifyToken from "../middleware/verifyToken.js";

const router = Router();

router.post("/login", IndexController.UserController.login);
router.post(
  "/createuser",
  verifyToken,
  IndexController.UserController.createNoFileUser
);
router.post(
  "/createusersantri",
  verifyToken,
  uploadMultipleFileUser,
  IndexController.UserController.createUserSantri
);
router.post(
  "/createusersantrinofile",
  verifyToken,
  IndexController.UserController.createNoFileUserSantri
);
router.get(
  "/byrole/masterandadmin",
  verifyToken,
  IndexController.UserController.getUserByRoleMaterAdmin
);
router.get("/getall", verifyToken, IndexController.UserController.getAllUser);
router.post(
  "/createuserfile",
  verifyToken,
  uploadMultipleFileUser,
  IndexController.UserController.createUser
);
router.post(
  "/updatenofile/:id",
  verifyToken,
  IndexController.UserController.updateNoFileUser
);
router.post(
  "/update/:id",
  verifyToken,
  uploadMultipleFileUser,
  IndexController.UserController.updateUser
);
router.post(
  "/delete/:id",
  verifyToken,
  IndexController.UserController.deleteUser
);
router.get(
  "/byrole/:id",
  verifyToken,
  IndexController.UserController.getUserByRoleId
);
router.get(
  "/bypondok/:id",
  verifyToken,
  IndexController.UserController.getUserByRumahTahfidz
);
router.get(
  "/bymasterpondok/:id",
  verifyToken,
  IndexController.UserController.getUserByMasterTahfidz
);
router.post(
  "/updateusersantri/:id",
  verifyToken,
  IndexController.UserController.updateUserSantri
);
router.get("/:id", verifyToken, IndexController.UserController.getUserById);

export default router;
