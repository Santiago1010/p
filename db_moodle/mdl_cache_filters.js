const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_cache_filters', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    filter: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    version: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    md5key: {
      type: DataTypes.STRING(32),
      allowNull: false,
      defaultValue: ""
    },
    rawtext: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_cache_filters',
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
        name: "mdl_cachfilt_filmd5_ix",
        using: "BTREE",
        fields: [
          { name: "filter" },
          { name: "md5key" },
        ]
      },
    ]
  });
};
