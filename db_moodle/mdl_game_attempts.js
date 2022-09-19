const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_game_attempts', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    gameid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    timestart: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timefinish: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timelastattempt: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    preview: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    attempt: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    score: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    attempts: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    language: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_game_attempts',
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
        name: "mdl_gameatte_gamusetim_ix",
        using: "BTREE",
        fields: [
          { name: "gameid" },
          { name: "userid" },
          { name: "timefinish" },
        ]
      },
    ]
  });
};
