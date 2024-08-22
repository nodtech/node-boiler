const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // Check for roles, users and user_roles
    const [[roleCount]] = await queryInterface.sequelize.query(
      `SELECT COUNT(*) as count FROM "roles";`
    );

    if (roleCount.count > 0) return;

    // Generate UUIDs for the admin user and role
    const userId = uuidv4();
    const roleId = uuidv4();

    // Hash the dummy password
    const passwordHash = await bcrypt.hash(process.env.DEFAULT_ADMIN_PASSWORD, 10);

    // Insert the admin role into the roles table
    await queryInterface.bulkInsert('roles', [
      {
        id: roleId,
        name: 'admin',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});

    // Insert the admin user into the users table
    await queryInterface.bulkInsert('users', [
      {
        id: userId,
        name: 'admin',
        email: process.env.DEFAULT_ADMIN_EMAIL,
        password: passwordHash,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});

    // Insert the relationship into the user_roles table
    await queryInterface.bulkInsert('user_roles', [
      {
        id: uuidv4(),
        user_id: userId,
        role_id: roleId,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the admin role from the roles table
    await queryInterface.bulkDelete('roles', {
      name: 'admin'
    }, {});

    // Remove the admin user from the users table
    await queryInterface.bulkDelete('users', {
      email: process.env.DEFAULT_ADMIN_EMAIL
    }, {});

    // Remove the relationship from the user_roles table
    await queryInterface.bulkDelete('user_roles', {
      user_id: userId,
      role_id: roleId
    }, {});
  }
};
