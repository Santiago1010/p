const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_monitor_events', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    eventname: {
      type: DataTypes.STRING(254),
      allowNull: false,
      defaultValue: ""
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    contextlevel: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    contextinstanceid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING(254),
      allowNull: false,
      defaultValue: ""
    },
    courseid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_monitor_events',
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
    ]
  });
};
