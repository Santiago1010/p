const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_grade_items', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    courseid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    categoryid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    itemname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    itemtype: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    itemmodule: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    iteminstance: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    itemnumber: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    iteminfo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    idnumber: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    calculation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gradetype: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    },
    grademax: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false,
      defaultValue: 100.00000
    },
    grademin: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false,
      defaultValue: 0.00000
    },
    scaleid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    outcomeid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    gradepass: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false,
      defaultValue: 0.00000
    },
    multfactor: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false,
      defaultValue: 1.00000
    },
    plusfactor: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false,
      defaultValue: 0.00000
    },
    aggregationcoef: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false,
      defaultValue: 0.00000
    },
    aggregationcoef2: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false,
      defaultValue: 0.00000
    },
    sortorder: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    display: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    decimals: {
      type: DataTypes.BOOLEAN,
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
    needsupdate: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    weightoverride: {
      type: DataTypes.BOOLEAN,
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
    }
  }, {
    sequelize,
    tableName: 'mdl_grade_items',
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
        name: "mdl_graditem_locloc_ix",
        using: "BTREE",
        fields: [
          { name: "locked" },
          { name: "locktime" },
        ]
      },
      {
        name: "mdl_graditem_itenee_ix",
        using: "BTREE",
        fields: [
          { name: "itemtype" },
          { name: "needsupdate" },
        ]
      },
      {
        name: "mdl_graditem_gra_ix",
        using: "BTREE",
        fields: [
          { name: "gradetype" },
        ]
      },
      {
        name: "mdl_graditem_idncou_ix",
        using: "BTREE",
        fields: [
          { name: "idnumber" },
          { name: "courseid" },
        ]
      },
      {
        name: "mdl_graditem_cou_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
        ]
      },
      {
        name: "mdl_graditem_cat_ix",
        using: "BTREE",
        fields: [
          { name: "categoryid" },
        ]
      },
      {
        name: "mdl_graditem_sca_ix",
        using: "BTREE",
        fields: [
          { name: "scaleid" },
        ]
      },
      {
        name: "mdl_graditem_out_ix",
        using: "BTREE",
        fields: [
          { name: "outcomeid" },
        ]
      },
    ]
  });
};
