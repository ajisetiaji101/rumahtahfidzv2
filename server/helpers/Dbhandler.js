import knex from "../config/db.js";

async function Dbhandler(fungsi, obj) {
  await knex
    .raw(fungsi, obj)
    .then((e) => e[0][0])
    .catch((err) => err);
}

export default Dbhandler;
