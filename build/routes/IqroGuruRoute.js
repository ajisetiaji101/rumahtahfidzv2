"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _IndexController = _interopRequireDefault(require("../controller/IndexController.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.post("/insert", _IndexController.default.IqroGuruController.insert);
router.get("/getlistawal/", _IndexController.default.IqroGuruController.getListIqroAwal);
// router.get(
//   "/getcountiqrosantri/",
//   IndexController.IqroGuruController.countIqroSantri
// );
router.get("/getlisthafalan/:id", _IndexController.default.IqroGuruController.getListHafalanIqro);
router.get("/getid/:id", _IndexController.default.IqroGuruController.getHafalanId);
router.post("/delete/:id", _IndexController.default.IqroGuruController.delete);
router.post("/update/:id", _IndexController.default.IqroGuruController.update);
var _default = router;
exports.default = _default;
//# sourceMappingURL=IqroGuruRoute.js.map