import { Router } from "express";
import IndexController from "../controller/IndexController.js";
import { uploadMultipleFileUser } from "../helpers/uploadFileUser.js";

const router = Router();

router.post("/login", IndexController.UserController.login);
router.post("/createuser", IndexController.UserController.createNoFileUser);
router.post(
  "/createusersantri",
  uploadMultipleFileUser,
  IndexController.UserController.createUserSantri
);
router.post(
  "/createusersantrinofile",
  IndexController.UserController.createNoFileUserSantri
);
router.get("/getall", IndexController.UserController.getAllUser);
router.post(
  "/createuserfile",
  uploadMultipleFileUser,
  IndexController.UserController.createUser
);
router.post(
  "/updatenofile/:id",
  IndexController.UserController.updateNoFileUser
);
router.post(
  "/update/:id",
  uploadMultipleFileUser,
  IndexController.UserController.updateUser
);
router.post("/delete/:id", IndexController.UserController.deleteUser);
router.get("/byrole/:id", IndexController.UserController.getUserByRoleId);
router.get(
  "/bypondok/:id",
  IndexController.UserController.getUserByRumahTahfidz
);
router.get(
  "/bymasterpondok/:id",
  IndexController.UserController.getUserByMasterTahfidz
);
router.post(
  "/updateusersantri/:id",
  IndexController.UserController.updateUserSantri
);
router.get("/:id", IndexController.UserController.getUserById);

export default router;
