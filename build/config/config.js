"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const config = {
  env: process.env.NODE_ENV || "development",
  port: 8003,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  URL_DOMAIN: "/pondok",
  URL_IMAGE: process.env.URL_IMAGE || "/pondok/images",
  URL_API: "/pondok/v1/api",
  UPLOAD_DIR: "/storages"
};
var _default = config;
exports.default = _default;
//# sourceMappingURL=config.js.map