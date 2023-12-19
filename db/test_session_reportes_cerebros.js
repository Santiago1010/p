const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'test_session_reportes_cerebros',
    {
      id_reporte_cerebro: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_reporte: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'test_session_reportes',
          key: 'id',
        },
      },
      id_cerebro: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'Cerebro al que se le va a generar reporte (cerebro o de perfil)',
        references: {
          model: 'test_cerebros',
          key: 'id',
        },
      },
      dominancia: {
        type: DataTypes.ENUM('dominante', 'subdominante', 'oscilante'),
        allowNull: false,
        defaultValue: 'dominante',
        comment: 'Dominancia del cerebro, para reportes de perfil siempres es dominante',
      },
      id_cerebro_subdominante: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'Cerebro subdominante para reportes de perfil, para reporte cerebro se deja en NULL',
        references: {
          model: 'test_cerebros',
          key: 'id',
        },
      },
      titulo_pagina: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      orden_pagina: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      recurso: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      tipo_recurso: {
        type: DataTypes.BLOB,
        allowNull: true,
      },
      orden_recurso: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'test_session_reportes_cerebros',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_reporte_cerebro' }],
        },
        {
          name: 'id_reporte',
          using: 'BTREE',
          fields: [{ name: 'id_reporte' }],
        },
        {
          name: 'id_cerebro',
          using: 'BTREE',
          fields: [{ name: 'id_cerebro' }],
        },
        {
          name: 'id_cerebro_subdominante',
          using: 'BTREE',
          fields: [{ name: 'id_cerebro_subdominante' }],
        },
      ],
    }
  );
};
