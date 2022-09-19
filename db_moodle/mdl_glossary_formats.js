const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_glossary_formats', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    popupformatname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    visible: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    showgroup: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    showtabs: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    defaultmode: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    defaulthook: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    sortkey: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    sortorder: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_glossary_formats',
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
    ]
  });
};
