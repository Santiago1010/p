const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_monitor_rules', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    descriptionformat: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(254),
      allowNull: false,
      defaultValue: ""
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    courseid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    plugin: {
      type: DataTypes.STRING(254),
      allowNull: false,
      defaultValue: ""
    },
    eventname: {
      type: DataTypes.STRING(254),
      allowNull: false,
      defaultValue: ""
    },
    template: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    templateformat: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    frequency: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    timewindow: {
      type: DataTypes.MEDIUMINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_monitor_rules',
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
        name: "mdl_toolmonirule_couuse_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
          { name: "userid" },
        ]
      },
      {
        name: "mdl_toolmonirule_eve_ix",
        using: "BTREE",
        fields: [
          { name: "eventname" },
        ]
      },
    ]
  });
};
