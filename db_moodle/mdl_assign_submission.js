const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_assign_submission', {
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
    status: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    groupid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    attemptnumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    latest: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_assign_submission',
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
        name: "mdl_assisubm_assusegroatt_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "assignment" },
          { name: "userid" },
          { name: "groupid" },
          { name: "attemptnumber" },
        ]
      },
      {
        name: "mdl_assisubm_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_assisubm_att_ix",
        using: "BTREE",
        fields: [
          { name: "attemptnumber" },
        ]
      },
      {
        name: "mdl_assisubm_assusegrolat_ix",
        using: "BTREE",
        fields: [
          { name: "assignment" },
          { name: "userid" },
          { name: "groupid" },
          { name: "latest" },
        ]
      },
      {
        name: "mdl_assisubm_ass_ix",
        using: "BTREE",
        fields: [
          { name: "assignment" },
        ]
      },
    ]
  });
};
