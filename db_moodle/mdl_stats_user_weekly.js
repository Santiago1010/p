const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_stats_user_weekly', {
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
    tableName: 'mdl_stats_user_weekly',
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
        name: "mdl_statuserweek_cou_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
        ]
      },
      {
        name: "mdl_statuserweek_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_statuserweek_rol_ix",
        using: "BTREE",
        fields: [
          { name: "roleid" },
        ]
      },
      {
        name: "mdl_statuserweek_tim_ix",
        using: "BTREE",
        fields: [
          { name: "timeend" },
        ]
      },
    ]
  });
};
