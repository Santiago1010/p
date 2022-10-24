const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_empresas_test_actividades', {
    id_empresa_activdad_test: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_ejercicio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'test_actividades_ejercicios',
        key: 'cod_ejercicio'
      }
    },
    id_empresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_empresas',
        key: 'id_empresa'
      }
    }
  }, {
    sequelize,
    tableName: 'web_empresas_test_actividades',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_empresa_activdad_test" },
        ]
      },
      {
        name: "FK_web_empresas_test_activades_test_actividades_ejercicios",
        using: "BTREE",
        fields: [
          { name: "cod_ejercicio" },
        ]
      },
      {
        name: "FK_web_empresas_test_activades_web_empresas",
        using: "BTREE",
        fields: [
          { name: "id_empresa" },
        ]
      },
    ]
  });
};
