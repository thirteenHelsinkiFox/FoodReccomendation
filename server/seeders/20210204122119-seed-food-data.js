'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * 
    */
    await queryInterface.bulkInsert('Food', [{
       name: 'Hamburger',
       img: 'https://unsplash.com/photos/j-MPEwH9LM4',
       temp : 26,
       createdAt :new Date(),
       updatedAt :new Date()
     },{
      name: 'Satay',
      img: 'https://unsplash.com/photos/9tuLDya614I',
      temp : 24,
      createdAt :new Date(),
      updatedAt :new Date()
     },{
      name: 'Ramen',
      img: 'https://unsplash.com/photos/RjRXzc73bEw',
      temp : 23,
      createdAt :new Date(),
      updatedAt :new Date()
     },{
      name: 'Sushi',
      img: 'https://unsplash.com/photos/RjRXzc73bEw',
      temp : 27,
      createdAt :new Date(),
      updatedAt :new Date()
     },{
      name: 'Steak',
      img: 'https://unsplash.com/photos/Et1rVF1YJe8',
      temp : 28,
      createdAt :new Date(),
      updatedAt :new Date()
     },{
      name: 'Pecel lele',
      img: 'https://cookpad.com/id/recipe/images/0fdc7d135349b2d9',
      temp : 30,
      createdAt :new Date(),
      updatedAt :new Date()
     },{
      name: 'Pempek',
      img: 'https://www.shutterstock.com/image-photo/pempek-palembang-savory-fish-cakes-spicy-1546516595',
      temp : 23,
      createdAt :new Date(),
      updatedAt :new Date()
     },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Food', null, {});
    
  }
};
