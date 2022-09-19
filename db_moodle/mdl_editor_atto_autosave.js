const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_editor_atto_autosave', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    elementid: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    pagehash: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    drafttext: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    draftid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    pageinstance: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_editor_atto_autosave',
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
        name: "mdl_editattoauto_eleconuse_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "elementid" },
          { name: "contextid" },
          { name: "userid" },
          { name: "pagehash" },
        ]
      },
    ]
  });
};
