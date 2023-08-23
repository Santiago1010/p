const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'acf_movimientos',
    {
      id_movimiento: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_empleado: {
        type: DataTypes.STRING(30),
        allowNull: false,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      fecha_hora_salida: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      fecha_hora_devolucion: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      justificacion: {
        type: DataTypes.STRING(350),
        allowNull: false,
      },
      lugar_traslado: {
        type: DataTypes.STRING(100),
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
      tableName: 'acf_movimientos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_movimiento' }],
        },
        {
          name: 'id_empleado',
          using: 'BTREE',
          fields: [{ name: 'id_empleado' }],
        },
      ],
    }
  );
};
