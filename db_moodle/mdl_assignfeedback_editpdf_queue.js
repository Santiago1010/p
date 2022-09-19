const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_assignfeedback_editpdf_queue', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    submissionid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    submissionattempt: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    attemptedconversions: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_assignfeedback_editpdf_queue',
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
        name: "mdl_assieditqueu_subsub_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "submissionid" },
          { name: "submissionattempt" },
        ]
      },
    ]
  });
};
