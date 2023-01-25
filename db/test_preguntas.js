const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'test_preguntas',
    {
      codpre: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      descripcion_en: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      tipo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'test_tipo',
          key: 'id',
        },
      },
      tipo_opcion: {
        type: DataTypes.ENUM('multiple', 'unica', 'abierta', 'nivel'),
        allowNull: false,
        defaultValue: 'nivel',
      },
      indice: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      estado: {
        type: DataTypes.ENUM('ACTIVO', 'INACTIVO'),
        allowNull: false,
        defaultValue: 'ACTIVO',
      },
      opciones_correctas: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      tableName: 'test_preguntas',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'codpre' }],
        },
        {
          name: 'test_preguntas_FK',
          using: 'BTREE',
          fields: [{ name: 'tipo' }],
        },
      ],
    }
  );
};
