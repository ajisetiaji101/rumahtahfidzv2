import knex from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default class UserController {
  static getUserById = async (req, res) => {
    try {
      const { username } = req.params;

      const respon = await knex.raw(
        `select * from mims_userapps.view_get_users where user_name = '${username}'`
      );
      const data = respon.rows;
      return res.status(200).json({ data });
    } catch (error) {
      return res.status(400).json({ data: error.message });
    }
  };

  static login = async (req, res, next) => {
    try {
      console.log("manggil");

      const { username, password } = req.body;

      console.log(username);

      const respon = await knex.raw(
        `select * from mims_userapps.view_get_users where user_name = '${username}'`
      );

      const infouser = respon.rows;

      console.log("info", infouser);

      const match = await bcrypt.compare(password, infouser[0].user_password);

      if (match) {
        const user_id = infouser[0].user_id;
        const user_name = infouser[0].user_name;
        const role_id = infouser[0].role_id;
        const flag_ldap = infouser[0].flag_ldap;
        const email_token = infouser[0].email_token;
        const user_active = infouser[0].user_active;
        const plant = infouser[0].plant;
        const accessToken = jwt.sign(
          {
            user_id,
            user_name,
            role_id,
            flag_ldap,
            email_token,
            user_active,
            plant,
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "1d" }
        );

        res.status(200).json({
          profile: {
            user_id,
            user_name,
            role_id,
            flag_ldap,
            email_token,
            user_active,
            plant,
          },
          token: accessToken,
        });
      } else {
        next(error);
      }
    } catch (error) {
      res.status(404).json({ data: "User dan Password Salah" });
    }
  };
}
