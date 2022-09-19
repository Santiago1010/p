const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_hvp_libraries_cachedassets', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    library_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    hash: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_hvp_libraries_cachedassets',
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
        name: "mdl_hvplibrcach_libhas_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "library_id" },
          { name: "hash" },
        ]
      },
    ]
  });
};
