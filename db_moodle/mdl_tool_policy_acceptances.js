const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tool_policy_acceptances', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    policyversionid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    lang: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
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
    note: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_tool_policy_acceptances',
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
        name: "mdl_toolpoliacce_poluse_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "policyversionid" },
          { name: "userid" },
        ]
      },
      {
        name: "mdl_toolpoliacce_pol_ix",
        using: "BTREE",
        fields: [
          { name: "policyversionid" },
        ]
      },
      {
        name: "mdl_toolpoliacce_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_toolpoliacce_use2_ix",
        using: "BTREE",
        fields: [
          { name: "usermodified" },
        ]
      },
    ]
  });
};
