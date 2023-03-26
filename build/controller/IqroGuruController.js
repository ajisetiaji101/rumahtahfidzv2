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
class IqroGuruController {
  static async insert(req, res) {
    try {
      const {
        name,
        halaman,
        tgl_selesai,
        ket,
        guruId
      } = req.body;
      const payload = {
        name,
        halaman,
        tgl_selesai,
        guruId,
        ket
      };
      console.log(payload);
      const respon = await _db.default.raw(`call iqroguru_insert('${payload.name}','${payload.halaman}','${payload.tgl_selesai}','${payload.ket}', '${payload.guruId}',@hasil )`).then(e => e[0][0][0]);
      const data = respon;
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} `);
      console.log("===================== INSERT IQRO GURU =======================");
      if (data.hasil !== "success") {
        return res.status(500).json({
          data: data.hasil
        });
      }
      return res.status(200).json({
        data
      });
    } catch (error) {
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}  ERROR: ${error.message} `);
      console.log("===================== END INSERT IQRO GURU  =======================");
      return res.status(404).json({
        data: "Harap diperiksa kembali"
      });
    }
  }
  static async update(req, res) {
    try {
      const {
        id
      } = req.params;
      const {
        name,
        halaman,
        tgl_selesai,
        ket
      } = req.body;
      const payload = {
        id,
        name,
        halaman,
        tgl_selesai,
        ket
      };
      console.log(payload);
      const respon = await _db.default.raw(`call iqroguru_update('${payload.id}','${payload.name}','${payload.halaman}','${payload.tgl_selesai}', '${payload.ket}',@hasil )`).then(e => e[0][0][0]);
      const data = respon;
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call iqroguru_update('${payload.id}','${payload.name}','${payload.halaman}','${payload.tgl_selesai}', '${payload.ket}',@hasil )`);
      console.log("===================== UPDATE IQRO GURU =======================");
      if (data.hasil !== "success") {
        return res.status(500).json({
          data: data.hasil
        });
      }
      return res.status(200).json({
        data
      });
    } catch (error) {
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}  ERROR: ${error.message} `);
      console.log("===================== END UPDATE IQRO GURU  =======================");
      return res.status(404).json({
        data: "Harap diperiksa kembali"
      });
    }
  }
  static async delete(req, res) {
    try {
      const {
        id
      } = req.params;
      const payload = {
        id
      };
      console.log(payload);
      const respon = await _db.default.raw(`call iqroguru_delete('${payload.id}',@hasil )`).then(e => e[0][0][0]);
      const data = respon;
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call iqrosantri_delete('${payload.id}',@hasil )`);
      console.log("===================== DELETE IQRO GURU =======================");
      return res.status(200).json({
        data
      });
    } catch (error) {
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}  ERROR: ${error.message} `);
      console.log("===================== END DELETE IQRO GURU  =======================");
      return res.status(404).json({
        data: "Harap diperiksa kembali"
      });
    }
  }
}
exports.default = IqroGuruController;
_defineProperty(IqroGuruController, "countIqroGuru", async (req, res) => {
  try {
    console.log("===================== COUNT IQRO GURU =======================");
    const {
      pondokId,
      masterpondokId
    } = req.query;
    const respon = await _db.default.raw(`call guru_counthafalan('IQRO','${pondokId}','${masterpondokId}',@hasil)`).then(e => e[0][0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} `);
    console.log("===================== END COUNT IQRO GURU =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message} `);
    console.log("===================== END COUNT IQRO GURU =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(IqroGuruController, "getListIqroAwal", async (req, res) => {
  try {
    const {
      pondokId,
      masterpondokId
    } = req.query;
    console.log("===================== GET LIST IQRO GURU AWAL =======================");
    const respon = await _db.default.raw(`call hafalan_getlistawal('IQROGURU','${pondokId}','${masterpondokId}','')`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}`);
    console.log("===================== END LIST IQRO GURU AWAL =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
    console.log("===================== END LIST IQRO GURU AWAL =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(IqroGuruController, "getListHafalanIqro", async (req, res) => {
  try {
    const {
      id
    } = req.params;
    console.log("===================== GET LIST IQRO GURU =======================");
    const respon = await _db.default.raw(`call hafalan_getdetail('IQROGURU', '${id}')`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}`);
    console.log("===================== END LIST IQRO GURU =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
    console.log("===================== END LIST IQRO GURU =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(IqroGuruController, "getHafalanId", async (req, res) => {
  try {
    const {
      id
    } = req.params;
    console.log("===================== GET IQRO ID =======================");
    const respon = await _db.default.raw(`call iqroguru_getid('${id}')`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}`);
    console.log("===================== END IQRO ID =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
    console.log("===================== END IQRO ID =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
//# sourceMappingURL=IqroGuruController.js.map