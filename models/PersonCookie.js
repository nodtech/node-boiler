// models/personCookie.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PersonCookie extends Model {
        static associate(models) {
            // Define many-to-one relationship
            PersonCookie.belongsTo(models.Person, {
                foreignKey: 'person_id',
                as: 'person'
            });
        }
    }
    
    PersonCookie.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        person_id: {
            type: DataTypes.UUID,
            allowNull: true,
            references: {
                model: 'Person',
                key: 'id'
            }
        },
        person_name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        person_email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        value: {
            type: DataTypes.STRING,
            allowNull: true
        },
        expires: {
            type: DataTypes.DATE,
            allowNull: true
        },
        maxage: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        domain: {
            type: DataTypes.STRING,
            allowNull: true
        },
        path: {
            type: DataTypes.STRING,
            allowNull: true
        },
        secure: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        httponly: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        samesite: {
            type: DataTypes.STRING,
            allowNull: true
        },
        priority: {
            type: DataTypes.STRING,
            allowNull: true
        },
        sameparty: {
            type: DataTypes.STRING,
            allowNull: true
        },
        raw_cookie: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        sequelize,
        paranoid: true,
        timestamps: true,
        modelName: 'PersonCookie',
        tableName: 'person_cookies',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at',
    });

    return PersonCookie;
};
