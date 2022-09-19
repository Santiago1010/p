const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_choice_options', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    choiceid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    maxanswers: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_choice_options',
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
        name: "mdl_choiopti_cho_ix",
        using: "BTREE",
        fields: [
          { name: "choiceid" },
        ]
      },
    ]
  });
};
