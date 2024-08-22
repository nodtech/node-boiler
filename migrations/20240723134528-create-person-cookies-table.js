module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('person_cookies', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      person_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: 'persons',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      person_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      person_email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      value: {
        type: Sequelize.STRING,
        allowNull: true
      },
      expires: {
        type: Sequelize.DATE,
        allowNull: true
      },
      maxage: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      domain: {
        type: Sequelize.STRING,
        allowNull: true
      },
      path: {
        type: Sequelize.STRING,
        allowNull: true
      },
      secure: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      httponly: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      samesite: {
        type: Sequelize.STRING,
        allowNull: true
      },
      priority: {
        type: Sequelize.STRING,
        allowNull: true
      },
      sameparty: {
        type: Sequelize.STRING,
        allowNull: true
      },
      raw_cookie: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('person_cookies');
  }
};
