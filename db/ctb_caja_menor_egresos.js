const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'ctb_caja_menor_egresos',
    {
      id_egreso: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_caja_menor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'ctb_caja_menor',
          key: 'id_caja_menor',
        },
      },
      valor: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.0,
      },
      tipo_entrega: {
        type: DataTypes.ENUM('interno', 'externo'),
        allowNull: false,
        defaultValue: 'interno',
        comment: 'Tipo empleado o externo que se entrega egreso',
      },
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      proposito: {
        type: DataTypes.STRING(450),
        allowNull: false,
      },
      documento: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      celular: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      firma: {
        type: DataTypes.STRING(200),
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
      tableName: 'ctb_caja_menor_egresos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_egreso' }],
        },
        {
          name: 'id_caja_menor',
          using: 'BTREE',
          fields: [{ name: 'id_caja_menor' }],
        },
      ],
    }
  );
};
