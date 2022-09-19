const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_question_categories', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    infoformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    stamp: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    parent: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    sortorder: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 999
    },
    idnumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_question_categories',
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
        name: "mdl_quescate_consta_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contextid" },
          { name: "stamp" },
        ]
      },
      {
        name: "mdl_quescate_conidn_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contextid" },
          { name: "idnumber" },
        ]
      },
      {
        name: "mdl_quescate_con_ix",
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
      {
        name: "mdl_quescate_par_ix",
        using: "BTREE",
        fields: [
          { name: "parent" },
        ]
      },
    ]
  });
};
