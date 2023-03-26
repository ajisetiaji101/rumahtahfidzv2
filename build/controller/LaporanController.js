"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const uuid = require("uuid");
class LaporanController {}
exports.default = LaporanController;
_defineProperty(LaporanController, "getHafalanSantri", async (req, res) => {
  try {
    console.log("===================== GET HAFALAN =======================");
    const {
      userId,
      pondokId,
      masterpondokId
    } = req.query;
    const respon = await _db.default.raw(`call report_hafalan_santri_getall('${userId}','${pondokId}','${masterpondokId}')`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} `);
    console.log("===================== END GET HAFALAN IQRO SANTRI =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}  ERROR: ${error.message} `);
    console.log("===================== END GET HAFALAN IQRO SANTRI =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(LaporanController, "getHafalanGuru", async (req, res) => {
  try {
    console.log("===================== GET HAFALAN =======================");
    const {
      pondokId,
      masterpondokId
    } = req.query;
    const respon = await _db.default.raw(`call report_hafalan_guru_getall('${pondokId}','${masterpondokId}')`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} `);
    console.log("===================== END GET HAFALAN GURU =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}  ERROR: ${error.message} `);
    console.log("===================== END GET HAFALAN GURU =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
//# sourceMappingURL=LaporanController.js.map