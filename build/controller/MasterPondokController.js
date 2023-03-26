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
class MasterPondokController {
  static async updateMasterpondok(req, res) {
    console.log("===================== UPDATE MASTERPONDOK =======================");
    const {
      files,
      fields
    } = req.fileAttrb;
    if (files.length === 2 && files[0].fieldName === "logo" && files[1].fieldName === "photo") {
      try {
        const {
          id
        } = req.params;
        const payload = {
          name: fields[0].value,
          nit: fields[1].value,
          address: fields[2].value,
          telephone: fields[3].value,
          chief: fields[4].value,
          logo: files[0].file.newFilename,
          photo: files[1].file.newFilename
        };
        console.log(payload);
        const respon = await _db.default.raw(`call masterpondok_update('${id}','${payload.name}', '${payload.nit}', '${payload.address}', '${payload.telephone}', '${payload.chief}', '${payload.logo}', '${payload.photo}', @hasil)`).then(e => e[0][0][0]);
        const data = respon;
        console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}`);
        console.log("===================== END UPDATE MASTERPONDOK =======================");
        if (data.hasil !== "success") {
          return res.status(500).json({
            data: data.hasil
          });
        }
        return res.status(200).json({
          data
        });
      } catch (error) {
        console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
        console.log("===================== END UPDATE MASTERPONDOK =======================");
        return res.status(400).json({
          data: "Pastikan Semua data benar"
        });
      }
    } else if (files[0].fieldName === "photo") {
      try {
        const {
          id
        } = req.params;
        const payload = {
          name: fields[0].value,
          nit: fields[1].value,
          address: fields[2].value,
          telephone: fields[3].value,
          chief: fields[4].value,
          photo: files[0].file.newFilename
        };
        console.log(payload);
        const respon = await _db.default.raw(`call masterpondok_update('${id}','${payload.name}', '${payload.nit}', '${payload.address}', '${payload.telephone}', '${payload.chief}', '', '${payload.photo}', @hasil)`).then(e => e[0][0][0]);
        const data = respon;
        console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}`);
        console.log("===================== END UPDATE MASTERPONDOK =======================");
        return res.status(200).json({
          data
        });
      } catch (error) {
        console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
        console.log("===================== END UPDATE MASTERPONDOK =======================");
        return res.status(400).json({
          data: "Pastikan Semua data benar"
        });
      }
    } else if (files[0].fieldName === "logo") {
      try {
        const {
          id
        } = req.params;
        const payload = {
          name: fields[0].value,
          nit: fields[1].value,
          address: fields[2].value,
          telephone: fields[3].value,
          chief: fields[4].value,
          logo: files[0].file.newFilename
        };
        console.log(payload);
        const respon = await _db.default.raw(`call masterpondok_update('${id}','${payload.name}', '${payload.nit}', '${payload.address}', '${payload.telephone}', '${payload.chief}', '${payload.logo}', '', @hasil)`).then(e => e[0][0][0]);
        const data = respon;
        console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}`);
        console.log("===================== END UPDATE MASTERPONDOK =======================");
        if (data.hasil !== "success") {
          return res.status(500).json({
            data: data.hasil
          });
        }
        return res.status(200).json({
          data
        });
      } catch (error) {
        console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
        console.log("===================== END UPDATE MASTERPONDOK =======================");
        return res.status(400).json({
          data: "Pastikan Semua data benar"
        });
      }
    }
  }
  static async updateMasterpondokNoFile(req, res) {
    try {
      const {
        id
      } = req.params;
      const {
        name,
        nit,
        address,
        telephone,
        chief
      } = req.body;
      const payload = {
        name,
        nit,
        address,
        telephone,
        chief
      };
      console.log(payload);
      const respon = await _db.default.raw(`call masterpondok_update('${id}','${payload.name}', '${payload.nit}', '${payload.address}', '${payload.telephone}', '${payload.chief}', '${payload.logo}', '', @hasil)`).then(e => e[0][0][0]);
      const data = respon;
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}`);
      console.log("===================== END UPDATE MASTERPONDOK =======================");
      if (data.hasil !== "success") {
        return res.status(500).json({
          data: data.hasil
        });
      }
      return res.status(200).json({
        data
      });
    } catch (error) {
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
      console.log("===================== END UPDATE MASTERPONDOK =======================");
      return res.status(400).json({
        data: "Pastikan Semua data benar"
      });
    }
  }
  static async deleteMasterpondok(req, res) {
    try {
      "===================== DELETE MASTERPONDOK =======================";
      const {
        id
      } = req.params;
      console.log("Params :", id);
      const respon = await _db.default.raw(`call masterpondok_delete('${id}', @hasil)`).then(e => e[0][0][0]);
      const data = respon;
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}`);
      console.log("===================== END DELETE MASTERPONDOK =======================");
      return res.status(200).json({
        data
      });
    } catch (error) {
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
      console.log("===================== END DELETE MASTERPONDOK =======================");
      return res.status(400).json({
        data: "Pastikan Semua data benar"
      });
    }
  }
}
exports.default = MasterPondokController;
_defineProperty(MasterPondokController, "countMasterPondok", async (req, res) => {
  try {
    console.log("===================== COUNT MASTERPONDOK =======================");
    const respon = await _db.default.raw(`call masterpondok_countmasterpondok(@hasil)`).then(e => e[0][0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} `);
    console.log("===================== END COUNT MASTERPONDOK =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message} `);
    console.log("===================== END COUNT MASTERPONDOK =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(MasterPondokController, "getAllMasterPondokDashboard", async (req, res) => {
  try {
    console.log("===================== GET ALL MASTERPONDOK DASHBOARD =======================");
    const respon = await _db.default.raw(`call masterpondok_santriterbanyak()`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}`);
    console.log("===================== END ALL MASTERPONDOK DASHBOARD =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
    console.log("===================== END ALL MASTERPONDOK DASHBOARD =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(MasterPondokController, "getAllMasterPondok", async (req, res) => {
  try {
    console.log("===================== GET ALL MASTERPONDOK =======================");
    const respon = await _db.default.raw(`call masterpondok_lismasterpondok('')`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}`);
    console.log("===================== END ALL MASTERPONDOK =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
    console.log("===================== END ALL MASTERPONDOK =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(MasterPondokController, "getMasterPondokById", async (req, res) => {
  try {
    console.log("===================== GET MASTERPONDOK BY ID =======================");
    const {
      masterpondokId
    } = req.query;
    const respon = await _db.default.raw(`call masterpondok_lismasterpondok('${masterpondokId}')`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}`);
    console.log("===================== END MASTERPONDOK BY ID =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
    console.log("===================== END MASTERPONDOK BY ID =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(MasterPondokController, "insertMasterpondok", async (req, res) => {
  try {
    console.log("===================== INSERT MASTERPONDOK =======================");
    const {
      files,
      fields
    } = req.fileAttrb;
    const payload = {
      id: uuid.v4(),
      name: fields[0].value,
      nit: fields[1].value,
      address: fields[2].value,
      telephone: fields[3].value,
      chief: fields[4].value,
      logo: files[0].file.newFilename,
      photo: files[1].file.newFilename
    };
    console.log(payload);
    const respon = await _db.default.raw(`call masterpondok_insert('${payload.id}','${payload.name}', '${payload.nit}', '${payload.address}', '${payload.telephone}', '${payload.chief}', '${payload.logo}', '${payload.photo}', @hasil)`).then(e => e[0][0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call masterpondok_insert('${payload.id}','${payload.name}', '${payload.nit}', '${payload.address}', '${payload.telephone}', '${payload.chief}', '${payload.logo}', '${payload.photo}', @hasil)`);
    console.log("===================== END INSERT MASTERPONDOK =======================");
    if (data.hasil !== "success") {
      return res.status(500).json({
        data: data.hasil
      });
    }
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
    console.log("===================== END INSERT MASTERPONDOK =======================");
    return res.status(400).json({
      data: "Pastikan data terisi benar"
    });
  }
});
//# sourceMappingURL=MasterPondokController.js.map