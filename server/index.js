import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import compress from "compression";
import routes from "./routes/indexRoute.js";
import knex from "./config/db.js";
import knexfile from "./config/knexfile.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// app.use(helmet());

app.use(compress());

app.use(cors({ origin: "*" }));

const PORT = process.env.PORT || 8001;

knex
  .raw("SELECT 1")
  .then(() => {
    console.log("Database connection established successfully.");
  })
  .catch((error) => {
    console.log("Failed to connect to database :", error.message);
  });

app.use(routes);

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
