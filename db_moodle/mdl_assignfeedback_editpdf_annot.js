const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_assignfeedback_editpdf_annot', {
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
    endx: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    endy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    path: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "line"
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
    tableName: 'mdl_assignfeedback_editpdf_annot',
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
        name: "mdl_assieditanno_grapag_ix",
        using: "BTREE",
        fields: [
          { name: "gradeid" },
          { name: "pageno" },
        ]
      },
      {
        name: "mdl_assieditanno_gra_ix",
        using: "BTREE",
        fields: [
          { name: "gradeid" },
        ]
      },
    ]
  });
};
