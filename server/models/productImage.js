module.exports = (sequelize, DataTypes) => {
    return sequelize.define('productImage', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imageUrl: {
            type: DataTypes.STRING(255),
            validate: {
                isUrl: true
            }
        }
    }, { underscored: true });
};