const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_h5p_libraries_cachedassets', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    libraryid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    hash: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_h5p_libraries_cachedassets',
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
        name: "mdl_h5plibrcach_lib_ix",
        using: "BTREE",
        fields: [
          { name: "libraryid" },
        ]
      },
    ]
  });
};
