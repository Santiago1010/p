const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_competency_framework', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    shortname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    idnumber: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "mdl_compfram_idn_uix"
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    descriptionformat: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    scaleid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    scaleconfiguration: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    visible: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    taxonomies: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    usermodified: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_competency_framework',
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
        name: "mdl_compfram_idn_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idnumber" },
        ]
      },
    ]
  });
};
