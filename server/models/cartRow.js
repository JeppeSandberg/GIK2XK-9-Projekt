module.exports = (sequelize, DataTypes) => {
    return sequelize.define('cartRow', {
        amount: {
            type: DataTypes.INTEGER(5),
            allowNull: false
        },
    }, { underscored: true });
};