module.exports = {
  up: (queryInterface, Sequelize) => {
    // Add field 'avatar_id' in table 'users'
    return queryInterface.addColumn('users', 'avatar_id', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' }, // Create a foreign key reference table 'files' key 'id'
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeColumn('users', 'avatar_id');
  },
};
