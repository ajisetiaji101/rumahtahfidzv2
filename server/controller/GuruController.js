import knex from "../config/db.js";
const uuid = require("uuid");

export default class GuruController {
  static countGuru = async (req, res) => {
    try {
      const { pondokId, masterpondokId } = req.query;

      console.log(pondokId);

      console.log("===================== COUNT SANTRI =======================");

      const respon = await knex
        .raw(`call guru_countguru('${pondokId}','${masterpondokId}',@hasil)`)
        .then((e) => e[0][0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } PARAMS : ${pondokId}`
      );
      console.log(
        "===================== END COUNT SANTRI ======================="
      );
      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }  ERROR: ${error.message} `
      );
      console.log(
        "===================== END COUNT SANTRI ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static getAll = async (req, res) => {
    try {
      console.log("===================== GET ALL GURU =======================");

      const respon = await knex
        .raw(`call gurus_getall('','','')`)
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } `
      );
      console.log(
        "===================== END GET ALL GURU ======================="
      );
      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }  ERROR: ${error.message} `
      );
      console.log(
        "===================== END GET ALL GURU ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static getByPondokId = async (req, res) => {
    try {
      console.log(
        "===================== GET GURU BY PONDOK ID ======================="
      );

      const { id } = req.params;

      const respon = await knex
        .raw(`call gurus_getall('','${id}','')`)
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } `
      );
      console.log(
        "===================== END GET GURU BY PONDOK ID  ======================="
      );
      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }  ERROR: ${error.message} `
      );
      console.log(
        "===================== END GET GURU BY PONDOK ID  ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static getByMasterpondokId = async (req, res) => {
    try {
      console.log(
        "===================== GET GURU BY MASTER PONDOK ID ======================="
      );

      const { id } = req.params;

      const respon = await knex
        .raw(`call gurus_getall('','','${id}')`)
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } `
      );
      console.log(
        "===================== GET GURU BY MASTER PONDOK ID ======================="
      );
      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }  ERROR: ${error.message} `
      );
      console.log(
        "===================== END GET GURU BY MASTER PONDOK ID  ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static getById = async (req, res) => {
    try {
      console.log(
        "===================== GET GURU BY ID ======================="
      );

      const { id } = req.params;

      const respon = await knex
        .raw(`call gurus_getall('${id}','','')`)
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } `
      );
      console.log(
        "===================== GET GURU BY ID ======================="
      );
      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }  ERROR: ${error.message} `
      );
      console.log(
        "===================== END GET GURU BY ID  ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static async createGuru(req, res) {
    try {
      const { files, fields } = req.fileAttrb;

      if (fields[10].value.length > 1) {
        const payload = {
          id: uuid.v4(),
          name: fields[0].value,
          niu: fields[1].value,
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
          photo: files[0].file.newFilename,
        };

        console.log(
          "===================== GET INSERT GURU FILE ======================="
        );

        const respon = await knex
          .raw(
            `call gurus_insert('${payload.id}','${payload.name}','${payload.niu}','${payload.tempat}', '${payload.datebirth}', '${payload.gender}', '${payload.telephone}', '${payload.address}','${payload.ayah}','${payload.ibu}','${payload.mulai_masuk}','${payload.mulai_vakum}','${payload.pondokId}','${payload.photo}',@hasil )`
          )
          .then((e) => e[0][0][0]);

        const data = respon;

        console.log(
          `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
            req.method
          } FUNCTION : call gurus_insert('${payload.id}','${payload.name}','${
            payload.niu
          }','${payload.tempat}', '${payload.datebirth}', '${
            payload.gender
          }', '${payload.telephone}', '${payload.address}','${payload.ayah}','${
            payload.ibu
          }','${payload.mulai_masuk}','${payload.mulai_vakum}','${
            payload.pondokId
          }','${payload.photo}',@hasil )`
        );
        console.log(
          "===================== GET INSERT GURU FILE ======================="
        );

        if (data.hasil !== "success") {
          return res.status(500).json({ data: data.hasil });
        }

        return res.status(200).json({ data });
      } else {
        const payload = {
          id: uuid.v4(),
          name: fields[0].value,
          niu: fields[1].value,
          tempat: fields[2].value,
          datebirth: fields[3].value,
          gender: fields[4].value,
          telephone: fields[5].value,
          address: fields[6].value,
          ayah: fields[7].value,
          ibu: fields[8].value,
          mulai_masuk: fields[9].value,
          pondokId: fields[11].value,
          photo: files[0].file.newFilename,
        };

        console.log(
          "===================== GET INSERT GURU ======================="
        );

        const respon = await knex
          .raw(
            `call gurus_insert('${payload.id}','${payload.name}','${payload.niu}','${payload.tempat}', '${payload.datebirth}', '${payload.gender}', '${payload.telephone}', '${payload.address}','${payload.ayah}','${payload.ibu}','${payload.mulai_masuk}',null,'${payload.pondokId}','${payload.photo}',@hasil )`
          )
          .then((e) => e[0][0][0]);

        const data = respon;

        console.log(
          `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
            req.method
          } FUNCTION : call gurus_insert('${payload.id}','${payload.name}','${
            payload.niu
          }','${payload.tempat}', '${payload.datebirth}', '${
            payload.gender
          }', '${payload.telephone}', '${payload.address}','${payload.ayah}','${
            payload.ibu
          }','${payload.mulai_masuk}',null,'${payload.pondokId}','${
            payload.photo
          }',@hasil )`
        );
        console.log(
          "===================== GET INSERT GURU FILE ======================="
        );

        if (data.hasil !== "success") {
          return res.status(500).json({ data: data.hasil });
        }

        return res.status(200).json({ data });
      }
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }  ERROR: ${error.message} `
      );
      console.log(
        "===================== END GET GURU BY ID  ======================="
      );

      return res.status(404).json({ data: "Harap diperiksa kembali" });
    }
  }

  static async updateGuru(req, res) {
    try {
      console.log(
        "===================== UPDATE GURU FILE ======================="
      );

      const { id } = req.params;

      const { files, fields } = req.fileAttrb;

      if (fields[10].value == "Invalid date" || fields[10].value.length < 1) {
        const payload = {
          name: fields[0].value,
          niu: fields[1].value,
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
          photo: files[0].file.newFilename,
        };

        console.log(payload);
        const respon = await knex
          .raw(
            `call gurus_update('${id}','${payload.name}','${payload.niu}','${payload.tempat}', '${payload.datebirth}', '${payload.gender}', '${payload.telephone}', '${payload.address}','${payload.ayah}','${payload.ibu}','${payload.mulai_masuk}',${payload.mulai_vakum},'${payload.pondokId}','${payload.photo}',@hasil )`
          )
          .then((e) => e[0][0][0]);

        const data = respon;

        console.log(
          `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
            req.method
          } FUNCTION : call gurus_update('${id}','${payload.name}','${
            payload.niu
          }','${payload.tempat}', '${payload.datebirth}', '${
            payload.gender
          }', '${payload.telephone}', '${payload.address}','${payload.ayah}','${
            payload.ibu
          }','${payload.mulai_masuk}',${payload.mulai_vakum},'${
            payload.pondokId
          }','${payload.photo}',@hasil )`
        );

        if (data.hasil !== "success") {
          return res.status(500).json({ data: data.hasil });
        }

        return res.status(200).json({ data });
      } else {
        const payload = {
          name: fields[0].value,
          niu: fields[1].value,
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
          photo: files[0].file.newFilename,
        };
        const respon = await knex
          .raw(
            `call gurus_update('${id}','${payload.name}','${payload.niu}','${payload.tempat}', '${payload.datebirth}', '${payload.gender}', '${payload.telephone}', '${payload.address}','${payload.ayah}','${payload.ibu}','${payload.mulai_masuk}','${payload.mulai_vakum}','${payload.pondokId}','${payload.photo}',@hasil )`
          )
          .then((e) => e[0][0][0]);

        const data = respon;

        console.log(
          `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
            req.method
          } FUNCTION : call gurus_update('${id}','${payload.name}','${
            payload.niu
          }','${payload.tempat}', '${payload.datebirth}', '${
            payload.gender
          }', '${payload.telephone}', '${payload.address}','${payload.ayah}','${
            payload.ibu
          }','${payload.mulai_masuk}','${payload.mulai_vakum}','${
            payload.pondokId
          }','${payload.photo}',@hasil )`
        );
        console.log(
          "===================== UPDATE GURU FILE ======================="
        );

        if (data.hasil !== "success") {
          return res.status(500).json({ data: data.hasil });
        }

        return res.status(200).json({ data });
      }
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }  ERROR: ${error.message} `
      );
      console.log(
        "===================== END UPDATE GURU FILE ======================="
      );

      return res.status(404).json({ data: "Harap diperiksa kembali" });
    }
  }

  static async updateNoFileGuru(req, res) {
    try {
      const { id } = req.params;

      const {
        name,
        niu,
        tempat,
        telephone,
        address,
        datebirth,
        gender,
        ayah,
        ibu,
        mulai_masuk,
        mulai_vakum,
        pondokId,
      } = req.body;

      if (mulai_vakum == "Invalid date" || mulai_vakum.length < 1) {
        const payload = {
          name,
          niu,
          tempat,
          telephone,
          address,
          datebirth,
          gender,
          ayah,
          ibu,
          mulai_masuk,
          mulai_vakum: null,
          pondokId,
        };

        console.log(payload);

        const respon = await knex
          .raw(
            `call gurus_update('${id}','${payload.name}','${payload.niu}','${payload.tempat}', '${payload.datebirth}', '${payload.gender}', '${payload.telephone}', '${payload.address}','${payload.ayah}','${payload.ibu}','${payload.mulai_masuk}',${payload.mulai_vakum},'${payload.pondokId}','',@hasil )`
          )
          .then((e) => e[0][0][0]);

        const data = respon;

        console.log(
          `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
            req.method
          } FUNCTION : call gurus_update('${id}','${payload.name}','${
            payload.niu
          }','${payload.tempat}', '${payload.datebirth}', '${
            payload.gender
          }', '${payload.telephone}', '${payload.address}','${payload.ayah}','${
            payload.ibu
          }','${payload.mulai_masuk}',${payload.mulai_vakum},'${
            payload.pondokId
          }','',@hasil )`
        );
        console.log(
          "===================== UPDATE GURU NO FILE ======================="
        );

        if (data.hasil !== "success") {
          return res.status(500).json({ data: data.hasil });
        }

        return res.status(200).json({ data });
      } else {
        const payload = {
          name,
          niu,
          tempat,
          telephone,
          address,
          datebirth,
          gender,
          ayah,
          ibu,
          mulai_masuk,
          mulai_vakum,
          pondokId,
        };

        console.log(payload);
        const respon = await knex
          .raw(
            `call gurus_update('${id}','${payload.name}','${payload.niu}','${payload.tempat}', '${payload.datebirth}', '${payload.gender}', '${payload.telephone}', '${payload.address}','${payload.ayah}','${payload.ibu}','${payload.mulai_masuk}','${payload.mulai_vakum}','${payload.pondokId}','',@hasil )`
          )
          .then((e) => e[0][0][0]);

        const data = respon;

        console.log(
          `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
            req.method
          } FUNCTION : call gurus_update('${id}','${payload.name}','${
            payload.niu
          }','${payload.tempat}', '${payload.datebirth}', '${
            payload.gender
          }', '${payload.telephone}', '${payload.address}','${payload.ayah}','${
            payload.ibu
          }','${payload.mulai_masuk}','${payload.mulai_vakum}','${
            payload.pondokId
          }','',@hasil )`
        );
        console.log(
          "===================== UPDATE GURU NO FILE ======================="
        );
        if (data.hasil !== "success") {
          return res.status(500).json({ data: data.hasil });
        }

        return res.status(200).json({ data });
      }
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }  ERROR: ${error.message} `
      );
      console.log(
        "===================== END UPDATE GURU NO FILE  ======================="
      );

      return res.status(404).json({ data: "Harap diperiksa kembali" });
    }
  }

  static async deleteGuru(req, res) {
    try {
      ("===================== DELETE GURU =======================");

      const { id } = req.params;

      console.log("Params :", id);

      const respon = await knex
        .raw(`call gurus_delete('${id}', @hasil)`)
        .then((e) => e[0][0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END DELETE GURU ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END DELETE GURU ======================="
      );

      return res.status(400).json({ data: "Pastikan Semua data benar" });
    }
  }
}
