const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_stats_monthly', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    courseid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timeend: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    roleid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    stattype: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "activity"
    },
    stat1: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    stat2: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_stats_monthly',
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
        name: "mdl_statmont_cou_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
        ]
      },
      {
        name: "mdl_statmont_tim_ix",
        using: "BTREE",
        fields: [
          { name: "timeend" },
        ]
      },
      {
        name: "mdl_statmont_rol_ix",
        using: "BTREE",
        fields: [
          { name: "roleid" },
        ]
      },
    ]
  });
};
