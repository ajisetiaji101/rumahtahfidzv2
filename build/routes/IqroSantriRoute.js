"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _IndexController = _interopRequireDefault(require("../controller/IndexController.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.post("/insert", _IndexController.default.IqroSantriController.insert);
router.get("/getlistawal/", _IndexController.default.IqroSantriController.getListIqroAwal);
router.get("/getcountiqrosantri/", _IndexController.default.IqroSantriController.countIqroSantri);
router.get("/getlisthafalan/:id", _IndexController.default.IqroSantriController.getListHafalanIqro);
router.get("/getid/:id", _IndexController.default.IqroSantriController.getHafalanId);
router.post("/delete/:id", _IndexController.default.IqroSantriController.delete);
router.post("/update/:id", _IndexController.default.IqroSantriController.update);
var _default = router;
exports.default = _default;
//# sourceMappingURL=IqroSantriRoute.js.map