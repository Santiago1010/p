const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_monitor_subscriptions', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    courseid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ruleid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    cmid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    lastnotificationsent: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    inactivedate: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_monitor_subscriptions',
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
        name: "mdl_toolmonisubs_couuse_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
          { name: "userid" },
        ]
      },
      {
        name: "mdl_toolmonisubs_rul_ix",
        using: "BTREE",
        fields: [
          { name: "ruleid" },
        ]
      },
    ]
  });
};
