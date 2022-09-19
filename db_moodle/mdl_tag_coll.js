const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_tag_coll', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isdefault: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    component: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    sortorder: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: 0
    },
    searchable: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    customurl: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_tag_coll',
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
