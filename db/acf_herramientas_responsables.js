const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'acf_herramientas_responsables',
    {
      id_asignacion: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_herramienta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'acf_herramientas',
          key: 'id_herramienta',
        },
      },
      id_empleado: {
        type: DataTypes.STRING(30),
        allowNull: false,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      principal: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        comment: 'Es el responsable principal de la herramienta',
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
      tableName: 'acf_herramientas_responsables',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_asignacion' }],
        },
        {
          name: 'responsables_herramientas_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_herramienta' }, { name: 'id_empleado' }],
        },
        {
          name: 'herramienta_principal_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_herramienta' }, { name: 'principal' }],
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
