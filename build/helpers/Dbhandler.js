"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function Dbhandler(fungsi, obj) {
  await _db.default.raw(fungsi, obj).then(e => e[0][0]).catch(err => err);
}
var _default = Dbhandler;
exports.default = _default;
//# sourceMappingURL=Dbhandler.js.map