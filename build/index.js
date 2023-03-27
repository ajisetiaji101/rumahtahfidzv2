"use strict";

var _express = _interopRequireDefault(require("express"));
require("dotenv/config");
var _cors = _interopRequireDefault(require("cors"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _compression = _interopRequireDefault(require("compression"));
var _IndexRoute = _interopRequireDefault(require("./routes/IndexRoute"));
var _db = _interopRequireDefault(require("./config/db.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_express.default.json());
app.use((0, _cookieParser.default)());

// app.use(helmet());

app.use((0, _compression.default)());
app.use((0, _cors.default)({
  origin: "*"
}));
const PORT = process.env.PORT || 8003;
_db.default.raw("SELECT 1").then(() => {
  console.log("Database connection established successfully.");
}).catch(error => {
  console.log("Failed to connect to database :", error.message);
});
app.use(_IndexRoute.default);
app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
//# sourceMappingURL=index.js.map