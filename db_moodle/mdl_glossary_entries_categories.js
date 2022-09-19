const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_glossary_entries_categories', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    categoryid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    entryid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_glossary_entries_categories',
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
        name: "mdl_glosentrcate_cat_ix",
        using: "BTREE",
        fields: [
          { name: "categoryid" },
        ]
      },
      {
        name: "mdl_glosentrcate_ent_ix",
        using: "BTREE",
        fields: [
          { name: "entryid" },
        ]
      },
    ]
  });
};
