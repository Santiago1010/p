const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_dataprivacy_purposerole', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    purposeid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    roleid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    lawfulbases: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sensitivedatareasons: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    retentionperiod: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    protected: {
      type: DataTypes.BOOLEAN,
      allowNull: true
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
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_dataprivacy_purposerole',
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
        name: "mdl_tooldatapurp_purrol_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "purposeid" },
          { name: "roleid" },
        ]
      },
      {
        name: "mdl_tooldatapurp_pur_ix",
        using: "BTREE",
        fields: [
          { name: "purposeid" },
        ]
      },
      {
        name: "mdl_tooldatapurp_rol_ix",
        using: "BTREE",
        fields: [
          { name: "roleid" },
        ]
      },
    ]
  });
};
