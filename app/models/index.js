const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize({
    database:dbConfig.database,
    username: dbConfig.username,
    password:dbConfig.password,
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    dialectOptions: {
        ssl: {
            require: true, // This will help you. But you will see nwe error
            rejectUnauthorized: false // This line will fix new error
        }
    },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tradies = require("./tradie.model.js")(sequelize, Sequelize);
module.exports = db;
