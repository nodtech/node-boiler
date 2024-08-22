const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        static associate(models) {
            Role.belongsToMany(models.User, {
                through: 'UserRoles',
                foreignKey: 'role_id',
                otherKey: 'user_id'
            });
        }
    };

    Role.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
        }
    }, {
        sequelize,
        paranoid: true,
        timestamps: true,
        modelName: 'Role',
        tableName: 'roles',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    });

    return Role;
};
