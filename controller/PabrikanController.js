import knex from "../config/db.js";

export default class PabrikanController {
  static getDataNoParam = async (req, res) => {
    try {
      // const { id } = req.params;
      const respon = await knex.raw(
        `begin; \n select mims_master.pabrikan_func_getallpabrikansatu('mycursor'); \n fetch all in "mycursor"; COMMIT;end;`
      );

      const data = respon[2].rows;
      // .select("")
      // .from("mims_master.pabrikan_func_getallpabrikan")
      // .timeout(1000);

      return res.status(200).json({ data });
    } catch (error) {
      return res.status(400).json({ data: error.message });
    }
  };
}
