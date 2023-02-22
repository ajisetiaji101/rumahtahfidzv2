import knex from "../config/db.js";
import parseJwt from "../helpers/parseJwt.js";

export default class DeliveryOrderController {
  static getDeliveryOrderDetailBypackaging = async (req, res) => {
    const { no_packaging } = req.params;

    try {
      const respon = await knex.raw(
        `select vo.no_serial , vo.tanggal_produksi , vo.spln , vo.spesifikasi ,vo.masa_garansi , vo.lead_time , vo.nomor_sert_materologi , vo.no_produksi from mims_master.vw_pabrikan_detail_serial_delivery_orders vo where no_packaging = '${no_packaging}'`
      );

      const result = respon.rows;

      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ data: error.message });
    }
  };

  static getDeliveryOrderDetailByDo = async (req, res) => {
    const { no_do } = req.params;

    try {
      const respon = await knex.raw(
        `select distinct  vo.no_packaging , vo.no_mat_sap , vo.spesifikasi , vo.kategori from mims_master.vw_pabrikan_detail_serial_delivery_orders vo where vo.no_do_smar = '${no_do}' `
      );

      const result = respon.rows;

      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ data: error.message });
    }
  };

  static getDeliveryOrderDetailByUser = async (req, res) => {
    try {
      const tokendata = await parseJwt(req);

      const in_kd_user = tokendata.plant;

      const existPlant = await knex.raw(
        `select count(*) as total from mims_master.master_plant mp  where mp.plant =  '${in_kd_user}';`
      );

      const resultExistPlant = parseInt(existPlant.rows[0].total);

      if (resultExistPlant == 0) {
        return res.status(400).json({ data: "Unit tidak ada" });
      }

      const respon = await knex.raw(
        `select distinct vo.id,vo.no_do_smar,vo.po_mp_no,vo.po_sap_no,vo.total, vo.do_status, vo.unit, vo.no_do_mims,vo.kode_status_do_mims, vo.status_do_mims, vo.plant_code_no ,vo.kd_pabrikan from mims_master.vw_pabrikan_monitoring_delivery_orders vo where plant_code_no = '${in_kd_user}' order by vo.id desc `
      );

      const result = respon.rows;

      return res.status(200).json({ data: result });
    } catch (error) {
      return res.status(400).json({ data: error.message });
    }
  };
}
