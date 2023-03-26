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
router.get("/getcountmasterpondok", _IndexController.default.MasterPondokController.countMasterPondok);
router.get("/getbysumsantri", _IndexController.default.MasterPondokController.getAllMasterPondokDashboard);
router.get("/getall", _IndexController.default.MasterPondokController.getAllMasterPondok);
router.get("/getbyid/", _IndexController.default.MasterPondokController.getMasterPondokById);
router.post("/insert", _uploadFile.uploadMultipleFile, _IndexController.default.MasterPondokController.insertMasterpondok);
router.post("/update/:id", _uploadFile.uploadMultipleFile, _IndexController.default.MasterPondokController.updateMasterpondok);
router.post("/updatenofile/:id", _IndexController.default.MasterPondokController.updateMasterpondokNoFile);
router.post("/delete/:id", _IndexController.default.MasterPondokController.deleteMasterpondok);
var _default = router;
exports.default = _default;
//# sourceMappingURL=MasterPondokRoute.js.map