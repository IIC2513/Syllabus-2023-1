'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies', [
      {
        title: 'The Grand Budapest Hotel',
        genre: 'Adventure',
        description: 'A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotels glorious years under an exceptional concierge.',
        rating: 8.1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Isle of Dogs',
        genre: 'Animation',
        description: 'Set in Japan, Isle of Dogs follows a boys odyssey in search of his lost dog.',
        rating: 7.9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Pulp Fiction',
        genre: 'Crime',
        description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        rating: 8.9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Reservoir Dogs',
        genre: 'Crime',
        description: 'When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.',
        rating: 8.3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Blade Runner 2049',
        genre: 'Action',
        description: 'Young Blade Runner Ks discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, whos been missing for thirty years.',
        rating: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Arrival',
        genre: 'Drama',
        description: 'A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecrafts appear around the world.',
        rating: 7.9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});
  }
};
