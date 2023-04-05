import knex from "../config/db.js";
const uuid = require("uuid");

export default class LaporanController {
  static getHafalanSantri = async (req, res) => {
    try {
      console.log("===================== GET HAFALAN =======================");

      const { userId, pondokId, masterpondokId } = req.query;

      const respon = await knex
        .raw(
          `call report_hafalan_santri_getall('${userId}','${pondokId}','${masterpondokId}')`
        )
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } `
      );
      console.log(
        "===================== END GET HAFALAN IQRO SANTRI ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }  ERROR: ${error.message} `
      );
      console.log(
        "===================== END GET HAFALAN IQRO SANTRI ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static getHafalanGuru = async (req, res) => {
    try {
      console.log("===================== GET HAFALAN =======================");

      const { pondokId, masterpondokId } = req.query;

      const respon = await knex
        .raw(
          `call report_hafalan_guru_getall('${pondokId}','${masterpondokId}')`
        )
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } `
      );
      console.log(
        "===================== END GET HAFALAN GURU ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }  ERROR: ${error.message} `
      );
      console.log(
        "===================== END GET HAFALAN GURU ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static getHafalanUserSantri = async (req, res) => {
    try {
      console.log(
        "===================== GET HAFALAN USER SANTRI==================="
      );

      const { userId, pondokId, masterpondokId } = req.query;

      const respon = await knex
        .raw(
          `call report_hafalan_usersantri_getall('${userId}','${pondokId}','${masterpondokId}')`
        )
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } FUNCTION : call report_hafalan_usersantri_getall('${userId}','${pondokId}','${masterpondokId}')`
      );
      console.log(
        "===================== END GET HAFALAN USER SANTRI SANTRI ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }  ERROR: ${error.message} `
      );
      console.log(
        "===================== END GET HAFALAN USER SANTRI SANTRI ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };
}
