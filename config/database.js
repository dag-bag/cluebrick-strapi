module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "127.0.0.1"),
      port: env.int("PGPORT", 5432),
      database: env("PGDATABASE", "strapi"),
      user: env("PGUSER", "strapi"),
      password: env("PGPASSWORD", "password"),
      ssl: true,
    },
  },
});

// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env("PGHOST", "containers-us-west-40.railway.app"),
//       port: env.int("PGPORT", 7371),
//       database: env("PGDATABASE", "railway"),
//       user: env("PGUSER", "postgres"),
//       password: env("PGPASSWORD", "cto0yj35MQD0kJdelTj0"),
//       ssl: env.bool(true),
//     },
//   },
// });
