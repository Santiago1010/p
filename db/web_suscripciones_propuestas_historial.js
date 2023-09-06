const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_propuestas_historial',
    {
      id_historial: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      id_propuesta: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'Descripcion pequeña del historial',
      },
      valor_venta: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      total_licencias: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fecha_fin: {
        type: DataTypes.DATE,
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
      tableName: 'web_suscripciones_propuestas_historial',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_historial' }],
        },
        {
          name: 'id_propuesta',
          using: 'BTREE',
          fields: [{ name: 'id_propuesta' }],
        },
      ],
    }
  );
};
