const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_quiz_slots', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    slot: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    quizid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    page: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    requireprevious: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    questionid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    questioncategoryid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    includingsubcategories: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    maxmark: {
      type: DataTypes.DECIMAL(12,7),
      allowNull: false,
      defaultValue: 0.0000000
    }
  }, {
    sequelize,
    tableName: 'mdl_quiz_slots',
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
        name: "mdl_quizslot_quislo_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "quizid" },
          { name: "slot" },
        ]
      },
      {
        name: "mdl_quizslot_qui_ix",
        using: "BTREE",
        fields: [
          { name: "quizid" },
        ]
      },
      {
        name: "mdl_quizslot_que_ix",
        using: "BTREE",
        fields: [
          { name: "questionid" },
        ]
      },
      {
        name: "mdl_quizslot_que2_ix",
        using: "BTREE",
        fields: [
          { name: "questioncategoryid" },
        ]
      },
    ]
  });
};
