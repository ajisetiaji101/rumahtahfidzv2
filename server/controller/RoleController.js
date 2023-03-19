import knex from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { json } from "express";
const uuid = require("uuid");

export default class RoleController {
  static getRoleUser = async (req, res) => {
    try {
      console.log("===================== GET ALL ROLE =======================");

      const respon = await knex.raw(`call role_getrole()`).then((e) => e[0][0]);

      const data = respon;

      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        }`
      );
      console.log("===================== END ALL ROLE =======================");

      return res.status(200).json({ data });
    } catch (error) {
      console.log(
        `${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${
          req.method
        } ERROR: ${error.message}`
      );
      console.log("===================== END ALL ROLE =======================");

      return res.status(400).json({ data: error.message });
    }
  };
}
