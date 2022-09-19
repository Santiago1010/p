const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_grade_outcomes', {
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
    shortname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    fullname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    scaleid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    descriptionformat: {
      type: DataTypes.TINYINT,
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
    usermodified: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_grade_outcomes',
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
        name: "mdl_gradoutc_cousho_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "courseid" },
          { name: "shortname" },
        ]
      },
      {
        name: "mdl_gradoutc_cou_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
        ]
      },
      {
        name: "mdl_gradoutc_sca_ix",
        using: "BTREE",
        fields: [
          { name: "scaleid" },
        ]
      },
      {
        name: "mdl_gradoutc_use_ix",
        using: "BTREE",
        fields: [
          { name: "usermodified" },
        ]
      },
    ]
  });
};
