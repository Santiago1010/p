const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_gradingform_guide_fillings', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    instanceid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    criterionid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    remarkformat: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    score: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_gradingform_guide_fillings',
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
        name: "mdl_gradguidfill_inscri_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "instanceid" },
          { name: "criterionid" },
        ]
      },
      {
        name: "mdl_gradguidfill_ins_ix",
        using: "BTREE",
        fields: [
          { name: "instanceid" },
        ]
      },
      {
        name: "mdl_gradguidfill_cri_ix",
        using: "BTREE",
        fields: [
          { name: "criterionid" },
        ]
      },
    ]
  });
};
