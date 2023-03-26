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
class SurahPendekGuruController {
  static async insert(req, res) {
    try {
      const {
        name,
        tgl_selesai,
        guruId,
        ket
      } = req.body;
      const payload = {
        name,
        tgl_selesai,
        guruId,
        ket
      };
      console.log(payload);
      const respon = await _db.default.raw(`call surahpendekguru_insert('${payload.name}','${payload.tgl_selesai}','${payload.guruId}', '${payload.ket}',@hasil )`).then(e => e[0][0][0]);
      const data = respon;
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call surahpendekguru_insert('${payload.name}','${payload.tgl_selesai}','${payload.guruId}', '${payload.ket}',@hasil )`);
      console.log("===================== INSERT SURAH PENDEK GURU =======================");
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
      console.log("===================== END INSERT SURAH PENDEK GURU  =======================");
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
        tgl_selesai,
        ket
      } = req.body;
      const payload = {
        id,
        name,
        tgl_selesai,
        ket
      };
      console.log(payload);
      const respon = await _db.default.raw(`call surahpendekguru_update('${payload.id}','${payload.name}','${payload.tgl_selesai}', '${payload.ket}',@hasil )`).then(e => e[0][0][0]);
      const data = respon;
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call surahpendekguru_update('${payload.id}','${payload.name}','${payload.tgl_selesai}', '${payload.ket}',@hasil )`);
      console.log("===================== UPDATE SURAH PENDEK GURU =======================");
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
      console.log("===================== END UPDATE SURAH PENDEK GURU  =======================");
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
      const respon = await _db.default.raw(`call surahpendekguru_delete('${payload.id}',@hasil )`).then(e => e[0][0][0]);
      const data = respon;
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call surahpendekguru_delete('${payload.id}',@hasil )`);
      console.log("===================== DELETE SURAH PENDEK GURU =======================");
      return res.status(200).json({
        data
      });
    } catch (error) {
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}  ERROR: ${error.message} `);
      console.log("===================== END DELETE SURAH PENDEK GURU  =======================");
      return res.status(404).json({
        data: "Harap diperiksa kembali"
      });
    }
  }
}
exports.default = SurahPendekGuruController;
_defineProperty(SurahPendekGuruController, "countSurahPendekGuru", async (req, res) => {
  try {
    console.log("===================== COUNT SURAHPENDEK GURU =======================");
    const {
      pondokId,
      masterpondokId
    } = req.query;
    const respon = await _db.default.raw(`call santri_counthafalan('SURAHPENDEK','${pondokId}','${masterpondokId}',@hasil)`).then(e => e[0][0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} `);
    console.log("===================== END COUNT SURAHPENDEK GURU =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message} `);
    console.log("===================== END COUNT SURAHPENDEK GURU =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(SurahPendekGuruController, "getListSurahPendekAwal", async (req, res) => {
  try {
    const {
      pondokId,
      masterpondokId
    } = req.query;
    console.log("===================== GET LIST SURAH PENDEK GURU AWAL =======================");
    const respon = await _db.default.raw(`call hafalan_getlistawal('SURAHPENDEKGURU','${pondokId}','${masterpondokId}','')`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}`);
    console.log("===================== END LIST SURAH PENDEK GURU AWAL =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
    console.log("===================== END LIST SURAH PENDEK GURU AWAL =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(SurahPendekGuruController, "getListHafalanSurahPendek", async (req, res) => {
  try {
    const {
      id
    } = req.params;
    console.log("===================== GET LIST SURAH PENDEK GURU =======================");
    const respon = await _db.default.raw(`call hafalan_getdetail('SURAHPENDEKGURU', '${id}')`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}`);
    console.log("===================== END LIST SURAH PENDEK GURU =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
    console.log("===================== END LIST SURAH PENDEK GURU =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(SurahPendekGuruController, "getHafalanId", async (req, res) => {
  try {
    const {
      id
    } = req.params;
    console.log("===================== GET SURAH PENDEK ID =======================");
    const respon = await _db.default.raw(`call surahpendekguru_getid('${id}')`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}`);
    console.log("===================== END SURAH PENDEK ID =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
    console.log("===================== END SURAH PENDEK ID =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
//# sourceMappingURL=SurahPendekGuruController.js.map