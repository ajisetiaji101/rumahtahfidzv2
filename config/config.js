const config = {
  env: process.env.NODE_ENV || "development",
  port: 8000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  URL_DOMAIN: "/mims",
  URL_IMAGE: process.env.URL_IMAGE || "/mims/images",
  URL_API: "/mims/v1/api",
  UPLOAD_DIR: "/storages",
};

export default config;
