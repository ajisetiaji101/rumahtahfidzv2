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
class AlquranGuruController {
  // =========================================================================================

  //   ============================================================================================

  //   ============================================================================================

  static async insert(req, res) {
    try {
      const {
        juz,
        surah,
        ayat,
        tgl_selesai,
        guruId,
        halaman,
        ket
      } = req.body;
      const payload = {
        juz,
        surah,
        ayat,
        halaman,
        tgl_selesai,
        ket,
        guruId
      };
      console.log(payload);
      const respon = await _db.default.raw(`call alquranguru_insert('${payload.juz}','${payload.surah}','${payload.ayat}','${payload.halaman}','${payload.tgl_selesai}', '${payload.ket}','${payload.guruId}',@hasil )`).then(e => e[0][0][0]);
      const data = respon;
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call alquranguru_insert('${payload.juz}','${payload.surah}','${payload.ayat}','${payload.halaman}','${payload.tgl_selesai}', '${payload.ket}','${payload.guruId}',@hasil )`);
      console.log("===================== INSERT ALQURAN GURU =======================");
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
      console.log("===================== END INSERT ALQURAN GURU  =======================");
      return res.status(404).json({
        data: "Harap diperiksa kembali"
      });
    }
  }

  //   ============================================================================================

  static async update(req, res) {
    try {
      const {
        id
      } = req.params;
      const {
        juz,
        surah,
        ayat,
        tgl_selesai,
        ket,
        halaman
      } = req.body;
      const payload = {
        id,
        juz,
        surah,
        ayat,
        halaman,
        tgl_selesai,
        ket
      };
      console.log(payload);
      const respon = await _db.default.raw(`call alquranguru_update('${payload.id}','${payload.juz}','${payload.surah}','${payload.ayat}','${payload.halaman}','${payload.tgl_selesai}', '${payload.ket}',@hasil )`).then(e => e[0][0][0]);
      const data = respon;
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call alquranguru_update('${payload.id}','${payload.juz}','${payload.surah}','${payload.ayat}','${payload.halaman}','${payload.tgl_selesai}', '${payload.ket}',@hasil )`);
      console.log("===================== UPDATE ALQURAN GURU =======================");
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
      console.log("===================== END UPDATE ALQURAN GURU  =======================");
      return res.status(404).json({
        data: "Harap diperiksa kembali"
      });
    }
  }

  //   ============================================================================================

  static async delete(req, res) {
    try {
      const {
        id
      } = req.params;
      const payload = {
        id
      };
      console.log(payload);
      const respon = await _db.default.raw(`call alquranguru_delete('${payload.id}',@hasil )`).then(e => e[0][0][0]);
      const data = respon;
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call alquranguru_delete('${payload.id}',@hasil )`);
      console.log("===================== DELETE ALQURAN GURU =======================");
      return res.status(200).json({
        data
      });
    } catch (error) {
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}  ERROR: ${error.message} `);
      console.log("===================== END DELETE ALQURAN GURU  =======================");
      return res.status(404).json({
        data: "Harap diperiksa kembali"
      });
    }
  }

  //   ============================================================================================

  //   ============================================================================================
}
exports.default = AlquranGuruController;
_defineProperty(AlquranGuruController, "countAlquranSantri", async (req, res) => {
  try {
    console.log("===================== COUNT ALQURAN GURU =======================");
    const {
      pondokId,
      masterpondokId
    } = req.query;
    const respon = await _db.default.raw(`call guru_counthafalan('ALQURANGURU','${pondokId}','${masterpondokId}',@hasil)`).then(e => e[0][0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} `);
    console.log("===================== END COUNT ALQURAN GURU =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message} `);
    console.log("===================== END COUNT ALQURAN GURU =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(AlquranGuruController, "getListAlquranAwal", async (req, res) => {
  try {
    const {
      pondokId,
      masterpondokId
    } = req.query;
    console.log("===================== GET LIST AL QURAN GURU AWAL =======================");
    const respon = await _db.default.raw(`call hafalan_getlistawal('ALQURANGURU','${pondokId}','${masterpondokId}','')`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}`);
    console.log("===================== END LIST AL QURAN GURU AWAL =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
    console.log("===================== END LIST AL QURAN GURU AWAL =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(AlquranGuruController, "getListHafalanAlquran", async (req, res) => {
  try {
    const {
      id
    } = req.params;
    console.log("===================== GET ALQURAN GURU =======================");
    const respon = await _db.default.raw(`call hafalan_getdetail('ALQURANGURU', '${id}')`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}`);
    console.log("===================== END ALQURAN GURU =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
    console.log("===================== END ALQURAN GURU =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(AlquranGuruController, "getHafalanId", async (req, res) => {
  try {
    const {
      id
    } = req.params;
    console.log("===================== GET ALQURAN ID =======================");
    const respon = await _db.default.raw(`call alquranguru_getid('${id}')`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}`);
    console.log("===================== END ALQURAN ID =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
    console.log("===================== END ALQURAN ID =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
//# sourceMappingURL=AlquranGuruController.js.map