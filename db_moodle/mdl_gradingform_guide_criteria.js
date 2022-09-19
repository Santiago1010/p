const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_gradingform_guide_criteria', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    definitionid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sortorder: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    shortname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    descriptionformat: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    descriptionmarkers: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    descriptionmarkersformat: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    maxscore: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_gradingform_guide_criteria',
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
        name: "mdl_gradguidcrit_def_ix",
        using: "BTREE",
        fields: [
          { name: "definitionid" },
        ]
      },
    ]
  });
};
