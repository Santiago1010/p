const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_survey_questions', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    text: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    shorttext: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: ""
    },
    multi: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    intro: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    type: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    options: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_survey_questions',
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
