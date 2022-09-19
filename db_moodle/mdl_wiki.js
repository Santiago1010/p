const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_wiki', {
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
      defaultValue: "Wiki"
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
    firstpagetitle: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "First Page"
    },
    wikimode: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "collaborative"
    },
    defaultformat: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "creole"
    },
    forceformat: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    editbegin: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    editend: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_wiki',
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
        name: "mdl_wiki_cou_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
    ]
  });
};
