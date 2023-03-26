import knex from "../config/db.js";
const uuid = require("uuid");

export default class AlquranSantriController {
  static countAlquranSantri = async (req, res) => {
    try {
      console.log(
        "===================== COUNT ALQURAN SANTRI ======================="
      );

      const { pondokId, masterpondokId } = req.query;

      const respon = await knex
        .raw(
          `call santri_counthafalan('ALQURAN','${pondokId}','${masterpondokId}',@hasil)`
        )
        .then((e) => e[0][0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } `
      );
      console.log(
        "===================== END COUNT ALQURAN SANTRI ======================="
      );
      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message} `
      );
      console.log(
        "===================== END COUNT ALQURAN SANTRI ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static getListAlquranAwal = async (req, res) => {
    try {
      const { pondokId, masterpondokId, userId } = req.query;
      console.log(
        "===================== GET LIST AL QURAN SANTRI AWAL ======================="
      );

      const respon = await knex
        .raw(
          `call hafalan_getlistawal('ALQURAN','${pondokId}','${masterpondokId}','${userId}')`
        )
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END LIST AL QURAN SANTRI AWAL ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END LIST AL QURAN SANTRI AWAL ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static getListHafalanAlquran = async (req, res) => {
    try {
      const { id } = req.params;

      console.log(
        "===================== GET ALQURAN SANTRI ======================="
      );

      const respon = await knex
        .raw(`call hafalan_getdetail('ALQURAN', '${id}')`)
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END ALQURAN SANTRI ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END ALQURAN SANTRI ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static async insert(req, res) {
    try {
      const { juz, surah, ayat, tgl_selesai, santriId, halaman, ket } =
        req.body;

      const payload = {
        juz,
        surah,
        ayat,
        halaman,
        tgl_selesai,
        ket,
        santriId,
      };

      console.log(payload);
      const respon = await knex
        .raw(
          `call alquransantri_insert('${payload.juz}','${payload.surah}','${payload.ayat}','${payload.halaman}','${payload.tgl_selesai}', '${payload.ket}','${payload.santriId}',@hasil )`
        )
        .then((e) => e[0][0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } FUNCTION : call alquransantri_insert('${payload.juz}','${
          payload.surah
        }','${payload.ayat}','${payload.halaman}','${payload.tgl_selesai}', '${
          payload.ket
        }','${payload.santriId}',@hasil )`
      );
      console.log(
        "===================== INSERT ALQURAN SANTRI ======================="
      );

      if (data.hasil !== "success") {
        return res.status(500).json({ data: data.hasil });
      }

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }  ERROR: ${error.message} `
      );
      console.log(
        "===================== END INSERT ALQURAN SANTRI  ======================="
      );

      return res.status(404).json({ data: "Harap diperiksa kembali" });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { juz, surah, ayat, tgl_selesai, ket, halaman } = req.body;

      const payload = {
        id,
        juz,
        surah,
        ayat,
        halaman,
        tgl_selesai,
        ket,
      };

      console.log(payload);
      const respon = await knex
        .raw(
          `call alquransantri_update('${payload.id}','${payload.juz}','${payload.surah}','${payload.ayat}','${payload.halaman}','${payload.tgl_selesai}', '${payload.ket}',@hasil )`
        )
        .then((e) => e[0][0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } FUNCTION : call alquransantri_update('${payload.id}','${
          payload.juz
        }','${payload.surah}','${payload.ayat}','${payload.halaman}','${
          payload.tgl_selesai
        }', '${payload.ket}',@hasil )`
      );
      console.log(
        "===================== UPDATE ALQURAN SANTRI ======================="
      );

      if (data.hasil !== "success") {
        return res.status(500).json({ data: data.hasil });
      }

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }  ERROR: ${error.message} `
      );
      console.log(
        "===================== END UPDATE ALQURAN SANTRI  ======================="
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
        .raw(`call alquransantri_delete('${payload.id}',@hasil )`)
        .then((e) => e[0][0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } FUNCTION : call alquransantri_delete('${payload.id}',@hasil )`
      );
      console.log(
        "===================== DELETE ALQURAN SANTRI ======================="
      );
      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }  ERROR: ${error.message} `
      );
      console.log(
        "===================== END DELETE ALQURAN SANTRI  ======================="
      );

      return res.status(404).json({ data: "Harap diperiksa kembali" });
    }
  }

  static getHafalanId = async (req, res) => {
    try {
      const { id } = req.params;

      console.log(
        "===================== GET ALQURAN ID ======================="
      );

      const respon = await knex
        .raw(`call alquransantri_getid('${id}')`)
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END ALQURAN ID ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END ALQURAN ID ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };
}
