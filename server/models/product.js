module.exports = (sequelize, DataTypes) => {
    return sequelize.define('product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE(6,2),
            validate: {
                isFloat: true,
            },
            allowNull: false
        },
    }, { underscored: true });
};