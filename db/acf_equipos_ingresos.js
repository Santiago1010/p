const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'acf_equipos_ingresos',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_equipo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'acf_equipos',
          key: 'id_equipo',
        },
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_empleado: {
        type: DataTypes.STRING(30),
        allowNull: true,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      fecha_ingreso: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        comment: 'Puede ser distinta a created_at si se quiere registrar otra fecha de ingreso',
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
      tableName: 'acf_equipos_ingresos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'id_equipo',
          using: 'BTREE',
          fields: [{ name: 'id_equipo' }],
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
