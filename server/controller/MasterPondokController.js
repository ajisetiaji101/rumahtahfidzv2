import knex from "../config/db.js";
const uuid = require("uuid");

export default class MasterPondokController {
  static countMasterPondok = async (req, res) => {
    try {
      console.log(
        "===================== COUNT MASTERPONDOK ======================="
      );

      const respon = await knex
        .raw(`call masterpondok_countmasterpondok(@hasil)`)
        .then((e) => e[0][0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } `
      );
      console.log(
        "===================== END COUNT MASTERPONDOK ======================="
      );
      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message} `
      );
      console.log(
        "===================== END COUNT MASTERPONDOK ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static getAllMasterPondokDashboard = async (req, res) => {
    try {
      console.log(
        "===================== GET ALL MASTERPONDOK DASHBOARD ======================="
      );

      const respon = await knex
        .raw(`call masterpondok_santriterbanyak()`)
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END ALL MASTERPONDOK DASHBOARD ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END ALL MASTERPONDOK DASHBOARD ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static getAllMasterPondok = async (req, res) => {
    try {
      console.log(
        "===================== GET ALL MASTERPONDOK ======================="
      );

      const respon = await knex
        .raw(`call masterpondok_lismasterpondok('')`)
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END ALL MASTERPONDOK ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END ALL MASTERPONDOK ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static getMasterPondokById = async (req, res) => {
    try {
      console.log(
        "===================== GET MASTERPONDOK BY ID ======================="
      );

      const { masterpondokId } = req.query;

      const respon = await knex
        .raw(`call masterpondok_lismasterpondok('${masterpondokId}')`)
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END MASTERPONDOK BY ID ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END MASTERPONDOK BY ID ======================="
      );

      return res.status(400).json({ data: error.message });
    }
  };

  static insertMasterpondok = async (req, res) => {
    try {
      console.log(
        "===================== INSERT MASTERPONDOK ======================="
      );

      const { files, fields } = req.fileAttrb;

      const payload = {
        id: uuid.v4(),
        name: fields[0].value,
        nit: fields[1].value,
        address: fields[2].value,
        telephone: fields[3].value,
        chief: fields[4].value,
        logo: files[0].file.newFilename,
        photo: files[1].file.newFilename,
      };

      console.log(payload);

      const respon = await knex
        .raw(
          `call masterpondok_insert(?,?,?,?,?,?,?,?, @hasil)`,
          [payload.id, payload.name, payload.nit, payload.address, payload.telephone, payload.chief, payload.logo, payload.photo]
        )
        .then((e) => e[0][0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } FUNCTION : call masterpondok_insert('${payload.id}','${
          payload.name
        }', '${payload.nit}', '${payload.address}', '${payload.telephone}', '${
          payload.chief
        }', '${payload.logo}', '${payload.photo}', @hasil)`
      );
      console.log(
        "===================== END INSERT MASTERPONDOK ======================="
      );

      if (data.hasil !== "success") {
        return res.status(500).json({ data: data.hasil });
      }

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END INSERT MASTERPONDOK ======================="
      );

      return res.status(400).json({ data: "Pastikan data terisi benar" });
    }
  };

  static async updateMasterpondok(req, res) {
    console.log(
      "===================== UPDATE MASTERPONDOK ======================="
    );
    const { files, fields } = req.fileAttrb;

    if (
      files.length === 2 &&
      files[0].fieldName === "logo" &&
      files[1].fieldName === "photo"
    ) {
      try {
        const { id } = req.params;

        const payload = {
          name: fields[0].value,
          nit: fields[1].value,
          address: fields[2].value,
          telephone: fields[3].value,
          chief: fields[4].value,
          logo: files[0].file.newFilename,
          photo: files[1].file.newFilename,
        };

        console.log(payload);

        const respon = await knex
          .raw(
            `call masterpondok_update(?,?,?,?,?,?,?,?, @hasil)`,
            [id, payload.name, payload.nit, payload.address, payload.telephone, payload.chief, payload.logo, payload.photo]
          )
          .then((e) => e[0][0][0]);

        const data = respon;

        console.log(
          `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
            req.method
          }`
        );
        console.log(
          "===================== END UPDATE MASTERPONDOK ======================="
        );

        if (data.hasil !== "success") {
          return res.status(500).json({ data: data.hasil });
        }

        return res.status(200).json({ data });
      } catch (error) {
        console.log(
          `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
            req.method
          } ERROR: ${error.message}`
        );
        console.log(
          "===================== END UPDATE MASTERPONDOK ======================="
        );

        return res.status(400).json({ data: "Pastikan Semua data benar" });
      }
    } else if (files[0].fieldName === "photo") {
      try {
        const { id } = req.params;

        const payload = {
          name: fields[0].value,
          nit: fields[1].value,
          address: fields[2].value,
          telephone: fields[3].value,
          chief: fields[4].value,
          photo: files[0].file.newFilename,
        };

        console.log(payload);

        const respon = await knex
          .raw(
            `call masterpondok_update(?,?,?,?,?,?, '', ?, @hasil)`,
            [id, payload.name, payload.nit, payload.address, payload.telephone, payload.chief, payload.photo]
          )
          .then((e) => e[0][0][0]);

        const data = respon;

        console.log(
          `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
            req.method
          }`
        );
        console.log(
          "===================== END UPDATE MASTERPONDOK ======================="
        );

        return res.status(200).json({ data });
      } catch (error) {
        console.log(
          `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
            req.method
          } ERROR: ${error.message}`
        );
        console.log(
          "===================== END UPDATE MASTERPONDOK ======================="
        );

        return res.status(400).json({ data: "Pastikan Semua data benar" });
      }
    } else if (files[0].fieldName === "logo") {
      try {
        const { id } = req.params;

        const payload = {
          name: fields[0].value,
          nit: fields[1].value,
          address: fields[2].value,
          telephone: fields[3].value,
          chief: fields[4].value,
          logo: files[0].file.newFilename,
        };

        console.log(payload);

        const respon = await knex
          .raw(
            `call masterpondok_update(?,?,?,?,?,?,?, '', @hasil)`,
            [id, payload.name, payload.nit, payload.address, payload.telephone, payload.chief, payload.logo]
          )
          .then((e) => e[0][0][0]);

        const data = respon;

        console.log(
          `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
            req.method
          }`
        );
        console.log(
          "===================== END UPDATE MASTERPONDOK ======================="
        );

        if (data.hasil !== "success") {
          return res.status(500).json({ data: data.hasil });
        }

        return res.status(200).json({ data });
      } catch (error) {
        console.log(
          `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
            req.method
          } ERROR: ${error.message}`
        );
        console.log(
          "===================== END UPDATE MASTERPONDOK ======================="
        );

        return res.status(400).json({ data: "Pastikan Semua data benar" });
      }
    }
  }

  static async updateMasterpondokNoFile(req, res) {
    try {
      const { id } = req.params;
      const { name, nit, address, telephone, chief } = req.body;

      const payload = {
        name,
        nit,
        address,
        telephone,
        chief,
      };

      console.log(payload);
      const respon = await knex
        .raw(
          `call masterpondok_update(?,?,?,?,?,?, '', '', @hasil)`,
          [id, payload.name, payload.nit, payload.address, payload.telephone, payload.chief]
        )
        .then((e) => e[0][0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END UPDATE MASTERPONDOK ======================="
      );

      if (data.hasil !== "success") {
        return res.status(500).json({ data: data.hasil });
      }

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END UPDATE MASTERPONDOK ======================="
      );

      return res.status(400).json({ data: "Pastikan Semua data benar" });
    }
  }
  static async updateMasterpondokTotalAdmin(req, res) {
    console.log(
      "===================== UPDATE MASTERPONDOK TOTAL ADMIN ======================="
    );
    try {
      const { id } = req.params;
      const { total_admin } = req.body;

      const payload = {
        total_admin,
      };

      console.log(payload);
      const respon = await knex
        .raw(
          `call masterpondok_updatetotaladmin('${id}','${total_admin}', @hasil)`
        )
        .then((e) => e[0][0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END UPDATE MASTERPONDOK TOTAL ADMIN ======================="
      );

      if (data.hasil !== "success") {
        return res.status(500).json({ data: data.hasil });
      }

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END UPDATE MASTERPONDOK ======================="
      );

      return res.status(400).json({ data: "Pastikan Semua data benar" });
    }
  }

  static async deleteMasterpondok(req, res) {
    try {
      ("===================== DELETE MASTERPONDOK =======================");

      const { id } = req.params;

      console.log("Params :", id);

      const respon = await knex
        .raw(`call masterpondok_delete('${id}', @hasil)`)
        .then((e) => e[0][0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log(
        "===================== END DELETE MASTERPONDOK ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END DELETE MASTERPONDOK ======================="
      );

      return res.status(400).json({ data: "Pastikan Semua data benar" });
    }
  }
}
