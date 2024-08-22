const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Person extends Model {
        static associate(models) {
            // Define one-to-many relationship
            Person.hasMany(models.PersonCookie, {
                foreignKey: 'person_id',
                as: 'cookies'
            });
        }
    };

    Person.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        urn: {
            type: DataTypes.STRING,
            unique: true,
        },
        status: {
            type: DataTypes.STRING,
        },
    }, {
        sequelize,
        paranoid: true,
        timestamps: true,
        modelName: 'Person',
        tableName: 'persons',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    });

    return Person;
};
