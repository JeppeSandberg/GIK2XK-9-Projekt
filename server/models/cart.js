module.exports = (sequelize, DataTypes) => {
    return sequelize.define('cart', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
    }, { underscored: true });
};