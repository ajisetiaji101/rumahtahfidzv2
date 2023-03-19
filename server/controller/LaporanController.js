import knex from "../config/db.js";
const uuid = require("uuid");

export default class LaporanController {
  static getHafalanSantri = async (req, res) => {
    try {
      console.log("===================== GET HAFALAN =======================");

      const respon = knex("santris").join(
        "iqrosantris",
        "santris.id",
        "=",
        "iqrosantris.santri_id"
      );

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } `
      );
      console.log(
        "===================== END GET HAFALAN ======================="
      );

      return res.status(200).json({ data: data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }  ERROR: ${error.message} `
      );
      console.log(
        "===================== END GET HAFALAN ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };
}
