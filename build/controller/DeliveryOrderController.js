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
class DeliveryOrderController {}
exports.default = DeliveryOrderController;
_defineProperty(DeliveryOrderController, "getDeliveryOrderDetailBypackaging", async (req, res) => {
  const {
    no_packaging
  } = req.params;
  try {
    const respon = await _db.default.raw(`select vo.no_serial , vo.tanggal_produksi , vo.spln , vo.spesifikasi ,vo.masa_garansi , vo.lead_time , vo.nomor_sert_materologi , vo.no_produksi from mims_master.vw_pabrikan_detail_serial_delivery_orders vo where no_packaging = '${no_packaging}'`);
    const result = respon.rows;
    return res.status(200).json({
      data: result
    });
  } catch (error) {
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(DeliveryOrderController, "getDeliveryOrderDetailByDo", async (req, res) => {
  const {
    no_do
  } = req.params;
  try {
    const respon = await _db.default.raw(`select distinct  vo.no_packaging , vo.no_mat_sap , vo.spesifikasi , vo.kategori from mims_master.vw_pabrikan_detail_serial_delivery_orders vo where vo.no_do_smar = '${no_do}' `);
    const result = respon.rows;
    return res.status(200).json({
      data: result
    });
  } catch (error) {
    return res.status(400).json({
      data: error.message
    });
  }
});
_defineProperty(DeliveryOrderController, "getDeliveryOrderDetailByUser", async (req, res) => {
  try {
    const tokendata = await (0, _parseJwt.default)(req);
    const in_kd_user = tokendata.plant;
    const existPlant = await _db.default.raw(`select count(*) as total from mims_master.master_plant mp  where mp.plant =  '${in_kd_user}';`);
    const resultExistPlant = parseInt(existPlant.rows[0].total);
    if (resultExistPlant == 0) {
      return res.status(400).json({
        data: "Unit tidak ada"
      });
    }
    const respon = await _db.default.raw(`select distinct vo.id,vo.no_do_smar,vo.po_mp_no,vo.po_sap_no,vo.total, vo.do_status, vo.unit, vo.no_do_mims,vo.kode_status_do_mims, vo.status_do_mims, vo.plant_code_no ,vo.kd_pabrikan from mims_master.vw_pabrikan_monitoring_delivery_orders vo where plant_code_no = '${in_kd_user}' order by vo.id desc `);
    const result = respon.rows;
    return res.status(200).json({
      data: result
    });
  } catch (error) {
    return res.status(400).json({
      data: error.message
    });
  }
});
//# sourceMappingURL=DeliveryOrderController.js.map