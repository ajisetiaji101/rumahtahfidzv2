"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _IndexController = _interopRequireDefault(require("../controller/IndexController.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.post("/insert", _IndexController.default.SurahPendekGuruController.insert);
router.get("/getcountsurahpendeksantri/", _IndexController.default.SurahPendekGuruController.countSurahPendekGuru);
router.get("/getlistawal/", _IndexController.default.SurahPendekGuruController.getListSurahPendekAwal);
router.get("/getlisthafalan/:id", _IndexController.default.SurahPendekGuruController.getListHafalanSurahPendek);
router.post("/update/:id", _IndexController.default.SurahPendekGuruController.update);
router.post("/delete/:id", _IndexController.default.SurahPendekGuruController.delete);
router.get("/getid/:id", _IndexController.default.SurahPendekGuruController.getHafalanId);
var _default = router;
exports.default = _default;
//# sourceMappingURL=SurahPendekGuruRoute.js.map