const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_assign_overrides', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    assignid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    groupid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    sortorder: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    allowsubmissionsfromdate: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    duedate: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    cutoffdate: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_assign_overrides',
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
        name: "mdl_assiover_ass_ix",
        using: "BTREE",
        fields: [
          { name: "assignid" },
        ]
      },
      {
        name: "mdl_assiover_gro_ix",
        using: "BTREE",
        fields: [
          { name: "groupid" },
        ]
      },
      {
        name: "mdl_assiover_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
