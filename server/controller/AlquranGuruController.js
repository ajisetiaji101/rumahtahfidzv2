import knex from "../config/db.js";
const uuid = require("uuid");

export default class AlquranGuruController {
  static countAlquranSantri = async (req, res) => {
    try {
      console.log(
        "===================== COUNT ALQURAN GURU ======================="
      );

      const { pondokId, masterpondokId } = req.query;

      const respon = await knex
        .raw(
          `call guru_counthafalan('ALQURANGURU','${pondokId}','${masterpondokId}',@hasil)`
        )
        .then((e) => e[0][0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } `
      );
      console.log(
        "===================== END COUNT ALQURAN GURU ======================="
      );
      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message} `
      );
      console.log(
        "===================== END COUNT ALQURAN GURU ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };
  // =========================================================================================
  static getListAlquranAwal = async (req, res) => {
    try {
      const { pondokId, masterpondokId } = req.query;
      console.log(
        "===================== GET LIST AL QURAN GURU AWAL ======================="
      );

      const respon = await knex
        .raw(
          `call hafalan_getlistawal('ALQURANGURU','${pondokId}','${masterpondokId}','')`
        )
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END LIST AL QURAN GURU AWAL ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END LIST AL QURAN GURU AWAL ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  //   ============================================================================================

  static getListHafalanAlquran = async (req, res) => {
    try {
      const { id } = req.params;

      console.log(
        "===================== GET ALQURAN GURU ======================="
      );

      const respon = await knex
        .raw(`call hafalan_getdetail('ALQURANGURU', '${id}')`)
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END ALQURAN GURU ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END ALQURAN GURU ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  //   ============================================================================================

  static async insert(req, res) {
    try {
      const { juz, surah, ayat, tgl_selesai, guruId, halaman, ket } = req.body;

      const payload = {
        juz,
        surah,
        ayat,
        halaman,
        tgl_selesai,
        ket,
        guruId,
      };

      console.log(payload);
      const respon = await knex
        .raw(
          `call alquranguru_insert('${payload.juz}','${payload.surah}','${payload.ayat}','${payload.halaman}','${payload.tgl_selesai}', '${payload.ket}','${payload.guruId}',@hasil )`
        )
        .then((e) => e[0][0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } FUNCTION : call alquranguru_insert('${payload.juz}','${
          payload.surah
        }','${payload.ayat}','${payload.halaman}','${payload.tgl_selesai}', '${
          payload.ket
        }','${payload.guruId}',@hasil )`
      );
      console.log(
        "===================== INSERT ALQURAN GURU ======================="
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
        "===================== END INSERT ALQURAN GURU  ======================="
      );

      return res.status(404).json({ data: "Harap diperiksa kembali" });
    }
  }

  //   ============================================================================================

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
          `call alquranguru_update('${payload.id}','${payload.juz}','${payload.surah}','${payload.ayat}','${payload.halaman}','${payload.tgl_selesai}', '${payload.ket}',@hasil )`
        )
        .then((e) => e[0][0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } FUNCTION : call alquranguru_update('${payload.id}','${
          payload.juz
        }','${payload.surah}','${payload.ayat}','${payload.halaman}','${
          payload.tgl_selesai
        }', '${payload.ket}',@hasil )`
      );
      console.log(
        "===================== UPDATE ALQURAN GURU ======================="
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
        "===================== END UPDATE ALQURAN GURU  ======================="
      );

      return res.status(404).json({ data: "Harap diperiksa kembali" });
    }
  }

  //   ============================================================================================

  static async delete(req, res) {
    try {
      const { id } = req.params;

      const payload = {
        id,
      };

      console.log(payload);
      const respon = await knex
        .raw(`call alquranguru_delete('${payload.id}',@hasil )`)
        .then((e) => e[0][0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } FUNCTION : call alquranguru_delete('${payload.id}',@hasil )`
      );
      console.log(
        "===================== DELETE ALQURAN GURU ======================="
      );
      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }  ERROR: ${error.message} `
      );
      console.log(
        "===================== END DELETE ALQURAN GURU  ======================="
      );

      return res.status(404).json({ data: "Harap diperiksa kembali" });
    }
  }

  //   ============================================================================================

  static getHafalanId = async (req, res) => {
    try {
      const { id } = req.params;

      console.log(
        "===================== GET ALQURAN ID ======================="
      );

      const respon = await knex
        .raw(`call alquranguru_getid('${id}')`)
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

  //   ============================================================================================
}
