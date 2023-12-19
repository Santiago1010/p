const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_propuestas_planes_pago',
    {
      id_plan: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_historial: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_suscripciones_propuestas_historial',
          key: 'id_historial',
        },
        unique: 'web_propuestas_planes_pago_id_historial_foreign_idx',
      },
      observacion: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      aplica_iva: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      interes_mora: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      descuento: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      abogado: {
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
      tableName: 'web_propuestas_planes_pago',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_plan' }],
        },
        {
          name: 'id_historial',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_historial' }],
        },
      ],
    }
  );
};
