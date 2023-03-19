"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _db = _interopRequireDefault(require("../config/db.js"));
var _parseJwt = _interopRequireDefault(require("../helpers/parseJwt.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class PurchaseOrderController {}
exports.default = PurchaseOrderController;
_defineProperty(PurchaseOrderController, "getPurchaseOrder", async (req, res) => {
  try {
    const respon = await _db.default.raw(`select * from mims_master.vw_pabrikan_monitoring_purchase_order vo order by po_mp_no desc`);
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
_defineProperty(PurchaseOrderController, "getPurchaseOrderDetail", async (req, res) => {
  const {
    nomor_po
  } = req.params;
  try {
    const respon = await _db.default.raw(`select * from mims_master.vw_pabrikan_monitoring_purchase_order_detail vo where vo.po_mp_no ='${nomor_po}' order by po_mp_no desc`);
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
//# sourceMappingURL=PurchaseOrderController.js.map