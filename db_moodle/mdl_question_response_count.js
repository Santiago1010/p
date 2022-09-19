const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_question_response_count', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    analysisid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    try: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    rcount: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_question_response_count',
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
        name: "mdl_quesrespcoun_ana_ix",
        using: "BTREE",
        fields: [
          { name: "analysisid" },
        ]
      },
    ]
  });
};
