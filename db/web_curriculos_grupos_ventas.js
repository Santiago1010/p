const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_curriculos_grupos_ventas',
    {
      id_curriculo_grupo_venta: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_grupo_curriculo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        references: {
          model: 'web_curriculos_grupos',
          key: 'id_grupo_curriculo',
        },
      },
      fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      unidades: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      valor: {
        type: DataTypes.DECIMAL(20, 6),
        allowNull: false,
        defaultValue: 0.0,
      },
      moneda: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: 'COP',
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
      tableName: 'web_curriculos_grupos_ventas',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_curriculo_grupo_venta' }],
        },
        {
          name: 'web_suscripciones_curriculos_grupos_ventas_FK',
          using: 'BTREE',
          fields: [{ name: 'id_grupo_curriculo' }],
        },
      ],
    }
  );
};
