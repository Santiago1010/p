const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_customfield_field', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    shortname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    name: {
      type: DataTypes.STRING(400),
      allowNull: false,
      defaultValue: ""
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    descriptionformat: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    sortorder: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    categoryid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    configdata: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_customfield_field',
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
        name: "mdl_custfiel_catsor_ix",
        using: "BTREE",
        fields: [
          { name: "categoryid" },
          { name: "sortorder" },
        ]
      },
      {
        name: "mdl_custfiel_cat_ix",
        using: "BTREE",
        fields: [
          { name: "categoryid" },
        ]
      },
    ]
  });
};
