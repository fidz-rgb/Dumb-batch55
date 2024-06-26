var DataTypes = require("sequelize").DataTypes;
var _CollectionsTb = require("./CollectionsTb");
var _TaskTb = require("./TaskTb");
var _UsersTb = require("./UsersTb");

function initModels(sequelize) {
  var CollectionsTb = _CollectionsTb(sequelize, DataTypes);
  var TaskTb = _TaskTb(sequelize, DataTypes);
  var UsersTb = _UsersTb(sequelize, DataTypes);


  return {
    CollectionsTb,
    TaskTb,
    UsersTb,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
