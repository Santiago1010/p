const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_workshop_assessments', {
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
    reviewerid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    weight: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    grade: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    gradinggrade: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    gradinggradeover: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    gradinggradeoverby: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    feedbackauthor: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    feedbackauthorformat: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    feedbackauthorattachment: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    feedbackreviewer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    feedbackreviewerformat: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_workshop_assessments',
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
        name: "mdl_workasse_sub_ix",
        using: "BTREE",
        fields: [
          { name: "submissionid" },
        ]
      },
      {
        name: "mdl_workasse_gra_ix",
        using: "BTREE",
        fields: [
          { name: "gradinggradeoverby" },
        ]
      },
      {
        name: "mdl_workasse_rev_ix",
        using: "BTREE",
        fields: [
          { name: "reviewerid" },
        ]
      },
    ]
  });
};
