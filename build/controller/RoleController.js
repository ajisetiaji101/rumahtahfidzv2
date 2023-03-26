"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.js"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _express = require("express");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const uuid = require("uuid");
class RoleController {}
exports.default = RoleController;
_defineProperty(RoleController, "getRoleUser", async (req, res) => {
  try {
    console.log("===================== GET ALL ROLE =======================");
    const respon = await _db.default.raw(`call role_getrole()`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}`);
    console.log("===================== END ALL ROLE =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
    console.log("===================== END ALL ROLE =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
//# sourceMappingURL=RoleController.js.map