"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _IndexController = _interopRequireDefault(require("../controller/IndexController.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.post("/insert", _IndexController.default.AlquranSantriController.insert);
router.get("/getcountalquransantri/", _IndexController.default.AlquranSantriController.countAlquranSantri);
router.get("/getlistawal/", _IndexController.default.AlquranSantriController.getListAlquranAwal);
router.get("/getlisthafalan/:id", _IndexController.default.AlquranSantriController.getListHafalanAlquran);
router.get("/getid/:id", _IndexController.default.AlquranSantriController.getHafalanId);
router.post("/update/:id", _IndexController.default.AlquranSantriController.update);
router.post("/delete/:id", _IndexController.default.AlquranSantriController.delete);
var _default = router;
exports.default = _default;
//# sourceMappingURL=AlquranSantriRoute.js.map