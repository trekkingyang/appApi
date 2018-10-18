'use strict';
module.exports = function(app) {
  var list = require('../controllers/listController'),
    appList = require('../controllers/appController'),
    category = require('../controllers/categoryController'),
    upload = require('../controllers/uploadController'),
    uploadFile = require('./upload/fileupload'),
    userHandlers = require('../controllers/userController.js');
  
  //获取所有item
  app.route('/list')
    .get(list.list_all);
  //获取单独app下的数据
  app.route('/appList')
    .get(list.list_app);
  //获取所有app
  app.route('/app')
    .get(appList.list_all)
    .post(appList.create_item);
  //获取详情
  app.route('/detail')
    .get(userHandlers.loginRequired,list.read_item)
    .post(userHandlers.loginRequired, list.update_item)
    .delete(userHandlers.loginRequired, list.delete_item);
  //所有的分类
  app.route('/category')
    .get(userHandlers.loginRequired,category.list_all)
    .post(userHandlers.loginRequired, category.create_item)
    .delete(userHandlers.loginRequired, category.delete_item);
  
  app.route('/auth/register')
    .post(userHandlers.register);
  
  app.route('/auth/sign_in')
    .post(userHandlers.sign_in);
  app.route('/file/upload')
    .post(uploadFile.single('avatar'),upload.upload_file);
};
