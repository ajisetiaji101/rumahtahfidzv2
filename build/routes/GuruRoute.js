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
router.get("/getall", _IndexController.default.GuruController.getAll);
router.post("/insert", _uploadFile.uploadMultipleFile, _IndexController.default.GuruController.createGuru);
router.get("/getcountguru/", _IndexController.default.GuruController.countGuru);
router.get("/getByPondokId/:id", _IndexController.default.GuruController.getByPondokId);
router.get("/getByMasterPondokId/:id", _IndexController.default.GuruController.getByMasterpondokId);
router.get("/getById/:id", _IndexController.default.GuruController.getById);
router.post("/update/:id", _uploadFile.uploadMultipleFile, _IndexController.default.GuruController.updateGuru);
router.post("/updatenofile/:id", _IndexController.default.GuruController.updateNoFileGuru);
router.post("/delete/:id", _IndexController.default.GuruController.deleteGuru);
var _default = router;
exports.default = _default;
//# sourceMappingURL=GuruRoute.js.map