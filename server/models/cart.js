module.exports = (sequelize, DataTypes) => {
    return sequelize.define('cart', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        amount: {
            type: DataTypes.DOUBLE(5,0),
            validate: {
                isInt: true,
            },
            allowNull: false
        },
    }, { underscored: true });
};