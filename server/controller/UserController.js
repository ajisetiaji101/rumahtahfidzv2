import knex from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { json } from "express";
const uuid = require("uuid");

export default class UserController {
  static login = async (req, res, next) => {
    try {
      console.log("===================== GET LOGIN =======================");
      const { email, password } = req.body;

      const respon = await knex
        .raw(`select * from vw_user_profile where email = '${email}'`)
        .then((e) => e[0][0])
        .catch((err) => err);

      const infouser = respon;

      const match = await bcrypt.compare(password, infouser.password);

      console.log(match);

      if (match) {
        const userId = infouser.id;
        const name = infouser.name;
        const email = infouser.email;
        const role = infouser.role_id;
        const roleName = infouser.role_name;
        const photo = infouser.photo;
        const logotahfidz = infouser.logo_master;
        const pondokId = infouser.pondok_id;
        const masterpondokId = infouser.masterpondok_id;
        const accessToken = jwt.sign(
          {
            userId,
            name,
            email,
            role,
            photo,
            roleName,
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "1d" }
        );

        console.log(
          `${new Date()} ${new Date()}  IP :  ${
            req.socket.remoteAddress
          }  METHOD:  ${
            req.method
          } FUNCTION : select * from vw_user_profile where email = '${email}'`
        );
        console.log(
          "===================== END LOGIN USER ======================="
        );

        res.status(200).json({
          profile: {
            userId,
            name,
            email,
            role,
            photo,
            logotahfidz,
            roleName,
            pondokId,
            masterpondokId,
          },
          token: accessToken,
        });
      } else {
        next(error);
      }
    } catch (error) {
      console.log(
        `${new Date()} IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${req.message}`
      );
      console.log("===================== END ALL USER =======================");

      res.status(404).json({ data: "User dan Password Salah" });
    }
  };

  static getAllUser = async (req, res) => {
    try {
      console.log("===================== GET ALL USER =======================");

      const respon = await knex
        .raw(`call user_getusers('','','','')`)
        .then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log("===================== END ALL USER =======================");

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log("===================== END ALL USER =======================");

      return res.status(400).json({ data: error.message });
    }
  };

  static getUserById = async (req, res) => {
    try {
      console.log(
        "===================== GET USER BY ID ======================="
      );

      const { id } = req.params;

      const respon = await knex
        .raw(`call user_getusers('${id}','','','')`)
        .then((e) => e[0][0]);
      const data = respon;
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } PARAMS: ${id}`
      );
      console.log(
        "===================== END USER BY ID ======================="
      );

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log("===================== END ALL USER =======================");

      return res.status(400).json({ data: error.message });
    }
  };

  static async getUserByRumahTahfidz(req, res) {
    try {
      console.log(
        "===================== GET USER BY RUMAH TAHFIDZ ======================="
      );
      const { id } = req.params;

      const respon = await knex
        .raw(`call user_getusers('','${id}','','')`)
        .then((e) => e[0][0]);
      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } PARAMS: ${id}`
      );
      console.log(
        "===================== END USER BY RUMAH TAHFIDZ ======================="
      );

