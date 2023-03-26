"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _UserRoute = _interopRequireDefault(require("./UserRoute.js"));
var _UserSantriRoute = _interopRequireDefault(require("./UserSantriRoute"));
var _SantriRoute = _interopRequireDefault(require("./SantriRoute.js"));
var _GuruRoute = _interopRequireDefault(require("./GuruRoute.js"));
var _IqroSantriRoute = _interopRequireDefault(require("./IqroSantriRoute.js"));
var _SurahPendekSantriRoute = _interopRequireDefault(require("./SurahPendekSantriRoute"));
var _AlquranSantriRoute = _interopRequireDefault(require("./AlquranSantriRoute"));
var _IqroGuruRoute = _interopRequireDefault(require("./IqroGuruRoute"));
var _SurahPendekGuruRoute = _interopRequireDefault(require("./SurahPendekGuruRoute"));
var _AlquranGuruRoute = _interopRequireDefault(require("./AlquranGuruRoute"));
var _MasterPondokRoute = _interopRequireDefault(require("./MasterPondokRoute"));
var _PondokRoute = _interopRequireDefault(require("./PondokRoute"));
var _RoleRoute = _interopRequireDefault(require("./RoleRoute"));
var _ImageRoute = _interopRequireDefault(require("./ImageRoute"));
var _LaporanRoute = _interopRequireDefault(require("./LaporanRoute.js"));
var _express = require("express");
var _config = _interopRequireDefault(require("../config/config.js"));
var _verifyToken = _interopRequireDefault(require("../middleware/verifyToken.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.use(_config.default.URL_API + "/laporan", _verifyToken.default, _LaporanRoute.default);
router.use(_config.default.URL_API + "/role", _verifyToken.default, _RoleRoute.default);
router.use(_config.default.URL_API + "/pondok", _verifyToken.default, _PondokRoute.default);
router.use(_config.default.URL_API + "/masterpondok", _verifyToken.default, _MasterPondokRoute.default);
router.use(_config.default.URL_API + "/alquransantri", _verifyToken.default, _AlquranSantriRoute.default);
router.use(_config.default.URL_API + "/surahpendeksantri", _verifyToken.default, _SurahPendekSantriRoute.default);
router.use(_config.default.URL_API + "/iqrosantri", _verifyToken.default, _IqroSantriRoute.default);
router.use(_config.default.URL_API + "/iqroguru", _verifyToken.default, _IqroGuruRoute.default);
router.use(_config.default.URL_API + "/surahpendekguru", _verifyToken.default, _SurahPendekGuruRoute.default);
router.use(_config.default.URL_API + "/alquranguru", _verifyToken.default, _AlquranGuruRoute.default);
router.use(_config.default.URL_API + "/guru", _verifyToken.default, _GuruRoute.default);
router.use(_config.default.URL_API + "/santri", _verifyToken.default, _SantriRoute.default);
router.use(_config.default.URL_API + "/user", _UserRoute.default);
router.use(_config.default.URL_API + "/usersantri", _verifyToken.default, _UserSantriRoute.default);
router.use(_config.default.URL_API + "/gambar", _ImageRoute.default);
var _default = router;
exports.default = _default;
//# sourceMappingURL=IndexRoute.js.map