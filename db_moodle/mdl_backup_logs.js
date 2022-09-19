const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_backup_logs', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    backupid: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    loglevel: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_backup_logs',
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
        name: "mdl_backlogs_bacid_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "backupid" },
          { name: "id" },
        ]
      },
      {
        name: "mdl_backlogs_bac_ix",
        using: "BTREE",
        fields: [
          { name: "backupid" },
        ]
      },
    ]
  });
};
