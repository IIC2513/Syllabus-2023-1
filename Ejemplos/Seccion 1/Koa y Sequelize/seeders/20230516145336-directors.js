'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Directors', [
      {
      name: 'Wes Anderson',
      nationality: 'USA',
      age: 54,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        name: 'Quentin Tarantino',
        nationality: 'USA',
        age: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Denis Villeneuve',
        nationality: 'Canada',
        age: 55,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Directors', null, {});
  }
};
