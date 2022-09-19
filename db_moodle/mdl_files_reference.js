const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_files_reference', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    repositoryid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    lastsync: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    reference: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    referencehash: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_files_reference',
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
        name: "mdl_filerefe_refrep_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "referencehash" },
          { name: "repositoryid" },
        ]
      },
      {
        name: "mdl_filerefe_rep_ix",
        using: "BTREE",
        fields: [
          { name: "repositoryid" },
        ]
      },
    ]
  });
};
