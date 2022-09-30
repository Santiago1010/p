const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_empresas_test_actividad_evaluar', {
    id_empresa_test_actividad_evalua: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_web_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cod_ejercicio: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_empresas_test_actividad_evaluar',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_empresa_test_actividad_evalua" },
        ]
      },
    ]
  });
};
