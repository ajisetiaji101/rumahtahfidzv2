"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _IndexController = _interopRequireDefault(require("../controller/IndexController.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.get("/getalldeliveryorder", _IndexController.default.DeliveryOrderController.getDeliveryOrderDetailByUser);
router.get("/getalldeliveryorderpackaging/:no_do", _IndexController.default.DeliveryOrderController.getDeliveryOrderDetailByDo);
router.get("/getalldeliveryorderpackagingsn/:no_packaging", _IndexController.default.DeliveryOrderController.getDeliveryOrderDetailBypackaging);
var _default = router;
exports.default = _default;
//# sourceMappingURL=DeliveryOrderRoute.js.map