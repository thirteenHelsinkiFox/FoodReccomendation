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
       img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=902&q=80',
       temp : 26,
       createdAt :new Date(),
       updatedAt :new Date()
     },{
      name: 'Satay',
      img: 'https://images.unsplash.com/photo-1603088549155-6ae9395b928f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      temp : 24,
      createdAt :new Date(),
      updatedAt :new Date()
     },{
      name: 'Ramen',
      img: 'https://images.unsplash.com/photo-1571531900150-474b57bf1658?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1575&q=80',
      temp : 23,
      createdAt :new Date(),
      updatedAt :new Date()
     },{
      name: 'Sushi',
      img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80',
      temp : 27,
      createdAt :new Date(),
      updatedAt :new Date()
     },{
      name: 'Steak',
      img: 'https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
      temp : 28,
      createdAt :new Date(),
      updatedAt :new Date()
     },{
      name: 'Pecel lele',
      img: 'https://img-global.cpcdn.com/recipes/0fdc7d135349b2d9/640x640sq70/photo.webp',
      temp : 30,
      createdAt :new Date(),
      updatedAt :new Date()
     },{
      name: 'Pempek',
      img: 'https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/07/01/3586804395.jpg',
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
