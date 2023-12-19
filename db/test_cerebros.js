const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'test_cerebros',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: 'test_cerebros_UN',
      },
      aprende: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      alias: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      titulo: {
        type: DataTypes.STRING(80),
        allowNull: false,
      },
      subtitulo: {
        type: DataTypes.STRING(300),
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      descripcion_sub: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      caracteristicas: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      fortalezas: {
        type: DataTypes.STRING(250),
        allowNull: false,
        defaultValue: '',
      },
      asp_mejora: {
        type: DataTypes.STRING(250),
        allowNull: false,
        defaultValue: '',
      },
      niv_comando: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      niv_supervision: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      niv_asesoria: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      niv_ejecucion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'test_cerebros',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'test_cerebros_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'nombre' }],
        },
      ],
    }
  );
};
