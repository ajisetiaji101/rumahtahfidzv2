import { Router } from "express";
import IndexController from "../controller/IndexController.js";
import { uploadMultipleFileUser } from "../helpers/uploadFileUser.js";
import verifyToken from "../middleware/verifyToken.js";
import authRole from "../middleware/authRole.js";

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
router.post(
  "/createadminfile",
  verifyToken,
  uploadMultipleFileUser,
  IndexController.UserController.createAdminFile
);
router.post(
  "/createadminnofile",
  verifyToken,
  IndexController.UserController.createNoFileAdmin
);
router.get(
  "/getadmin",
  verifyToken,
  authRole(["8b273d68-fe09-422d-a660-af3d8312f883"]),
  IndexController.UserController.getUserAdmin
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
  "/updateadminnofile/:id",
  verifyToken,
  IndexController.UserController.updateAdminNoFile
);
router.post(
  "/updateadmin/:id",
  verifyToken,
  uploadMultipleFileUser,
  IndexController.UserController.updateAdmin
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
router.get(
  "/getadminbyid/:id",
  verifyToken,
  IndexController.UserController.getAdminById
);

export default router;
