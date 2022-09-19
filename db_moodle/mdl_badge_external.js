const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_badge_external', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    backpackid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    collectionid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    entityid: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_badge_external',
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
        name: "mdl_badgexte_bac_ix",
        using: "BTREE",
        fields: [
          { name: "backpackid" },
        ]
      },
    ]
  });
};
