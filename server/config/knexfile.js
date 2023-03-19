// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

export default {
  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3'
  //   }
  // },

  development: {
    client: "mysql",
    connection: {
      host: process.env.DBHOST,
      port: process.env.PORT,
      database: process.env.DBDATABASE,
      user: process.env.DBUSER,
      password: process.env.DBPASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  // production: {
  //   client: "mysql",
  //   connection: {
  //     host: process.env.DBHOST,
  //     port: process.env.PORT,
  //     database: process.env.DBDATABASE,
  //     user: process.env.DBUSER,
  //     password: process.env.DBPASSWORD,
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: "knex_migrations",
  //   },
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }
};
