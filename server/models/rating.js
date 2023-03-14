module.exports = (sequelize, DataTypes) => {
    return sequelize.define('rating', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        rating: {
            type: DataTypes.DOUBLE(2,1),
            validate: {
                isFloat: true,
            },
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(200),
        },
    }, { underscored: true });
};