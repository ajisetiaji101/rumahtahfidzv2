"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.js"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class UserController {}
exports.default = UserController;
_defineProperty(UserController, "getUserById", async (req, res) => {
  try {
    const {
      username
    } = req.params;
    const respon = await _db.default.raw(`select * from mims_userapps.view_get_users where user_name = '${username}'`);
    const data = respon.rows;
    return res.status(200).json({
      data
    });
  } catch (error) {
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(UserController, "getAllUser", async (req, res) => {
  try {
    const respon = await _db.default.raw(`call getalluser()`).then(e => e[0][0]);
    return res.status(200).json({
      data: respon
    });
  } catch (error) {
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(UserController, "login", async (req, res, next) => {
  try {
    console.log("manggil");
    const {
      email,
      password
    } = req.body;
    console.log(username);
    const respon = await _db.default.raw(`select * from users = '${email}'`);
    const infouser = respon.rows;
    console.log("info", infouser);
    res.status(200).json({
      data: respon
    });

    // const match = await bcrypt.compare(password, infouser[0].password);

    // if (match) {
    //   const userId = user[0].id;
    //   const name = user[0].name;
    //   const email = user[0].email;
    //   const role = user[0].roleId;
    //   const roleName = user[0].Role.name;
    //   const photo = user[0].photo;
    //   const logotahfidz = user[0].Pondok.Masterpondok.logo;
    //   const pondokId = user[0].pondokId;
    //   const masterpondokId = user[0].Pondok.masterpondokId;
    //   const accessToken = jwt.sign(
    //     {
    //       userId,
    //       name,
    //       email,
    //       role,
    //       photo,
    //       logotahfidz,
    //       roleName,
    //     },
    //     process.env.ACCESS_TOKEN_SECRET,
    //     { expiresIn: "1d" }
    //   );

    //   res.status(200).json({
    //     profile: {
    //       userId,
    //       name,
    //       email,
    //       role,
    //       photo,
    //       logotahfidz,
    //       roleName,
    //     },
    //     token: accessToken,
    //   });
    // } else {
    //   next(error);
    // }
  } catch (error) {
    res.status(404).json({
      data: "User dan Password Salah"
    });
  }
});
//# sourceMappingURL=UserController.js.map