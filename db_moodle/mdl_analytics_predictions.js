const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_analytics_predictions', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    modelid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sampleid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    rangeindex: {
      type: DataTypes.MEDIUMINT,
      allowNull: false
    },
    prediction: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    predictionscore: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false
    },
    calculations: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timestart: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    timeend: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_analytics_predictions',
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
        name: "mdl_analpred_modcon_ix",
        using: "BTREE",
        fields: [
          { name: "modelid" },
          { name: "contextid" },
        ]
      },
      {
        name: "mdl_analpred_mod_ix",
        using: "BTREE",
        fields: [
          { name: "modelid" },
        ]
      },
      {
        name: "mdl_analpred_con_ix",
        using: "BTREE",
        fields: [
          { name: "contextid" },
        ]
      },
    ]
  });
};
