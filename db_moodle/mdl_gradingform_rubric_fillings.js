const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_gradingform_rubric_fillings', {
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
    levelid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    remarkformat: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_gradingform_rubric_fillings',
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
        name: "mdl_gradrubrfill_inscri_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "instanceid" },
          { name: "criterionid" },
        ]
      },
      {
        name: "mdl_gradrubrfill_lev_ix",
        using: "BTREE",
        fields: [
          { name: "levelid" },
        ]
      },
      {
        name: "mdl_gradrubrfill_ins_ix",
        using: "BTREE",
        fields: [
          { name: "instanceid" },
        ]
      },
      {
        name: "mdl_gradrubrfill_cri_ix",
        using: "BTREE",
        fields: [
          { name: "criterionid" },
        ]
      },
    ]
  });
};
