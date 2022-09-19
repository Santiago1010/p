const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_user_info_field', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    shortname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "shortname"
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    datatype: {
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
      allowNull: false,
      defaultValue: 0
    },
    categoryid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    sortorder: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    required: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    locked: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    visible: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    forceunique: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    signup: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    defaultdata: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    defaultdataformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    param1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    param2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    param3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    param4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    param5: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_user_info_field',
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
