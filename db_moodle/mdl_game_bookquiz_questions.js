const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_game_bookquiz_questions', {
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
    chapterid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    questioncategoryid: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_game_bookquiz_questions',
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
        name: "mdl_gamebookques_gamcha_ix",
        using: "BTREE",
        fields: [
          { name: "gameid" },
          { name: "chapterid" },
        ]
      },
    ]
  });
};
