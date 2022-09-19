const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_assign_user_flags', {
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
    assignment: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    locked: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    mailed: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    extensionduedate: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    workflowstate: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    allocatedmarker: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_assign_user_flags',
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
        name: "mdl_assiuserflag_mai_ix",
        using: "BTREE",
        fields: [
          { name: "mailed" },
        ]
      },
      {
        name: "mdl_assiuserflag_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_assiuserflag_ass_ix",
        using: "BTREE",
        fields: [
          { name: "assignment" },
        ]
      },
    ]
  });
};
