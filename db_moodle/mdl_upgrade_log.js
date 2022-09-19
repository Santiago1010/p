const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_upgrade_log', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    plugin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    version: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    targetversion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    info: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    backtrace: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_upgrade_log',
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
        name: "mdl_upgrlog_tim_ix",
        using: "BTREE",
        fields: [
          { name: "timemodified" },
        ]
      },
      {
        name: "mdl_upgrlog_typtim_ix",
        using: "BTREE",
        fields: [
          { name: "type" },
          { name: "timemodified" },
        ]
      },
      {
        name: "mdl_upgrlog_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
