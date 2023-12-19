const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_propuestas_planes_pago_seguimiento',
    {
      id_seguimiento: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_plan: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_propuestas_planes_pago',
          key: 'id_plan',
        },
      },
      tipo_contacto: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      respuesta: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      observacion: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
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
      tableName: 'web_propuestas_planes_pago_seguimiento',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_seguimiento' }],
        },
        {
          name: 'id_plan',
          using: 'BTREE',
          fields: [{ name: 'id_plan' }],
        },
      ],
    }
  );
};
