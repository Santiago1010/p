const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_game_cross', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usedcols: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    usedrows: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    words: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    wordsall: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    createscore: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    createtries: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    createtimelimit: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    createconnectors: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    createfilleds: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    createspaces: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    triesplay: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_game_cross',
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
