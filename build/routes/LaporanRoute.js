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
router.get("/laporansantri/", _IndexController.default.LaporanController.getHafalanSantri);
router.get("/laporanguru/", _IndexController.default.LaporanController.getHafalanGuru);
var _default = router;
exports.default = _default;
//# sourceMappingURL=LaporanRoute.js.map