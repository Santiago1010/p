const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_question_statistics', {
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
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    questionid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    slot: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    subquestion: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    variant: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    s: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    effectiveweight: {
      type: DataTypes.DECIMAL(15,5),
      allowNull: true
    },
    negcovar: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    discriminationindex: {
      type: DataTypes.DECIMAL(15,5),
      allowNull: true
    },
    discriminativeefficiency: {
      type: DataTypes.DECIMAL(15,5),
      allowNull: true
    },
    sd: {
      type: DataTypes.DECIMAL(15,10),
      allowNull: true
    },
    facility: {
      type: DataTypes.DECIMAL(15,10),
      allowNull: true
    },
    subquestions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    maxmark: {
      type: DataTypes.DECIMAL(12,7),
      allowNull: true
    },
    positions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    randomguessscore: {
      type: DataTypes.DECIMAL(12,7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_question_statistics',
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
