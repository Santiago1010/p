const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'crm_ventas',
    {
      id_venta: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      descripcion_venta: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fecha_inicio: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      fecha_fin: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      fecha_test: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      fecha_entrega: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      valor_venta: {
        type: DataTypes.DECIMAL(10, 0),
        allowNull: true,
      },
      id_contrato: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'crm_contratos_modelos',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'crm_ventas',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_venta' }],
        },
        {
          name: 'FK_crm_ventas_crm_contratos_modelos',
          using: 'BTREE',
          fields: [{ name: 'id_contrato' }],
        },
      ],
    }
  );
};
