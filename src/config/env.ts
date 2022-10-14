export const env = () => ({
  port: parseInt(process.env.APP_PORT, 10) || 3333,
});
