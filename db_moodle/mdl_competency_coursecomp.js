const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_competency_coursecomp', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    courseid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    competencyid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ruleoutcome: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    usermodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sortorder: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_competency_coursecomp',
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
        name: "mdl_compcour_coucom_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "courseid" },
          { name: "competencyid" },
        ]
      },
      {
        name: "mdl_compcour_courul_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
          { name: "ruleoutcome" },
        ]
      },
      {
        name: "mdl_compcour_cou2_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
        ]
      },
      {
        name: "mdl_compcour_com_ix",
        using: "BTREE",
        fields: [
          { name: "competencyid" },
        ]
      },
    ]
  });
};
