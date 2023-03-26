"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sequelize = require("sequelize");
var _db = _interopRequireDefault(require("../config/db.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const uuid = require("uuid");
class SantriController {
  static async createSantri(req, res) {
    try {
      const {
        files,
        fields
      } = req.fileAttrb;
      if (fields[10].value.length > 1) {
        const payload = {
          id: uuid.v4(),
          name: fields[0].value,
          nis: fields[1].value,
          tempat: fields[2].value,
          datebirth: fields[3].value,
          gender: fields[4].value,
          telephone: fields[5].value,
          address: fields[6].value,
          ayah: fields[7].value,
          ibu: fields[8].value,
          mulai_masuk: fields[9].value,
          mulai_vakum: fields[10].value,
          pondokId: fields[11].value,
          photo: files[0].file.newFilename
        };
        console.log("===================== GET INSERT SANTRI FILE =======================");
        console.log(payload);
        const respon = await _db.default.raw(`call santris_insert('${payload.id}','${payload.name}','${payload.nis}','${payload.tempat}', '${payload.datebirth}', '${payload.gender}', '${payload.telephone}', '${payload.address}','${payload.ayah}','${payload.ibu}','${payload.mulai_masuk}','${payload.mulai_vakum}','${payload.pondokId}','${payload.photo}',@hasil )`).then(e => e[0][0][0]);
        const data = respon;
        console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}  FUNCTION : call santris_insert('${payload.id}','${payload.name}','${payload.nis}','${payload.tempat}', '${payload.datebirth}', '${payload.gender}', '${payload.telephone}', '${payload.address}','${payload.ayah}','${payload.ibu}','${payload.mulai_masuk}','${payload.mulai_vakum}','${payload.pondokId}','${payload.photo}',@hasil )`);
        console.log("===================== GET INSERT SANTRI FILE =======================");
        if (data.hasil !== "success") {
          return res.status(500).json({
            data: data.hasil
          });
        }
        return res.status(200).json({
          data
        });
      } else {
        const payload = {
          id: uuid.v4(),
          name: fields[0].value,
          nis: fields[1].value,
          tempat: fields[2].value,
          datebirth: fields[3].value,
          gender: fields[4].value,
          telephone: fields[5].value,
          address: fields[6].value,
          ayah: fields[7].value,
          ibu: fields[8].value,
          mulai_masuk: fields[9].value,
          pondokId: fields[11].value,
          photo: files[0].file.newFilename
        };
        console.log("===================== GET INSERT SANTRI =======================");
        console.log(payload);
        const respon = await _db.default.raw(`call santris_insert('${payload.id}','${payload.name}','${payload.nis}','${payload.tempat}', '${payload.datebirth}', '${payload.gender}', '${payload.telephone}', '${payload.address}','${payload.ayah}','${payload.ibu}','${payload.mulai_masuk}','','${payload.pondokId}','${payload.photo}',@hasil )`).then(e => e[0][0][0]);
        const data = respon;
        console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call santris_insert('${payload.id}','${payload.name}','${payload.nis}','${payload.tempat}', '${payload.datebirth}', '${payload.gender}', '${payload.telephone}', '${payload.address}','${payload.ayah}','${payload.ibu}','${payload.mulai_masuk}','','${payload.pondokId}','${payload.photo}',@hasil )`);
        console.log("===================== GET INSERT SANTRI FILE =======================");
        if (data.hasil !== "success") {
          return res.status(500).json({
            data: data.hasil
          });
        }
        return res.status(200).json({
          data
        });
      }
    } catch (error) {
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}  ERROR: ${error.message} `);
      console.log("===================== END GET SANTRI BY ID  =======================");
      return res.status(404).json({
        data: "Harap diperiksa kembali"
      });
    }
  }
  static async updateSantri(req, res) {
    try {
      const {
        id
      } = req.params;
      const {
        files,
        fields
      } = req.fileAttrb;
      if (fields[10].value == "Invalid date") {
        const payload = {
          name: fields[0].value,
          nis: fields[1].value,
          tempat: fields[2].value,
          datebirth: fields[3].value,
          gender: fields[4].value,
          telephone: fields[5].value,
          address: fields[6].value,
          ayah: fields[7].value,
          ibu: fields[8].value,
          mulai_masuk: fields[9].value,
          mulai_vakum: null,
          pondokId: fields[11].value,
          photo: files[0].file.newFilename
        };
        console.log(payload);
        const respon = await _db.default.raw(`call santris_update('${id}','${payload.name}','${payload.nis}','${payload.tempat}', '${payload.datebirth}', '${payload.gender}', '${payload.telephone}', '${payload.address}','${payload.ayah}','${payload.ibu}','${payload.mulai_masuk}','${payload.mulai_vakum}','${payload.pondokId}','${payload.photo}',@hasil )`).then(e => e[0][0][0]);
        const data = respon;
        console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call santris_update('${id}','${payload.name}','${payload.nis}','${payload.tempat}', '${payload.datebirth}', '${payload.gender}', '${payload.telephone}', '${payload.address}','${payload.ayah}','${payload.ibu}','${payload.mulai_masuk}','','${payload.pondokId}','${payload.photo}',@hasil )`);
        console.log("===================== UPDATE SANTRI FILE =======================");
        if (data.hasil !== "success") {
          return res.status(500).json({
            data: data.hasil
          });
        }
        return res.status(200).json({
          data
        });
      } else {
        const payload = {
          name: fields[0].value,
          nis: fields[1].value,
          tempat: fields[2].value,
          datebirth: fields[3].value,
          gender: fields[4].value,
          telephone: fields[5].value,
          address: fields[6].value,
          ayah: fields[7].value,
          ibu: fields[8].value,
          mulai_masuk: fields[9].value,
          mulai_vakum: fields[10].value,
          pondokId: fields[11].value,
          photo: files[0].file.newFilename
        };
        const respon = await _db.default.raw(`call santris_update('${id}','${payload.name}','${payload.nis}','${payload.tempat}', '${payload.datebirth}', '${payload.gender}', '${payload.telephone}', '${payload.address}','${payload.ayah}','${payload.ibu}','${payload.mulai_masuk}','${payload.mulai_vakum}','${payload.pondokId}','${payload.photo}',@hasil )`).then(e => e[0][0][0]);
        const data = respon;
        console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call santris_update('${id}','${payload.name}','${payload.nis}','${payload.tempat}', '${payload.datebirth}', '${payload.gender}', '${payload.telephone}', '${payload.address}','${payload.ayah}','${payload.ibu}','${payload.mulai_masuk}','${payload.mulai_vakum}','${payload.pondokId}','${payload.photo}',@hasil )`);
        console.log("===================== UPDATE SANTRI FILE =======================");
        if (data.hasil !== "success") {
          return res.status(500).json({
            data: data.hasil
          });
        }
        return res.status(200).json({
          data
        });
      }
    } catch (error) {
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}  ERROR: ${error.message} `);
      console.log("===================== END UPDATE SANTRI FILE =======================");
      return res.status(404).json({
        data: "Harap diperiksa kembali"
      });
    }
  }
  static async updateNoFileSantri(req, res) {
    try {
      const {
        id
      } = req.params;
      const {
        name,
        nis,
        tempat,
        telephone,
        address,
        datebirth,
        gender,
        ayah,
        ibu,
        mulai_masuk,
        mulai_vakum,
        pondokId
      } = req.body;
      if (mulai_vakum.length < 1) {
        const payload = {
          name,
          nis,
          tempat,
          telephone,
          address,
          datebirth,
          gender,
          ayah,
          ibu,
          mulai_masuk,
          mulai_vakum: null,
          pondokId
        };
        const respon = await _db.default.raw(`call santris_update('${id}','${payload.name}','${payload.nis}','${payload.tempat}', '${payload.datebirth}', '${payload.gender}', '${payload.telephone}', '${payload.address}','${payload.ayah}','${payload.ibu}','${payload.mulai_masuk}','${payload.mulai_vakum}','${payload.pondokId}','',@hasil )`).then(e => e[0][0][0]);
        const data = respon;
        console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} call santris_update('${id}','${payload.name}','${payload.nis}','${payload.tempat}', '${payload.datebirth}', '${payload.gender}', '${payload.telephone}', '${payload.address}','${payload.ayah}','${payload.ibu}','${payload.mulai_masuk}','','${payload.pondokId}','',@hasil )`);
        console.log("===================== UPDATE SANTRI NO FILE =======================");
        if (data.hasil !== "success") {
          return res.status(500).json({
            data: data.hasil
          });
        }
        return res.status(200).json({
          data
        });
      } else {
        const payload = {
          name,
          nis,
          tempat,
          telephone,
          address,
          datebirth,
          gender,
          ayah,
          ibu,
          mulai_masuk,
          mulai_vakum,
          pondokId
        };
        console.log(payload);
        const respon = await _db.default.raw(`call santris_update('${id}','${payload.name}','${payload.nis}','${payload.tempat}', '${payload.datebirth}', '${payload.gender}', '${payload.telephone}', '${payload.address}','${payload.ayah}','${payload.ibu}','${payload.mulai_masuk}','${payload.mulai_vakum}','${payload.pondokId}','',@hasil )`).then(e => e[0][0][0]);
        const data = respon;
        console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call santris_update('${id}','${payload.name}','${payload.nis}','${payload.tempat}', '${payload.datebirth}', '${payload.gender}', '${payload.telephone}', '${payload.address}','${payload.ayah}','${payload.ibu}','${payload.mulai_masuk}','${payload.mulai_vakum}','${payload.pondokId}','',@hasil )`);
        console.log("===================== UPDATE SANTRI NO FILE =======================");
        if (data.hasil !== "success") {
          return res.status(500).json({
            data: data.hasil
          });
        }
        return res.status(200).json({
          data
        });
      }
    } catch (error) {
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}  ERROR: ${error.message} `);
      console.log("===================== END UPDATE SANTRI NO FILE  =======================");
      return res.status(404).json({
        data: "Harap diperiksa kembali"
      });
    }
  }
  static async deleteSantri(req, res) {
    try {
      "===================== DELETE SANTRI =======================";
      const {
        id
      } = req.params;
      console.log("Params :", id);
      const respon = await _db.default.raw(`call santris_delete('${id}', @hasil)`).then(e => e[0][0][0]);
      const data = respon;
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}`);
      console.log("===================== END DELETE SANTRI =======================");
      return res.status(200).json({
        data
      });
    } catch (error) {
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
      console.log("===================== END DELETE SANTRI =======================");
      return res.status(400).json({
        data: "Pastikan Semua data benar"
      });
    }
  }
}
exports.default = SantriController;
_defineProperty(SantriController, "countSantri", async (req, res) => {
  try {
    const {
      pondokId,
      masterpondokId
    } = req.query;
    console.log("===================== COUNT SANTRI =======================");
    const respon = await _db.default.raw(`call santri_countsantri('${pondokId}','${masterpondokId}',@hasil)`).then(e => e[0][0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} PARAMS : ${pondokId}`);
    console.log("===================== END COUNT SANTRI =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message} `);
    console.log("===================== END COUNT SANTRI =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(SantriController, "getAll", async (req, res) => {
  try {
    console.log("===================== GET ALL SANTRI =======================");
    const respon = await _db.default.raw(`call santris_getall('','','','')`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} `);
    console.log("===================== END GET ALL SANTRI =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}  ERROR: ${error.message} `);
    console.log("===================== END GET ALL SANTRI =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(SantriController, "getByPondokId", async (req, res) => {
  try {
    console.log("===================== GET SANTRI BY PONDOK ID =======================");
    const {
      id
    } = req.params;
    const respon = await _db.default.raw(`call santris_getall('','${id}','','')`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} `);
    console.log("===================== END GET SANTRI BY PONDOK ID  =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}  ERROR: ${error.message} `);
    console.log("===================== END GET SANTRI BY PONDOK ID  =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(SantriController, "getByMasterpondokId", async (req, res) => {
  try {
    console.log("===================== GET SANTRI BY MASTER PONDOK ID =======================");
    const {
      id
    } = req.params;
    const respon = await _db.default.raw(`call santris_getall('','','${id}','')`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} `);
    console.log("===================== GET SANTRI BY MASTER PONDOK ID =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}  ERROR: ${error.message} `);
    console.log("===================== END GET SANTRI BY MASTER PONDOK ID  =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(SantriController, "getByUserId", async (req, res) => {
  try {
    console.log("===================== GET SANTRI BY USER ID =======================");
    const {
      id
    } = req.params;
    const respon = await _db.default.raw(`call santri_detailuser('','${id}')`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call santri_detailuser('','${id}') `);
    console.log("===================== END GET SANTRI BY USER ID  =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}  ERROR: ${error.message} `);
    console.log("===================== END GET SANTRI BY USER ID  =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(SantriController, "getDropdownByPondokId", async (req, res) => {
  try {
    console.log("===================== GET SANTRI BY PONDOK ID =======================");
    const {
      id
    } = req.params;
    const respon = await _db.default.raw(`call santri_getdropdown('${id}','')`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION: call santri_getdropdown('${id}','')`);
    console.log("===================== END GET SANTRI BY PONDOK ID  =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}  ERROR: ${error.message} `);
    console.log("===================== END GET SANTRI BY PONDOK ID  =======================");
  }
});
_defineProperty(SantriController, "getById", async (req, res) => {
  try {
    console.log("===================== GET SANTRI BY ID =======================");
    const {
      id
    } = req.params;
    const respon = await _db.default.raw(`call santris_getall('${id}','','','')`).then(e => e[0][0]);
    const data = respon;
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} `);
    console.log("===================== GET SANTRI BY ID =======================");
    return res.status(200).json({
      data
    });
  } catch (error) {
    console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method}  ERROR: ${error.message} `);
    console.log("===================== END GET SANTRI BY ID  =======================");
    return res.status(400).json({
      data: error.message
    });
  }
});
//# sourceMappingURL=SantriController.js.map