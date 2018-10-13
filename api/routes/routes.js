'use strict';
module.exports = function(app) {
  var list = require('../controllers/listController'),
    category = require('../controllers/categoryController'),
    userHandlers = require('../controllers/userController.js');
  
  // todoList Routes
  app.route('/list')
    .get(list.list_all);
  
  app.route('/list/:id')
    .get(list.read_item)
    .post(userHandlers.loginRequired, list.update_item)
    .delete(userHandlers.loginRequired, list.delete_item);
  
  app.route('/category')
    .get(category.list_all)
    .post(userHandlers.loginRequired, category.create_item)
    .delete(userHandlers.loginRequired, category.delete_item);
  
  app.route('/auth/register')
    .post(userHandlers.register);
  
  app.route('/auth/sign_in')
    .post(userHandlers.sign_in)
};
