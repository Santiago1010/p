const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_stats_user_daily', {
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
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    roleid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timeend: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    statsreads: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    statswrites: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    stattype: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_stats_user_daily',
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
        name: "mdl_statuserdail_cou_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
        ]
      },
      {
        name: "mdl_statuserdail_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_statuserdail_rol_ix",
        using: "BTREE",
        fields: [
          { name: "roleid" },
        ]
      },
      {
        name: "mdl_statuserdail_tim_ix",
        using: "BTREE",
        fields: [
          { name: "timeend" },
        ]
      },
    ]
  });
};
