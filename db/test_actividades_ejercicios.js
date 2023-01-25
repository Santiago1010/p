const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'test_actividades_ejercicios',
    {
      cod_ejercicio: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      cod_actividad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'test_actividades',
          key: 'id',
        },
      },
      titulo: {
        type: DataTypes.STRING(400),
        allowNull: false,
      },
      objetivo: {
        type: DataTypes.STRING(400),
        allowNull: false,
      },
      tiempo: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      materiales: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      recurso: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      url_recurso: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      addusr: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'test_actividades_ejercicios',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'cod_ejercicio' }],
        },
        {
          name: 'FK_test_ejer_actividad_test_recomendaciones',
          using: 'BTREE',
          fields: [{ name: 'cod_actividad' }],
        },
      ],
    }
  );
};
