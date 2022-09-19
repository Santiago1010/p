const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_resource', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    course: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    intro: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    introformat: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    tobemigrated: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    legacyfiles: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    legacyfileslast: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    display: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    displayoptions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    filterfiles: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    revision: {
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
    tableName: 'mdl_resource',
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
        name: "mdl_reso_cou_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
    ]
  });
};
