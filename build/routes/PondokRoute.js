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
router.get("/getall", _IndexController.default.PondokController.getListPondok);
router.get("/getcountpondok/", _IndexController.default.PondokController.countPondok);
router.get("/getlistpondokdashboard/", _IndexController.default.PondokController.getAllPondokDashboard);
router.get("/getlist/", _IndexController.default.PondokController.getListPondokMasterPondokId);
router.get("/getlistbyid/", _IndexController.default.PondokController.getListPondokById);
router.post("/insert", _uploadFile.uploadMultipleFile, _IndexController.default.PondokController.createPondok);
router.post("/update/:id", _uploadFile.uploadMultipleFile, _IndexController.default.PondokController.updatePondok);
router.post("/updatenofile/:id", _IndexController.default.PondokController.updatePondokNoFile);
router.post("/delete/:id", _IndexController.default.PondokController.deletePondok);
var _default = router;
exports.default = _default;
//# sourceMappingURL=PondokRoute.js.map