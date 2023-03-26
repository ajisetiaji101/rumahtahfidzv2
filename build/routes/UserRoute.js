"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _IndexController = _interopRequireDefault(require("../controller/IndexController.js"));
var _uploadFileUser = require("../helpers/uploadFileUser.js");
var _verifyToken = _interopRequireDefault(require("../middleware/verifyToken.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.post("/login", _IndexController.default.UserController.login);
router.post("/createuser", _verifyToken.default, _IndexController.default.UserController.createNoFileUser);
router.post("/createusersantri", _verifyToken.default, _uploadFileUser.uploadMultipleFileUser, _IndexController.default.UserController.createUserSantri);
router.post("/createusersantrinofile", _verifyToken.default, _IndexController.default.UserController.createNoFileUserSantri);
router.get("/getall", _verifyToken.default, _IndexController.default.UserController.getAllUser);
router.post("/createuserfile", _verifyToken.default, _uploadFileUser.uploadMultipleFileUser, _IndexController.default.UserController.createUser);
router.post("/updatenofile/:id", _verifyToken.default, _IndexController.default.UserController.updateNoFileUser);
router.post("/update/:id", _verifyToken.default, _uploadFileUser.uploadMultipleFileUser, _IndexController.default.UserController.updateUser);
router.post("/delete/:id", _verifyToken.default, _IndexController.default.UserController.deleteUser);
router.get("/byrole/:id", _verifyToken.default, _IndexController.default.UserController.getUserByRoleId);
router.get("/bypondok/:id", _verifyToken.default, _IndexController.default.UserController.getUserByRumahTahfidz);
router.get("/bymasterpondok/:id", _verifyToken.default, _IndexController.default.UserController.getUserByMasterTahfidz);
router.post("/updateusersantri/:id", _verifyToken.default, _IndexController.default.UserController.updateUserSantri);
router.get("/:id", _verifyToken.default, _IndexController.default.UserController.getUserById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=UserRoute.js.map