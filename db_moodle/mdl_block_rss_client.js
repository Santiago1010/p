const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_block_rss_client', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    preferredtitle: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    shared: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    skiptime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    skipuntil: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_block_rss_client',
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
