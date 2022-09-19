const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_grade_grades', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
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
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    aggregationstatus: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "unknown"
    },
    aggregationweight: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_grade_grades',
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
        name: "mdl_gradgrad_useite_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "itemid" },
        ]
      },
      {
        name: "mdl_gradgrad_locloc_ix",
        using: "BTREE",
        fields: [
          { name: "locked" },
          { name: "locktime" },
        ]
      },
      {
        name: "mdl_gradgrad_ite_ix",
        using: "BTREE",
        fields: [
          { name: "itemid" },
        ]
      },
      {
        name: "mdl_gradgrad_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_gradgrad_raw_ix",
        using: "BTREE",
        fields: [
          { name: "rawscaleid" },
        ]
      },
      {
        name: "mdl_gradgrad_use2_ix",
        using: "BTREE",
        fields: [
          { name: "usermodified" },
        ]
      },
    ]
  });
};
