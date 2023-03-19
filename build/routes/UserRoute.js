"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _IndexController = _interopRequireDefault(require("../controller/IndexController.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.post("/login", _IndexController.default.UserController.login);
router.get("/getall", _IndexController.default.UserController.getAllUser);
router.get("/menu/{:roleId}", _IndexController.default.UserController.login);
router.get("/:username", _IndexController.default.UserController.getUserById);
var _default = router;
exports.default = _default;
//# sourceMappingURL=UserRoute.js.map