const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_quiz_sections', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    quizid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    firstslot: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    heading: {
      type: DataTypes.STRING(1333),
      allowNull: true
    },
    shufflequestions: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_quiz_sections',
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
        name: "mdl_quizsect_quifir_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "quizid" },
          { name: "firstslot" },
        ]
      },
      {
        name: "mdl_quizsect_qui_ix",
        using: "BTREE",
        fields: [
          { name: "quizid" },
        ]
      },
    ]
  });
};
