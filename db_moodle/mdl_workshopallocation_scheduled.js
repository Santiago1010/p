const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_workshopallocation_scheduled', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    workshopid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: "mdl_worksche_wor_uix"
    },
    enabled: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    submissionend: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timeallocated: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    settings: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    resultstatus: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    resultmessage: {
      type: DataTypes.STRING(1333),
      allowNull: true
    },
    resultlog: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_workshopallocation_scheduled',
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
        name: "mdl_worksche_wor_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "workshopid" },
        ]
      },
    ]
  });
};
