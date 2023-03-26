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
class IqroSantriController {
  static async insert(req, res) {
    try {
      const {
        name,
        halaman,
        tgl_selesai,
        ket,
        santriId
      } = req.body;
      const payload = {
        name,
        halaman,
        tgl_selesai,
        santriId,
        ket
      };
      console.log(payload);
      const respon = await _db.default.raw(`call iqrosantri_insert('${payload.name}','${payload.halaman}','${payload.tgl_selesai}','${payload.ket}', '${payload.santriId}',@hasil )`).then(e => e[0][0][0]);
      const data = respon;
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call iqrosantri_insert('${payload.name}','${payload.halaman}','${payload.tgl_selesai}','${payload.ket}', '${payload.santriId}',@hasil )`);
      console.log("===================== INSERT IQRO SANTRI =======================");
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
      console.log("===================== END INSERT IQRO SANTRI  =======================");
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
      const respon = await _db.default.raw(`call iqrosantri_update('${payload.id}','${payload.name}','${payload.halaman}','${payload.tgl_selesai}', '${payload.ket}',@hasil )`).then(e => e[0][0][0]);
      const data = respon;
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call iqrosantris_update('${payload.id}','${payload.name}','${payload.halaman}','${payload.tgl_selesai}', '${payload.ket}',@hasil )`);
      console.log("===================== UPDATE IQRO SANTRI =======================");
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
      console.log("===================== END UPDATE IQRO SANTRI  =======================");
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
      const respon = await _db.default.raw(`call iqrosantri_delete('${payload.id}',@hasil )`).then(e => e[0][0][0]);
      const data = respon;
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call iqrosantri_delete('${payload.id}',@hasil )`);
      console.log("===================== DELETE IQRO SANTRI =======================");
      return res.status(200).json({
        data
      });
    } catch (error) {
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}  ERROR: ${error.message} `);
      console.log("===================== END DELETE IQRO SANTRI  =======================");
      return res.status(404).json({
        data: "Harap diperiksa kembali"
      });
    }
  }
}
exports.default = IqroSantriController;
_defineProperty(IqroSantriController, "countIqroSantri", async (req, res) => {
  try {
    console.log("===================== COUNT IQRO SANTRI =======================");
    const {
      pondokId,
      masterpondokId
    } = req.query;
    const respon = await _db.default.raw(`call santri_counthafalan('IQRO','${pondokId}','${masterpondokId}',@hasil)`).then(e => e[0][0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} `);
    console.log("===================== END COUNT IQRO SANTRI =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message} `);
    console.log("===================== END COUNT IQRO SANTRI =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(IqroSantriController, "getListIqroAwal", async (req, res) => {
  try {
    const {
      pondokId,
      masterpondokId,
      userId
    } = req.query;
    console.log("===================== GET LIST IQRO SANTRI AWAL =======================");
    const respon = await _db.default.raw(`call hafalan_getlistawal('IQRO','${pondokId}','${masterpondokId}','${userId}')`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}`);
    console.log("===================== END LIST IQRO SANTRI AWAL =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
    console.log("===================== END LIST IQRO SANTRI AWAL =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(IqroSantriController, "getListHafalanIqro", async (req, res) => {
  try {
    const {
      id
    } = req.params;
    console.log("===================== GET LIST IQRO SANTRI =======================");
    const respon = await _db.default.raw(`call hafalan_getdetail('IQRO', '${id}')`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}`);
    console.log("===================== END LIST IQRO SANTRI =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
    console.log("===================== END LIST IQRO SANTRI =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(IqroSantriController, "getHafalanId", async (req, res) => {
  try {
    const {
      id
    } = req.params;
    console.log("===================== GET IQRO ID =======================");
    const respon = await _db.default.raw(`call iqrosantri_getid('${id}')`).then(e => e[0][0]);
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
//# sourceMappingURL=IqroSantriController.js.map