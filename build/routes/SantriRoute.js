"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _IndexController = _interopRequireDefault(require("../controller/IndexController.js"));
var _uploadFile = require("../helpers/uploadFile.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.get("/getall", _IndexController.default.SantriController.getAll);
router.get("/getcountsantri/", _IndexController.default.SantriController.countSantri);
router.post("/insert", _uploadFile.uploadMultipleFile, _IndexController.default.SantriController.createSantri);
router.get("/getByPondokId/:id", _IndexController.default.SantriController.getByPondokId);
router.get("/getByMasterPondokId/:id", _IndexController.default.SantriController.getByMasterpondokId);
router.get("/getById/:id", _IndexController.default.SantriController.getById);
router.get("/getByUserId/:id", _IndexController.default.SantriController.getByUserId);
router.get("/getdropdownId/:id", _IndexController.default.SantriController.getDropdownByPondokId);
router.post("/update/:id", _uploadFile.uploadMultipleFile, _IndexController.default.SantriController.updateSantri);
router.post("/updatenofile/:id", _IndexController.default.SantriController.updateNoFileSantri);
router.post("/delete/:id", _IndexController.default.SantriController.deleteSantri);
var _default = router;
exports.default = _default;
//# sourceMappingURL=SantriRoute.js.map