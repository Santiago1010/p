const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_scale_history', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    action: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    oldid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    source: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    loggeduser: {
      type: DataTypes.BIGINT,
      allowNull: true
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    scale: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_scale_history',
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
        name: "mdl_scalhist_act_ix",
        using: "BTREE",
        fields: [
          { name: "action" },
        ]
      },
      {
        name: "mdl_scalhist_tim_ix",
        using: "BTREE",
        fields: [
          { name: "timemodified" },
        ]
      },
      {
        name: "mdl_scalhist_old_ix",
        using: "BTREE",
        fields: [
          { name: "oldid" },
        ]
      },
      {
        name: "mdl_scalhist_cou_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
        ]
      },
      {
        name: "mdl_scalhist_log_ix",
        using: "BTREE",
        fields: [
          { name: "loggeduser" },
        ]
      },
    ]
  });
};
