const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_assignfeedback_editpdf_quick', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    rawtext: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    width: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 120
    },
    colour: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "yellow"
    }
  }, {
    sequelize,
    tableName: 'mdl_assignfeedback_editpdf_quick',
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
        name: "mdl_assieditquic_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
