import knex from "../config/db.js";
import parseJwt from "../helpers/parseJwt.js";

export default class PenerimaanUP3Controller {
  static getPenerimaanUP3sn = async (req, res) => {
    const { no_do } = req.params;
    try {
      const respon = await knex.raw(
        `select * from mims_master.vw_pabrikan_detail_serial_delivery_orders vo where vo.no_do_smar = '${no_do}'`
      );

      const data = respon.rows;

      return res.status(200).json({ data });
    } catch (error) {
      return res.status(400).json({ data: error.message });
    }
  };
}
