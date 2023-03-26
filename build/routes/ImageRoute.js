"use strict";

const route = require("express").Router();
const uploadFile = require("../helpers/uploadFile");
const uploadFileUser = require("../helpers/uploadFileUser");
route.get("/:filename", uploadFile.showProductImage);
route.get("/userdata/:filename", uploadFileUser.showProductImageUser);
module.exports = route;
//# sourceMappingURL=ImageRoute.js.map