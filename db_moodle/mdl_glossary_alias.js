const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_glossary_alias', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    entryid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    alias: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_glossary_alias',
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
        name: "mdl_glosalia_ent_ix",
        using: "BTREE",
        fields: [
          { name: "entryid" },
        ]
      },
    ]
  });
};
