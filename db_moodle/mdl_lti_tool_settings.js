const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_lti_tool_settings', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    toolproxyid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    typeid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    course: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    coursemoduleid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    settings: {
      type: DataTypes.TEXT,
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
    tableName: 'mdl_lti_tool_settings',
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
        name: "mdl_ltitoolsett_too_ix",
        using: "BTREE",
        fields: [
          { name: "toolproxyid" },
        ]
      },
      {
        name: "mdl_ltitoolsett_typ_ix",
        using: "BTREE",
        fields: [
          { name: "typeid" },
        ]
      },
      {
        name: "mdl_ltitoolsett_cou_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
      {
        name: "mdl_ltitoolsett_cou2_ix",
        using: "BTREE",
        fields: [
          { name: "coursemoduleid" },
        ]
      },
    ]
  });
};
