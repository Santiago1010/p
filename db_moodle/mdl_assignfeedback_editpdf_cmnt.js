const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_assignfeedback_editpdf_cmnt', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    gradeid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    x: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    y: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    width: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 120
    },
    rawtext: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pageno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    colour: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "black"
    },
    draft: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'mdl_assignfeedback_editpdf_cmnt',
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
        name: "mdl_assieditcmnt_grapag_ix",
        using: "BTREE",
        fields: [
          { name: "gradeid" },
          { name: "pageno" },
        ]
      },
      {
        name: "mdl_assieditcmnt_gra_ix",
        using: "BTREE",
        fields: [
          { name: "gradeid" },
        ]
      },
    ]
  });
};
