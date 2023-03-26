"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.js"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _express = require("express");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const uuid = require("uuid");
class UserSantriController {
  static async create(req, res) {
    console.log("===================== CREATE USERSANTRI =======================");
    try {
      const {
        user_id,
        santri_id
      } = req.body;
      const payload = {
        user_id,
        santri_id
      };
      console.log(payload);
      const respon = await _db.default.raw(`call usersantri_create('${payload.user_id}','${payload.santri_id}', @hasil)`).then(e => e[0][0][0]);
      const data = respon;
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call usersantri_insert('${payload.user_id}','${payload.santri_id}', @hasil)`);
      console.log("===================== END CREATE USERSANTRI  =======================");
      res.status(200).json({
        data
      });
    } catch (error) {
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
      console.log("===================== END CREATE USERSANTRI  =======================");
      return res.status(404).json({
        data: error.message
      });
    }
  }
  static async delete(req, res) {
    console.log("===================== DELETE USERSANTRI =======================");
    try {
      const {
        user_id,
        santri_id
      } = req.body;
      const payload = {
        user_id,
        santri_id
      };
      console.log(payload);
      const respon = await _db.default.raw(`call usersantri_delete('${payload.user_id}','${payload.santri_id}', @hasil)`).then(e => e[0][0][0]);
      const data = respon;
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call usersantri_delete('${payload.user_id}','${payload.santri_id}', @hasil)`);
      console.log("===================== END DELETE USERSANTRI  =======================");
      res.status(200).json({
        data
      });
    } catch (error) {
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
      console.log("===================== END DELETE USERSANTRI  =======================");
      return res.status(404).json({
        data: error.message
      });
    }
  }
  static async getByUserId(req, res) {
    console.log("===================== GET USERSANTRI BY USER ID =======================");
    try {
      const {
        id
      } = req.params;
      const payload = {
        id
      };
      console.log(payload);
      const respon = await _db.default.raw(`call usersantri_getbyusersantri('${payload.id}')`).then(e => e[0][0]);
      const data = respon;
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call usersantri_getbyusersantri('${payload.id}'),'${payload.santri_id}', @hasil)`);
      console.log("===================== END GET USERSANTRI BY USER ID  =======================");
      res.status(200).json({
        data
      });
    } catch (error) {
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
      console.log("===================== END GET USERSANTRI BY USER ID  =======================");
      return res.status(404).json({
        data: error.message
      });
    }
  }
  static async getByHafalanIqroId(req, res) {
    console.log("===================== GET USERSANTRI BY HAFALAN IQRO ID =======================");
    try {
      const {
        id
      } = req.params;
      const payload = {
        id
      };
      console.log(payload);
      const respon = await _db.default.raw(`call usersantri_getbyhafalaniqro('${payload.id}')`).then(e => e[0][0]);
      const data = respon;
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call usersantri_getbyhafalaniqro('${payload.id}'),'${payload.santri_id}', @hasil)`);
      console.log("===================== END GET USERSANTRI BY HAFALAN IQRO ID  =======================");
      res.status(200).json({
        data
      });
    } catch (error) {
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
      console.log("===================== END GET USERSANTRI BY HAFALAN IQRO ID  =======================");
      return res.status(404).json({
        data: error.message
      });
    }
  }
  static async getByHafalanSurahPendekId(req, res) {
    console.log("===================== GET USERSANTRI BY HAFALAN SURAH PENDEK ID =======================");
    try {
      const {
        id
      } = req.params;
      const payload = {
        id
      };
      console.log(payload);
      const respon = await _db.default.raw(`call usersantri_getbyhafalansurahpendek('${payload.id}')`).then(e => e[0][0]);
      const data = respon;
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call usersantri_getbyhafalansurahpendek('${payload.id}'),'${payload.santri_id}', @hasil)`);
      console.log("===================== END GET USERSANTRI BY HAFALAN SURAH PENDEK ID  =======================");
      res.status(200).json({
        data
      });
    } catch (error) {
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
      console.log("===================== END GET USERSANTRI BY HAFALAN SURAH PENDEK ID  =======================");
      return res.status(404).json({
        data: error.message
      });
    }
  }
  static async getByHafalanAlquranId(req, res) {
    console.log("===================== GET USERSANTRI BY HAFALAN ALQURAN ID =======================");
    try {
      const {
        id
      } = req.params;
      const payload = {
        id
      };
      console.log(payload);
      const respon = await _db.default.raw(`call usersantri_getbyhafalanalquran('${payload.id}')`).then(e => e[0][0]);
      const data = respon;
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} FUNCTION : call usersantri_getbyhafalanalquran('${payload.id}'),'${payload.santri_id}', @hasil)`);
      console.log("===================== END GET USERSANTRI BY HAFALAN ALQURAN ID  =======================");
      res.status(200).json({
        data
      });
    } catch (error) {
      console.log(`${new Date()}  IP :  ${req.socket.remoteAddress}  METHOD:  ${req.method} ERROR: ${error.message}`);
      console.log("===================== END GET USERSANTRI BY HAFALAN ALQURAN ID  =======================");
      return res.status(404).json({
        data: error.message
      });
    }
  }
}
exports.default = UserSantriController;
//# sourceMappingURL=UserSantriController.js.map