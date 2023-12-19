const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'adm_empleados_contrato_anexos',
    {
      id_anexo: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_contrato: {
        type: DataTypes.STRING(80),
        allowNull: false,
        references: {
          model: 'adm_empleados_contrato',
          key: 'codcontrato',
        },
      },
      mod_anexo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'adm_contratos_modelos',
          key: 'id',
        },
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
        comment: 'No es nulo para Otro Si',
      },
      fecha_inicio: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        comment: 'No es nulo para Otro Si',
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
      tableName: 'adm_empleados_contrato_anexos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_anexo' }],
        },
        {
          name: 'id_contrato',
          using: 'BTREE',
          fields: [{ name: 'id_contrato' }],
        },
        {
          name: 'mod_anexo',
          using: 'BTREE',
          fields: [{ name: 'mod_anexo' }],
        },
      ],
    }
  );
};
