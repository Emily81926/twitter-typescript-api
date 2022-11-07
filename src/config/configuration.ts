export default  () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  mongodb: {
    url: `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`
  }
})