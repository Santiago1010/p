const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    ip: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    course: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    module: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    cmid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    action: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    url: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    info: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_log',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "mdl_log_coumodact_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
          { name: "module" },
          { name: "action" },
        ]
      },
      {
        name: "mdl_log_tim_ix",
        using: "BTREE",
        fields: [
          { name: "time" },
        ]
      },
      {
        name: "mdl_log_act_ix",
        using: "BTREE",
        fields: [
          { name: "action" },
        ]
      },
      {
        name: "mdl_log_usecou_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "course" },
        ]
      },
      {
        name: "mdl_log_cmi_ix",
        using: "BTREE",
        fields: [
          { name: "cmid" },
        ]
      },
    ]
  });
};
