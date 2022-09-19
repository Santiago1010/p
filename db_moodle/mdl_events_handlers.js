const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_events_handlers', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    eventname: {
      type: DataTypes.STRING(166),
      allowNull: false,
      defaultValue: ""
    },
    component: {
      type: DataTypes.STRING(166),
      allowNull: false,
      defaultValue: ""
    },
    handlerfile: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    handlerfunction: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    schedule: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    internal: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'mdl_events_handlers',
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
        name: "mdl_evenhand_evecom_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "eventname" },
          { name: "component" },
        ]
      },
    ]
  });
};
