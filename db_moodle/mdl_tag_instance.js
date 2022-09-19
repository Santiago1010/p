const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tag_instance', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    tagid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    component: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    itemtype: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    itemid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    tiuserid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    ordering: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_tag_instance',
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
        name: "mdl_taginst_comiteiteconti_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "component" },
          { name: "itemtype" },
          { name: "itemid" },
          { name: "contextid" },
          { name: "tiuserid" },
          { name: "tagid" },
        ]
      },
      {
        name: "mdl_taginst_itecomtagcon_ix",
        using: "BTREE",
        fields: [
          { name: "itemtype" },
          { name: "component" },
          { name: "tagid" },
          { name: "contextid" },
        ]
      },
      {
        name: "mdl_taginst_tag_ix",
        using: "BTREE",
        fields: [
          { name: "tagid" },
        ]
      },
      {
        name: "mdl_taginst_con_ix",
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
    ]
  });
};
