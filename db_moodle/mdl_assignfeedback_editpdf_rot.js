const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_assignfeedback_editpdf_rot', {
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
    pageno: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    pathnamehash: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isrotated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    degree: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_assignfeedback_editpdf_rot',
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
        name: "mdl_assieditrot_grapag_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "gradeid" },
          { name: "pageno" },
        ]
      },
      {
        name: "mdl_assieditrot_gra_ix",
        using: "BTREE",
        fields: [
          { name: "gradeid" },
        ]
      },
    ]
  });
};
