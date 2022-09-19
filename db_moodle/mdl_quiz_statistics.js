const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_quiz_statistics', {
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
    whichattempts: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    firstattemptscount: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    highestattemptscount: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    lastattemptscount: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    allattemptscount: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    firstattemptsavg: {
      type: DataTypes.DECIMAL(15,5),
      allowNull: true
    },
    highestattemptsavg: {
      type: DataTypes.DECIMAL(15,5),
      allowNull: true
    },
    lastattemptsavg: {
      type: DataTypes.DECIMAL(15,5),
      allowNull: true
    },
    allattemptsavg: {
      type: DataTypes.DECIMAL(15,5),
      allowNull: true
    },
    median: {
      type: DataTypes.DECIMAL(15,5),
      allowNull: true
    },
    standarddeviation: {
      type: DataTypes.DECIMAL(15,5),
      allowNull: true
    },
    skewness: {
      type: DataTypes.DECIMAL(15,10),
      allowNull: true
    },
    kurtosis: {
      type: DataTypes.DECIMAL(15,5),
      allowNull: true
    },
    cic: {
      type: DataTypes.DECIMAL(15,10),
      allowNull: true
    },
    errorratio: {
      type: DataTypes.DECIMAL(15,10),
      allowNull: true
    },
    standarderror: {
      type: DataTypes.DECIMAL(15,10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_quiz_statistics',
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
