require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

module.exports = {
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: process.env.DE_DIALECT || 'mysql',
    storage: './__tests__/database.sqlite',
    define: {
        underscored: true,
        freezeTableName: true,
        timestamps: true
    },
    logging: false,
    timezone: "-03:00",
};