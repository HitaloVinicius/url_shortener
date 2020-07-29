const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('./database');

const connection = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    define: dbConfig.define,
    logging: dbConfig.logging,
    timezone: dbConfig.timezone,

});

module.exports = { connection, DataTypes };