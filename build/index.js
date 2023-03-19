"use strict";

var _express = _interopRequireDefault(require("express"));
require("dotenv/config");
var _cors = _interopRequireDefault(require("cors"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _helmet = _interopRequireDefault(require("helmet"));
var _compression = _interopRequireDefault(require("compression"));
var _indexRoute = _interopRequireDefault(require("./routes/indexRoute.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use(_express.default.urlencoded({
  extended: true
}));
app.use(_express.default.json());
app.use((0, _cookieParser.default)());
app.use((0, _helmet.default)());
app.use((0, _compression.default)());
app.use((0, _cors.default)({
  origin: "*"
}));
const PORT = process.env.PORT || 8001;
app.use(_indexRoute.default);
app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
//# sourceMappingURL=index.js.map