const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_curriculos_modulos', {
    id_modulo_curriculo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'web_curriculos_modulos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_modulo_curriculo" },
        ]
      },
    ]
  });
};
