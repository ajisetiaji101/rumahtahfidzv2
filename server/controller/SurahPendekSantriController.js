import knex from "../config/db.js";
const uuid = require("uuid");

export default class SurahPendekSantriController {
  static countSurahPendekSantri = async (req, res) => {
    try {
      console.log(
        "===================== COUNT SURAHPENDEK SANTRI ======================="
      );

      const { pondokId, masterpondokId } = req.query;

      const respon = await knex
        .raw(
          `call santri_counthafalan('SURAHPENDEK','${pondokId}','${masterpondokId}',@hasil)`
        )
        .then((e) => e[0][0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } `
      );
      console.log(
        "===================== END COUNT SURAHPENDEK SANTRI ======================="
      );
      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message} `
      );
      console.log(
        "===================== END COUNT SURAHPENDEK SANTRI ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static getListSurahPendekAwal = async (req, res) => {
    try {
      const { pondokId, masterpondokId, userId } = req.query;
      console.log(
        "===================== GET LIST SURAH PENDEK SANTRI AWAL ======================="
      );

      const respon = await knex
        .raw(
          `call hafalan_getlistawal('SURAHPENDEK','${pondokId}','${masterpondokId}','${userId}')`
        )
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END LIST SURAH PENDEK SANTRI AWAL ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END LIST SURAH PENDEK SANTRI AWAL ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static getListHafalanSurahPendek = async (req, res) => {
    try {
      const { id } = req.params;

      console.log(
        "===================== GET LIST SURAH PENDEK SANTRI ======================="
      );

      const respon = await knex
        .raw(`call hafalan_getdetail('SURAHPENDEK', '${id}')`)
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END LIST SURAH PENDEK SANTRI ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END LIST SURAH PENDEK SANTRI ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static async insert(req, res) {
    try {
      const { name, tgl_selesai, santriId, ket } = req.body;

      const payload = {
        name,
        tgl_selesai,
        santriId,
        ket,
      };

      console.log(payload);
      const respon = await knex
        .raw(
          `call surahpendeksantri_insert('${payload.name}','${payload.tgl_selesai}','${payload.santriId}', '${payload.ket}',@hasil )`
        )
        .then((e) => e[0][0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } FUNCTION : call surahpendeksantri_insert('${payload.name}','${
          payload.tgl_selesai
        }','${payload.ket}', '${payload.santriId}',@hasil )`
      );
      console.log(
        "===================== INSERT SURAH PENDEK SANTRI ======================="
      );
      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }  ERROR: ${error.message} `
      );
      console.log(
        "===================== END INSERT SURAH PENDEK SANTRI  ======================="
      );

      return res.status(404).json({ data: "Harap diperiksa kembali" });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { name, tgl_selesai, ket } = req.body;

      const payload = {
        id,
        name,
        tgl_selesai,
        ket,
      };

      console.log(payload);
      const respon = await knex
        .raw(
          `call surahpendeksantri_update('${payload.id}','${payload.name}','${payload.tgl_selesai}', '${payload.ket}',@hasil )`
        )
        .then((e) => e[0][0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } FUNCTION : call surahpendeksantri_update('${payload.id}','${
          payload.name
        }','${payload.tgl_selesai}', '${payload.ket}',@hasil )`
      );
      console.log(
        "===================== UPDATE SURAH PENDEK SANTRI ======================="
      );
      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }  ERROR: ${error.message} `
      );
      console.log(
        "===================== END UPDATE SURAH PENDEK SANTRI  ======================="
      );

      return res.status(404).json({ data: "Harap diperiksa kembali" });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;

      const payload = {
        id,
      };

      console.log(payload);
      const respon = await knex
        .raw(`call surahpendeksantri_delete('${payload.id}',@hasil )`)
        .then((e) => e[0][0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } FUNCTION : call surahpendeksantri_delete('${payload.id}',@hasil )`
      );
      console.log(
        "===================== DELETE SURAH PENDEK SANTRI ======================="
      );
      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }  ERROR: ${error.message} `
      );
      console.log(
        "===================== END DELETE SURAH PENDEK SANTRI  ======================="
      );

      return res.status(404).json({ data: "Harap diperiksa kembali" });
    }
  }

  static getHafalanId = async (req, res) => {
    try {
      const { id } = req.params;

      console.log(
        "===================== GET SURAH PENDEK ID ======================="
      );

      const respon = await knex
        .raw(`call surahpendeksantri_getid('${id}')`)
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END SURAH PENDEK ID ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END SURAH PENDEK ID ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };
}
