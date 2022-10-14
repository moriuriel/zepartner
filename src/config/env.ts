export const env = () => ({
  port: parseInt(process.env.APP_PORT, 10) || 3333,
  database: {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
    name: process.env.MONGO_DBNAME,
    host: process.env.MONGO_HOST,
    port: parseInt(process.env.MONGO_PORT, 10) || 5432,
  },
});
