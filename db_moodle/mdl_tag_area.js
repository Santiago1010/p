const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tag_area', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    component: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    itemtype: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    tagcollid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    callback: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    callbackfile: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    showstandard: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    multiplecontexts: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_tag_area',
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
        name: "mdl_tagarea_comite_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "component" },
          { name: "itemtype" },
        ]
      },
      {
        name: "mdl_tagarea_tag_ix",
        using: "BTREE",
        fields: [
          { name: "tagcollid" },
        ]
      },
    ]
  });
};
