const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_lock_db', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    resourcekey: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "",
      unique: "mdl_lockdb_res_uix"
    },
    expires: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    owner: {
      type: DataTypes.STRING(36),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_lock_db',
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
        name: "mdl_lockdb_res_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "resourcekey" },
        ]
      },
      {
        name: "mdl_lockdb_exp_ix",
        using: "BTREE",
        fields: [
          { name: "expires" },
        ]
      },
      {
        name: "mdl_lockdb_own_ix",
        using: "BTREE",
        fields: [
          { name: "owner" },
        ]
      },
    ]
  });
};
