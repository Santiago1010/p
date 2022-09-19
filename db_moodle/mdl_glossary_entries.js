const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_glossary_entries', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    glossaryid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    concept: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    definition: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    definitionformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    definitiontrust: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    attachment: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
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
    },
    teacherentry: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    sourceglossaryid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    usedynalink: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    casesensitive: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    fullmatch: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    approved: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'mdl_glossary_entries',
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
        name: "mdl_glosentr_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_glosentr_con_ix",
        using: "BTREE",
        fields: [
          { name: "concept" },
        ]
      },
      {
        name: "mdl_glosentr_glo_ix",
        using: "BTREE",
        fields: [
          { name: "glossaryid" },
        ]
      },
    ]
  });
};
