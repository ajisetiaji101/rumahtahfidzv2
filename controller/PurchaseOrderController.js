import knex from "../config/db.js";
import parseJwt from "../helpers/parseJwt.js";

export default class PurchaseOrderController {
  static getPurchaseOrder = async (req, res) => {
    try {
      const respon = await knex.raw(
        `select * from mims_master.vw_pabrikan_monitoring_purchase_order vo order by po_mp_no desc`
      );

      const data = respon.rows;

      return res.status(200).json({ data });
    } catch (error) {
      return res.status(400).json({ data: error.message });
    }
  };

  static getPurchaseOrderDetail = async (req, res) => {
    const { nomor_po } = req.params;
    try {
      const respon = await knex.raw(
        `select * from mims_master.vw_pabrikan_monitoring_purchase_order_detail vo where vo.po_mp_no ='${nomor_po}' order by po_mp_no desc`
      );

      const data = respon.rows;

      return res.status(200).json({ data });
    } catch (error) {
      return res.status(400).json({ data: error.message });
    }
  };
}
