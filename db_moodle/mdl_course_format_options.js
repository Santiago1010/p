const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_course_format_options', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    courseid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    format: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: ""
    },
    sectionid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_course_format_options',
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
        name: "mdl_courformopti_couforsec_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "courseid" },
          { name: "format" },
          { name: "sectionid" },
          { name: "name" },
        ]
      },
      {
        name: "mdl_courformopti_cou_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
        ]
      },
    ]
  });
};
