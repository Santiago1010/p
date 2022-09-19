const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_grade_letters', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    contextid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    lowerboundary: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false
    },
    letter: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_grade_letters',
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
        name: "mdl_gradlett_conlowlet_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "contextid" },
          { name: "lowerboundary" },
          { name: "letter" },
        ]
      },
    ]
  });
};
