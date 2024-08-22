const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class UserRole extends Model {
        static associate(models) {
            //
        }
    };

    UserRole.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
        },
        role_id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
        }
    }, {
        sequelize,
        paranoid: true,
        timestamps: true,
        modelName: 'UserRole',
        tableName: 'user_roles',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    });

    return UserRole;
};
