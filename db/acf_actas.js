const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'acf_actas',
    {
      id_acta: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      tipo: {
        type: DataTypes.ENUM('entrega', 'devolucion'),
        allowNull: false,
        defaultValue: 'entrega',
        comment: 'Tipo de actas activos',
      },
      id_empleado_acta: {
        type: DataTypes.STRING(30),
        allowNull: true,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      id_contrato_recibe: {
        type: DataTypes.STRING(80),
        allowNull: true,
        references: {
          model: 'adm_empleados_contrato',
          key: 'codcontrato',
        },
      },
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      observacion: {
        type: DataTypes.STRING(350),
        allowNull: false,
      },
      firma_acta: {
        type: DataTypes.STRING(350),
        allowNull: true,
      },
      id_empleado_recibe: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: 'No es nulo en tipo devolucion',
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
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
      tableName: 'acf_actas',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_acta' }],
        },
        {
          name: 'id_empleado_acta',
          using: 'BTREE',
          fields: [{ name: 'id_empleado_acta' }],
        },
        {
          name: 'id_contrato_recibe',
          using: 'BTREE',
          fields: [{ name: 'id_contrato_recibe' }],
        },
        {
          name: 'id_empleado_recibe',
          using: 'BTREE',
          fields: [{ name: 'id_empleado_recibe' }],
        },
      ],
    }
  );
};