      res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END USER BY RUMAH TAHFIDZ ======================="
      );
      return res.status(400).json({ data: "Data tidak ditemukan" });
    }
  }

  static async getUserByMasterTahfidz(req, res) {
    try {
      console.log(
        "===================== GET USER BY MASTER TAHFIDZ ======================="
      );
      const { id } = req.params;

      const respon = await knex
        .raw(`call user_getusers('','','${id}','')`)
        .then((e) => e[0][0]);
      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } PARAMS: ${id}`
      );
      console.log(
        "===================== END USER BY MASTER TAHFIDZ  ======================="
      );

      res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END USER BY MASTER TAHFIDZ  ======================="
      );

      return res.status(400).json({ data: "Data tidak ditemukan" });
    }
  }

  static async getUserByRoleId(req, res) {
    try {
      console.log(
        "===================== GET USER BY ROLE ID ======================="
      );
      const { id } = req.params;

      const respon = await knex
        .raw(`call user_getusers('','','','${id}')`)
        .then((e) => e[0][0]);
      const data = respon;

      res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END USER BY ROLE ID  ======================="
      );
      return res.status(400).json({ data: "Data tidak ditemukan" });
    }
  }

  static async getUserByRoleMaterAdmin(req, res) {
    try {
      console.log(
        "===================== GET USER BY MASTER ADMIN AND ADMIN ======================="
      );
      const { id } = req.params;

      const respon = await knex
        .raw(`call user_getrolemasterandadmin()`)
        .then((e) => e[0][0]);
      const data = respon;

      res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END USER BY MASTER ADMIN AND ADMIN  ======================="
      );
      return res.status(400).json({ data: "Data tidak ditemukan" });
    }
  }

  static async createUser(req, res) {
    try {
      console.log("===================== CREATE USER =======================");
      const { files, fields } = req.fileAttrb;

      const password = fields[2].value;
      const hashPassword = bcrypt.hashSync(password, 10);

      const payload = {
        id: uuid.v4(),
        name: fields[0].value,
        email: fields[1].value,
        password: hashPassword,
        telephone: fields[3].value,
        address: fields[4].value,
        datebirth: fields[5].value,
        age: fields[6].value,
        gender: fields[7].value,
        roleId: fields[8].value,
        pondokId: fields[9].value,
        photo: files[0].file.newFilename,
      };

      const respon = await knex
        .raw(
          `call user_insertuser('${payload.id}','${payload.name}','${payload.email}','${payload.password}','${payload.telephone}','${payload.address}','${payload.age}','${payload.datebirth}','${payload.gender}','${payload.photo}','','${payload.roleId}','${payload.pondokId}', @hasil)`
        )
        .then((e) => e[0][0][0]);
      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } FUNCTION : call user_insertuser('${payload.id}','${payload.name}','${
          payload.email
        }','${payload.password}','${payload.telephone}','${payload.address}','${
          payload.age
        }','${payload.datebirth}','${payload.gender}','${payload.photo}','','${
          payload.roleId
        }','${payload.pondokId}', @hasil)`
      );
      console.log(
        "===================== END CREATE USER ======================="
      );

      if (data.hasil !== "success") {
        return res.status(500).json({ data: data.hasil });
      }

      res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END CREATE USER  ======================="
      );

      return res.status(404).json({ data: "Harap periksa kembali" });
    }
  }

  static async createNoFileUser(req, res) {
    console.log(
      "===================== CREATE USER TANPA GAMBAR ======================="
    );
    try {
      const {
        name,
        email,
        password,
        telephone,
        address,
        datebirth,
        gender,
        age,
        roleId,
        pondokId,
      } = req.body;

      const hashPassword = bcrypt.hashSync(password, 10);

      const payload = {
        id: uuid.v4(),
        name,
        email,
        password: hashPassword,
        telephone,
        address,
        datebirth,
        age,
        gender,
        roleId,
        pondokId,
      };

      console.log(payload);

      const respon = await knex
        .raw(
          `call user_insertuser('${payload.id}','${payload.name}','${payload.email}','${payload.password}','${payload.telephone}','${payload.address}','${payload.age}','${payload.datebirth}','${payload.gender}','','','${payload.roleId}','${payload.pondokId}', @hasil)`
        )
        .then((e) => e[0][0][0]);
      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } FUNCTION : call user_insertuser('${payload.id}','${payload.name}','${
          payload.email
        }','${payload.password}','${payload.telephone}','${payload.address}','${
          payload.age
        }','${payload.datebirth}','${payload.gender}','','','${
          payload.roleId
        }','${payload.pondokId}', @hasil)`
      );
      console.log(
        "===================== END CREATE USER TANPA GAMBAR  ======================="
      );

      if (data.hasil !== "success") {
        return res.status(500).json({ data: data.hasil });
      }

      res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END CREATE USER TANPA GAMBAR  ======================="
      );
      return res.status(404).json({ data: "Harap periksa kembali" });
    }
  }

  static async updateNoFileUser(req, res) {
    console.log(
      "===================== UPDATE USER TANPA GAMBAR ======================="
    );
    try {
      const {
        name,
        email,
        password,
        telephone,
        address,
        datebirth,
        gender,
        age,
        roleId,
        pondokId,
      } = req.body;

      if (password.length > 2) {
        const hashPassword = bcrypt.hashSync(password, 10);
        const payload = {
          name,
          email,
          password: hashPassword,
          telephone,
          address,
          datebirth,
          gender,
          age,
          roleId,
          pondokId,
        };

        console.log(payload);

        const respon = await knex
          .raw(
            `call user_updateuser('${req.params.id}','${payload.name}','${payload.email}','${payload.password}','${payload.telephone}','${payload.address}','${payload.age}','${payload.datebirth}','${payload.gender}','','${payload.roleId}','${payload.pondokId}', @hasil)`
          )
          .then((e) => e[0][0][0]);
        const data = respon;

        console.log(
          "===================== END UPDATE USER TANPA GAMBAR  ======================="
        );

        if (data.hasil !== "success") {
          return res.status(500).json({ data: data.hasil });
        }

        return res.status(200).json({ data });
      } else {
        const payload = {
          name,
          email,
          telephone,
          address,
          datebirth,
          gender,
          age,
          roleId,
          pondokId,
        };

        console.log(payload);

        const respon = await knex
          .raw(
            `call user_updateuser('${req.params.id}','${payload.name}','${payload.email}','','${payload.telephone}','${payload.address}','${payload.age}','${payload.datebirth}','${payload.gender}','','${payload.roleId}','${payload.pondokId}', @hasil)`
          )
          .then((e) => e[0][0][0]);
        const data = respon;

        console.log(
          "===================== END UPDATE USER TANPA GAMBAR  ======================="
        );
        if (data.hasil !== "success") {
          return res.status(500).json({ data: data.hasil });
        }

        return res.status(200).json({ data });
      }
    } catch (error) {
      return res.status(404).json({ data: error.message });
    }
  }

  static async updateUser(req, res) {
    console.log(
      "===================== UPDATE USER WITH IMAGE ======================="
    );
    try {
      const { id } = req.params;
      const { files, fields } = req.fileAttrb;

      if (fields[2].value.length > 2) {
        const password = fields[2].value;
        const hashPassword = bcrypt.hashSync(password, 10);

        const payload = {
          name: fields[0].value,
          email: fields[1].value,
          password: hashPassword,
          telephone: fields[3].value,
          address: fields[4].value,
          datebirth: fields[5].value,
          age: fields[6].value,
          gender: fields[7].value,
          roleId: fields[8].value,
          pondokId: fields[9].value,
          photo: files[0].file.newFilename,
        };

        console.log(payload);

        const respon = await knex
          .raw(
            `call user_updateuser('${id}','${payload.name}','${payload.email}','${payload.password}','${payload.telephone}','${payload.address}','${payload.age}','${payload.datebirth}','${payload.gender}','${payload.photo}','${payload.roleId}','${payload.pondokId}', @hasil)`
          )
          .then((e) => e[0][0][0]);
        const data = respon;

        console.log(
          "===================== END UPDATE USER WITH IMAGE  ======================="
        );

        if (data.hasil !== "success") {
          return res.status(500).json({ data: data.hasil });
        }

        return res.status(200).json({ data });
      } else {
        const payload = {
          name: fields[0].value,
          email: fields[1].value,
          telephone: fields[3].value,
          address: fields[4].value,
          datebirth: fields[5].value,
          age: fields[6].value,
          gender: fields[7].value,
          roleId: fields[8].value,
          pondokId: fields[9].value,
          photo: files[0].file.newFilename,
        };

        console.log(payload);

        const respon = await knex
          .raw(
            `call user_updateuser('${id}','${payload.name}','${payload.email}','','${payload.telephone}','${payload.address}','${payload.age}','${payload.datebirth}','${payload.gender}','${payload.photo}','${payload.roleId}','${payload.pondokId}', @hasil)`
          )
          .then((e) => e[0][0][0]);

        const data = respon;

        console.log(
          "===================== END UPDATE USER WITH IMAGE  ======================="
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
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END UPDATE USER WITH IMAGE  ======================="
      );

      return res.status(404).json({ data: "Harap diperiksa kembali" });
    }
  }

  static async deleteUser(req, res) {
    console.log(
      "===================== DELETE USER BY ID ======================="
    );
    try {
      const { id } = req.params;

      const respon = await knex
        .raw(`call user_deleteuser('${id}', @hasil)`)
        .then((e) => e[0][0][0]);
      const data = respon;

      if (data.hasil == "success") {
        console.log(
          `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
            req.method
          } `
        );
        console.log(
          "===================== END DELETE USER BY ID ======================="
        );

        return res.status(200).json({ data });
      } else {
        console.log(
          `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
            req.method
          } `
        );
        console.log(
          "===================== END DELETE USER BY ID ======================="
        );

        return res.status(404).json({ data: { hasil: "ID Tidak Ditemukan" } });
      }
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log(
        "===================== END DELETE USER BY ID ======================="
      );
      return res.status(404).json({ data: error.message });
    }
  }

  static async createUserSantri(req, res) {
    try {
      const { files, fields } = req.fileAttrb;

      const password = fields[2].value;
      const hashPassword = bcrypt.hashSync(password, 10);

      const payload = {
        id: fields[10].value,
        name: fields[0].value,
        email: fields[1].value,
        password: hashPassword,
        telephone: fields[3].value,
        address: fields[4].value,
        datebirth: fields[5].value,
        age: fields[6].value,
        gender: fields[7].value,
        roleId: fields[8].value,
        pondokId: fields[9].value,
        photo: files[0].file.newFilename,
      };

      const respon = await knex
        .raw(
          `call user_insertuser('${payload.id}','${payload.name}','${payload.email}','${payload.password}','${payload.telephone}','${payload.address}','${payload.age}','${payload.datebirth}','${payload.gender}','${payload.photo}','','${payload.roleId}','${payload.pondokId}', @hasil)`
        )
        .then((e) => e[0][0][0]);
      const data = respon;

      if (data.hasil !== "success") {
        return res.status(500).json({ data: data.hasil });
      }

      res.status(200).json({ data });
    } catch (error) {
      return res.status(404).json({ data: error.message });
    }
  }

  static async createNoFileUserSantri(req, res) {
    try {
      const {
        id,
        name,
        email,
        password,
        telephone,
        address,
        datebirth,
        gender,
        age,
        roleId,
        pondokId,
      } = req.body;

      const hashPassword = bcrypt.hashSync(password, 10);

      const payload = {
        id,
        name,
        email,
        password: hashPassword,
        telephone,
        address,
        datebirth,
        age,
        gender,
        roleId,
        pondokId,
      };

      const respon = await knex
        .raw(
          `call user_insertuser('${payload.id}','${payload.name}','${payload.email}','${payload.password}','${payload.telephone}','${payload.address}','${payload.age}','${payload.datebirth}','${payload.gender}','','','${payload.roleId}','${payload.pondokId}', @hasil)`
        )
        .then((e) => e[0][0][0]);
      const data = respon;

      if (data.hasil !== "success") {
        return res.status(500).json({ data: data.hasil });
      }

      res.status(200).json({ data });
    } catch (error) {
      return res.status(404).json({ data: error.message });
    }
  }

  static async updateUserSantri(req, res) {
    try {
      const { id } = req.params;
      const { userId } = req.body;

      const payload = {
        id,
        userId,
      };

      const respon = await knex
        .raw(
          `call santri_updateusersantri('${payload.id}','${payload.userId}', @hasil)`
        )
        .then((e) => e[0][0]);
      const data = respon;

      res.status(200).json({ data });
    } catch (error) {
      return res.status(404).json({ data: error.message });
    }
  }
}
