const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_question_response_analysis', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    hashcode: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    whichtries: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    questionid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    variant: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    subqid: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    aid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    credit: {
      type: DataTypes.DECIMAL(15,5),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_question_response_analysis',
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
