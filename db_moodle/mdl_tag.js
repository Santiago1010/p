const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tag', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    tagcollid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    rawname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    isstandard: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    descriptionformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    flag: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_tag',
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
        name: "mdl_tag_tagnam_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tagcollid" },
          { name: "name" },
        ]
      },
      {
        name: "mdl_tag_tagiss_ix",
        using: "BTREE",
        fields: [
          { name: "tagcollid" },
          { name: "isstandard" },
        ]
      },
      {
        name: "mdl_tag_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_tag_tag_ix",
        using: "BTREE",
        fields: [
          { name: "tagcollid" },
        ]
      },
    ]
  });
};
