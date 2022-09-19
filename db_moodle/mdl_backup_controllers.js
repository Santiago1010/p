const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_backup_controllers', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    backupid: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: "",
      unique: "mdl_backcont_bac_uix"
    },
    operation: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "backup"
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    format: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    interactive: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    purpose: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    status: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    execution: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    executiontime: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    checksum: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    progress: {
      type: DataTypes.DECIMAL(15,14),
      allowNull: false,
      defaultValue: 0.00000000000000
    },
    controller: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_backup_controllers',
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
        name: "mdl_backcont_bac_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "backupid" },
        ]
      },
      {
        name: "mdl_backcont_typite_ix",
        using: "BTREE",
        fields: [
          { name: "type" },
          { name: "itemid" },
        ]
      },
      {
        name: "mdl_backcont_useite_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "itemid" },
        ]
      },
      {
        name: "mdl_backcont_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
