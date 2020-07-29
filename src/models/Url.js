const { connection, DataTypes } = require('../config/dbConnection');
const user = require('./User');

const url = connection.define('urls', {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    original: {
        type: DataTypes.STRING,
        allowNull: false
    },
    clicks: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        }
    }
},
    {
        freezeTableName: true
    }
);

user.hasMany(url, {
    onDelete: 'cascade'
});

url.belongsTo(user);

module.exports = url;