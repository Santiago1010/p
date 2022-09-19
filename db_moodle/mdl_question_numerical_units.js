const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_question_numerical_units', {
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
    multiplier: {
      type: DataTypes.DECIMAL(38,19),
      allowNull: false,
      defaultValue: 1.0000000000000000000
    },
    unit: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_question_numerical_units',
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
        name: "mdl_quesnumeunit_queuni_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "question" },
          { name: "unit" },
        ]
      },
      {
        name: "mdl_quesnumeunit_que_ix",
        using: "BTREE",
        fields: [
          { name: "question" },
        ]
      },
    ]
  });
};
