const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_question', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    category: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    parent: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    questiontext: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    questiontextformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    generalfeedback: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    generalfeedbackformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    defaultmark: {
      type: DataTypes.DECIMAL(12,7),
      allowNull: false,
      defaultValue: 1.0000000
    },
    penalty: {
      type: DataTypes.DECIMAL(12,7),
      allowNull: false,
      defaultValue: 0.3333333
    },
    qtype: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    length: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1
    },
    stamp: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    version: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    hidden: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
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
    createdby: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    modifiedby: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    idnumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_question',
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
        name: "mdl_ques_catidn_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "category" },
          { name: "idnumber" },
        ]
      },
      {
        name: "mdl_ques_qty_ix",
        using: "BTREE",
        fields: [
          { name: "qtype" },
        ]
      },
      {
        name: "mdl_ques_cat_ix",
        using: "BTREE",
        fields: [
          { name: "category" },
        ]
      },
      {
        name: "mdl_ques_par_ix",
        using: "BTREE",
        fields: [
          { name: "parent" },
        ]
      },
      {
        name: "mdl_ques_cre_ix",
        using: "BTREE",
        fields: [
          { name: "createdby" },
        ]
      },
      {
        name: "mdl_ques_mod_ix",
        using: "BTREE",
        fields: [
          { name: "modifiedby" },
        ]
      },
    ]
  });
};
