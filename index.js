import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import compress from "compression";
import routes from "./routes/indexRoute.js";
import bodyParser from "body-parser";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(helmet());

app.use(compress());

app.use(cors({ origin: "*" }));

(bodyParser = require("body-parser")),
  (swaggerJsdoc = require("swagger-jsdoc")),
  (swaggerUi = require("swagger-ui-express"));

const PORT = process.env.PORT || 8001;

app.use(routes);

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
