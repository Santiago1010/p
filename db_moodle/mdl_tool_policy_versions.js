const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_policy_versions', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(1333),
      allowNull: false,
      defaultValue: ""
    },
    type: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    audience: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    archived: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    usermodified: {
      type: DataTypes.BIGINT,
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
    policyid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    agreementstyle: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    optional: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    revision: {
      type: DataTypes.STRING(1333),
      allowNull: false,
      defaultValue: ""
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    summaryformat: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    contentformat: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_policy_versions',
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
        name: "mdl_toolpolivers_use_ix",
        using: "BTREE",
        fields: [
          { name: "usermodified" },
        ]
      },
      {
        name: "mdl_toolpolivers_pol_ix",
        using: "BTREE",
        fields: [
          { name: "policyid" },
        ]
      },
    ]
  });
};
