const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_question_numerical_options', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    question: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    showunits: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    unitsleft: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    unitgradingtype: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    unitpenalty: {
      type: DataTypes.DECIMAL(12,7),
      allowNull: false,
      defaultValue: 0.1000000
    }
  }, {
    sequelize,
    tableName: 'mdl_question_numerical_options',
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
        name: "mdl_quesnumeopti_que_ix",
        using: "BTREE",
        fields: [
          { name: "question" },
        ]
      },
    ]
  });
};
