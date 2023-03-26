"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _IndexController = _interopRequireDefault(require("../controller/IndexController.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.post("/insert", _IndexController.default.AlquranGuruController.insert);
router.get("/getcountalquransantri/", _IndexController.default.AlquranGuruController.countAlquranSantri);
router.get("/getlistawal/", _IndexController.default.AlquranGuruController.getListAlquranAwal);
router.get("/getlisthafalan/:id", _IndexController.default.AlquranGuruController.getListHafalanAlquran);
router.get("/getid/:id", _IndexController.default.AlquranGuruController.getHafalanId);
router.post("/update/:id", _IndexController.default.AlquranGuruController.update);
router.post("/delete/:id", _IndexController.default.AlquranGuruController.delete);
var _default = router;
exports.default = _default;
//# sourceMappingURL=AlquranGuruRoute.js.map