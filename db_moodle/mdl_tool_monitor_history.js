const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_monitor_history', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timesent: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_monitor_history',
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
        name: "mdl_toolmonihist_sidusetim_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "sid" },
          { name: "userid" },
          { name: "timesent" },
        ]
      },
      {
        name: "mdl_toolmonihist_sid_ix",
        using: "BTREE",
        fields: [
          { name: "sid" },
        ]
      },
    ]
  });
};
