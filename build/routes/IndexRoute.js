"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _PabrikanRoute = _interopRequireDefault(require("./PabrikanRoute.js"));
var _PurchaseOrderRoute = _interopRequireDefault(require("./PurchaseOrderRoute.js"));
var _DeliveryOrderRoute = _interopRequireDefault(require("./DeliveryOrderRoute.js"));
var _PenerimaanUp3Route = _interopRequireDefault(require("./PenerimaanUp3Route.js"));
var _UserRoute = _interopRequireDefault(require("./UserRoute.js"));
var _express = require("express");
var _config = _interopRequireDefault(require("../config/config.js"));
var _verifyToken = _interopRequireDefault(require("../middleware/verifyToken.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.use(_config.default.URL_API + "/pabrikan", _verifyToken.default, _PabrikanRoute.default);
router.use(_config.default.URL_API + "/deliveryorder", _verifyToken.default, _DeliveryOrderRoute.default);
router.use(_config.default.URL_API + "/purchaseorder", _verifyToken.default, _PurchaseOrderRoute.default);
router.use(_config.default.URL_API + "/penerimaanup3", _verifyToken.default, _PenerimaanUp3Route.default);
router.use(_config.default.URL_API + "/user", _UserRoute.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=IndexRoute.js.map