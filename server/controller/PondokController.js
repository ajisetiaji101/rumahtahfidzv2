const uuid = require("uuid");
import knex from "../config/db.js";

export default class PondokController {
  static countPondok = async (req, res) => {
    try {
      console.log("===================== COUNT PONDOK =======================");

      const { masterpondokId, pondokId } = req.query;

      const respon = await knex
        .raw(
          `call pondok_countpondok('${pondokId}','${masterpondokId}',@hasil)`
        )
        .then((e) => e[0][0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } `
      );
      console.log(
        "===================== END COUNT PONDOK ======================="
      );
      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message} `
      );
      console.log(
        "===================== END COUNT PONDOK ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static getListPondok = async (req, res) => {
    try {
      console.log(
        "===================== GET LIST PONDOK ======================="
      );

      const respon = await knex
        .raw(`call pondok_listpondok('','')`)
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END LIST PONDOK ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END LIST PONDOK ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static getAllPondokDashboard = async (req, res) => {
    try {
      console.log(
        "===================== GET ALL PONDOK DASHBOARD ======================="
      );

      const { masterpondokId } = req.query;

      const respon = await knex
        .raw(`call pondok_getallpondoksantridashboard('${masterpondokId}')`)
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END ALL PONDOK DASHBOARD ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END ALL PONDOK DASHBOARD ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static getListPondokMasterPondokId = async (req, res) => {
    try {
      console.log(
        "===================== LIST PONDOK BY MASTER PONDOK ID ======================="
      );

      const { masterpondokId } = req.query;

      const respon = await knex
        .raw(`call pondok_listpondok('${masterpondokId}','')`)
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== GET LIST PONDOK BY MASTER PONDOK ID ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END LIST PONDOK BY MASTER PONDOK ID ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static getListPondokById = async (req, res) => {
    try {
      console.log(
        "===================== GET LIST PONDOK BY ID ======================="
      );

      const { pondokId } = req.query;

      const respon = await knex
        .raw(`call pondok_listpondok('','${pondokId}')`)
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END LIST PONDOK BY ID ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END LIST PONDOK BY ID ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static async createPondok(req, res) {
    "===================== INSERT PONDOK =======================";
    try {
      const { files, fields } = req.fileAttrb;

      console.log("masuksini");
      const payload = {
        id: uuid.v4(),
        name: fields[0].value,
        nit: fields[1].value,
        address: fields[2].value,
        telephone: fields[3].value,
        chief: fields[4].value,
        masterpondokId: fields[5].value,
        photo: files[0].file.newFilename,
      };

      const respon = await knex
        .raw(
          `call pondok_insert('${payload.id}','${payload.name}', '${payload.nit}', '${payload.address}', '${payload.telephone}', '${payload.chief}', '${payload.photo}', '${payload.masterpondokId}', @hasil)`
        )
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END INSERT PONDOK ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END INSERT PONDOK ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  }

  static async deletePondok(req, res) {
    try {
      console.log(
        "===================== DELETE PONDOK ======================="
      );

      const { id } = req.params;
      const respon = await knex
        .raw(`call pondok_delete('${id}', @hasil)`)
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END DELETE PONDOK ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END DELETE PONDOK ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  }

  static async updatePondok(req, res) {
    const { files, fields } = req.fileAttrb;

    try {
      console.log(
        "===================== UPDATE PONDOK FILE ======================="
      );

      const { id } = req.params;

      const payload = {
        name: fields[0].value,
        nit: fields[1].value,
        address: fields[2].value,
        telephone: fields[3].value,
        chief: fields[4].value,
        photo: files[0].file.newFilename,
      };

      const respon = await knex
        .raw(
          `call pondok_update('${id}','${payload.name}', '${payload.nit}', '${payload.address}', '${payload.telephone}', '${payload.chief}', '${payload.photo}', @hasil)`
        )
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END UPDATE PONDOK FILE ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END UPDATE PONDOK FILE ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  }
  static async updatePondokNoFile(req, res) {
    try {
      console.log(
        "===================== UPDATE PONDOK NO FILE ======================="
      );

      const { id } = req.params;
      const { name, nit, address, telephone, chief } = req.body;

      const payload = {
        name,
        nit,
        address,
        telephone,
        chief,
      };

      const respon = await knex
        .raw(
          `call pondok_update('${id}','${payload.name}', '${payload.nit}', '${payload.address}', '${payload.telephone}', '${payload.chief}','', @hasil)`
        )
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END UPDATE PONDOK NO FILE ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END UPDATE PONDOK NO FILE ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  }
}
