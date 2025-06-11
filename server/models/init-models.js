var DataTypes = require("sequelize").DataTypes;
var _SequelizeMeta = require("./SequelizeMeta");
var _lecturers = require("./lecturers");
var _matakuliah = require("./matakuliah");
var _notifications = require("./notifications");
var _reminders = require("./reminders");
var _tasks = require("./tasks");
var _units = require("./units");
var _user_units = require("./user_units");
var _users = require("./users");

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var lecturers = _lecturers(sequelize, DataTypes);
  var matakuliah = _matakuliah(sequelize, DataTypes);
  var notifications = _notifications(sequelize, DataTypes);
  var reminders = _reminders(sequelize, DataTypes);
  var tasks = _tasks(sequelize, DataTypes);
  var units = _units(sequelize, DataTypes);
  var user_units = _user_units(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  matakuliah.belongsTo(lecturers, { as: "lecturer", foreignKey: "lecturer_id"});
  lecturers.hasMany(matakuliah, { as: "matakuliahs", foreignKey: "lecturer_id"});
  tasks.belongsTo(matakuliah, { as: "matakuliah", foreignKey: "matakuliah_id"});
  matakuliah.hasMany(tasks, { as: "tasks", foreignKey: "matakuliah_id"});
  user_units.belongsTo(units, { as: "unit", foreignKey: "unit_id"});
  units.hasMany(user_units, { as: "user_units", foreignKey: "unit_id"});
  matakuliah.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(matakuliah, { as: "matakuliahs", foreignKey: "user_id"});
  notifications.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(notifications, { as: "notifications", foreignKey: "user_id"});
  reminders.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(reminders, { as: "reminders", foreignKey: "user_id"});
  tasks.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(tasks, { as: "tasks", foreignKey: "user_id"});
  user_units.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_units, { as: "user_units", foreignKey: "user_id"});

  return {
    SequelizeMeta,
    lecturers,
    matakuliah,
    notifications,
    reminders,
    tasks,
    units,
    user_units,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
