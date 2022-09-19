const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_survey_analysis', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    survey: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_survey_analysis',
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
        name: "mdl_survanal_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_survanal_sur_ix",
        using: "BTREE",
        fields: [
          { name: "survey" },
        ]
      },
    ]
  });
};
