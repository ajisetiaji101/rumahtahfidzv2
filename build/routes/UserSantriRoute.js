"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _IndexController = _interopRequireDefault(require("../controller/IndexController.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.post("/create", _IndexController.default.UserSantriController.create);
router.post("/delete", _IndexController.default.UserSantriController.delete);
router.get("/byuserid/:id", _IndexController.default.UserSantriController.getByUserId);
router.get("/hafalaniqrosantri/:id", _IndexController.default.UserSantriController.getByHafalanIqroId);
router.get("/hafalanalquransantri/:id", _IndexController.default.UserSantriController.getByHafalanAlquranId);
router.get("/hafalansurahpendeksantri/:id", _IndexController.default.UserSantriController.getByHafalanSurahPendekId);
var _default = router;
exports.default = _default;
//# sourceMappingURL=UserSantriRoute.js.map