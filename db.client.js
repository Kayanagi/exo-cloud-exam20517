const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
    process.env.DATABASE_NAME, // Database name
    process.env.DATABASE_USERNAME, // User
    process.env.DATABASE_PASSWORD, // Password{
    {
        host: process.env.DATABASE_HOST,
        dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;