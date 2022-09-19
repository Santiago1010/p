const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_assignment_upgrade', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    oldcmid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    oldinstance: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    newcmid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    newinstance: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_assignment_upgrade',
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
        name: "mdl_assiupgr_old_ix",
        using: "BTREE",
        fields: [
          { name: "oldcmid" },
        ]
      },
      {
        name: "mdl_assiupgr_old2_ix",
        using: "BTREE",
        fields: [
          { name: "oldinstance" },
        ]
      },
    ]
  });
};
