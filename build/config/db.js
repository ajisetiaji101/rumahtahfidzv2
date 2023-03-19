"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _knex = _interopRequireDefault(require("knex"));
var _knexfile = _interopRequireDefault(require("./knexfile.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const db = (0, _knex.default)(_knexfile.default.development);
var _default = db;
exports.default = _default;
//# sourceMappingURL=db.js.map