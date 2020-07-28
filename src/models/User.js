const {connection, DataTypes} = require('../config/dbConnection');

const user = connection.define('users', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        inique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
    {
        freezeTableName: true
    }
);

module.exports = user;