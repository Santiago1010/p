const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'ctb_caja_menor_ingresos',
    {
      id_ingreso: {
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
      observacion: {
        type: DataTypes.STRING(450),
        allowNull: false,
      },
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      estado: {
        type: DataTypes.ENUM('nuevo', 'aprobado', 'denegado'),
        allowNull: false,
        defaultValue: 'nuevo',
        comment: 'Estado del ingreso',
      },
      id_empleado: {
        type: DataTypes.STRING(30),
        allowNull: false,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      id_empleado_autoriza: {
        type: DataTypes.STRING(30),
        allowNull: true,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      fecha_autoriza: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      valor_aprobado: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      observacion_denegado: {
        type: DataTypes.STRING(500),
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
      tableName: 'ctb_caja_menor_ingresos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_ingreso' }],
        },
        {
          name: 'id_caja_menor',
          using: 'BTREE',
          fields: [{ name: 'id_caja_menor' }],
        },
        {
          name: 'id_empleado',
          using: 'BTREE',
          fields: [{ name: 'id_empleado' }],
        },
        {
          name: 'id_empleado_autoriza',
          using: 'BTREE',
          fields: [{ name: 'id_empleado_autoriza' }],
        },
      ],
    }
  );
};
