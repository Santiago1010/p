const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_grade_grades_history', {
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
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    rawgrade: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    rawgrademax: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false,
      defaultValue: 100.00000
    },
    rawgrademin: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false,
      defaultValue: 0.00000
    },
    rawscaleid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    usermodified: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    finalgrade: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    hidden: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    locked: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    locktime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    exported: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    overridden: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    excluded: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    feedback: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    feedbackformat: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    information: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    informationformat: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_grade_grades_history',
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
        name: "mdl_gradgradhist_act_ix",
        using: "BTREE",
        fields: [
          { name: "action" },
        ]
      },
      {
        name: "mdl_gradgradhist_tim_ix",
        using: "BTREE",
        fields: [
          { name: "timemodified" },
        ]
      },
      {
        name: "mdl_gradgradhist_useitetim_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "itemid" },
          { name: "timemodified" },
        ]
      },
      {
        name: "mdl_gradgradhist_old_ix",
        using: "BTREE",
        fields: [
          { name: "oldid" },
        ]
      },
      {
        name: "mdl_gradgradhist_ite_ix",
        using: "BTREE",
        fields: [
          { name: "itemid" },
        ]
      },
      {
        name: "mdl_gradgradhist_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_gradgradhist_raw_ix",
        using: "BTREE",
        fields: [
          { name: "rawscaleid" },
        ]
      },
      {
        name: "mdl_gradgradhist_use2_ix",
        using: "BTREE",
        fields: [
          { name: "usermodified" },
        ]
      },
      {
        name: "mdl_gradgradhist_log_ix",
        using: "BTREE",
        fields: [
          { name: "loggeduser" },
        ]
      },
    ]
  });
};
