"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const parseJwt = value => {
  try {
    const authHeader = value.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};
var _default = parseJwt;
exports.default = _default;
//# sourceMappingURL=parseJwt.js.map