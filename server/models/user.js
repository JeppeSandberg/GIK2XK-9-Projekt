module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING(200),
            validate: {
                len: [4,200],
                isEmail: true
            },

        },
        firstName: DataTypes.STRING(50),
        lastName: DataTypes.STRING(50),

        password: {
            type: DataTypes.STRING(50),
            validate: {
                len: [6,50],
            },
            allowNull: false
        },

        imageUrl: {
            type: DataTypes.STRING(255),
            validate: {
                isUrl: true
            }
        }
    }, { underscored: true });
};