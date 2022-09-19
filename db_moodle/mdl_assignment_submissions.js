const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_assignment_submissions', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    assignment: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    numfiles: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    data1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    grade: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    submissioncomment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    format: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    teacher: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timemarked: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    mailed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_assignment_submissions',
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
        name: "mdl_assisubm_use2_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_assisubm_mai_ix",
        using: "BTREE",
        fields: [
          { name: "mailed" },
        ]
      },
      {
        name: "mdl_assisubm_tim_ix",
        using: "BTREE",
        fields: [
          { name: "timemarked" },
        ]
      },
      {
        name: "mdl_assisubm_ass2_ix",
        using: "BTREE",
        fields: [
          { name: "assignment" },
        ]
      },
    ]
  });
};
