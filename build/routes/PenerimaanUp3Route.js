"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _IndexController = _interopRequireDefault(require("../controller/IndexController.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.get("/penerimaanup3bydo/:no_do", _IndexController.default.PenerimaanUP3Controller.getPenerimaanUP3sn);
var _default = router;
exports.default = _default;
//# sourceMappingURL=PenerimaanUp3Route.js.map