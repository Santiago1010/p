const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_context', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    contextlevel: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    instanceid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    path: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    depth: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    locked: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_context',
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
        name: "mdl_cont_conins_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contextlevel" },
          { name: "instanceid" },
        ]
      },
      {
        name: "mdl_cont_ins_ix",
        using: "BTREE",
        fields: [
          { name: "instanceid" },
        ]
      },
      {
        name: "mdl_cont_pat_ix",
        using: "BTREE",
        fields: [
          { name: "path" },
        ]
      },
    ]
  });
};
