const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'ctb_proveedores_pagos',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      codunico: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      proveedor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        references: {
          model: 'ctb_proveedores',
          key: 'id',
        },
      },
      responsable: {
        type: DataTypes.STRING(15),
        allowNull: false,
        references: {
          model: 'adm_empleados',
          key: 'codemp',
        },
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      estado: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'Pendiente',
      },
      banco: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'adm_bancos',
          key: 'id',
        },
      },
      codsed: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 10002,
        references: {
          model: 'adm_sedes',
          key: 'codsed',
        },
      },
      tipo_cuenta: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      numero_cuenta: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      documento_titular: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      nombre_titular: {
        type: DataTypes.STRING(80),
        allowNull: false,
      },
      cuenta_propia: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      activo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      valretefuente: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      valreteica: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      otrdescuento: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      addusr: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fchadd: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      recurrente: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
      },
      observacion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'ctb_proveedores_pagos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'FK_adm_proveedores_solicitudes_adm_proveedores',
          using: 'BTREE',
          fields: [{ name: 'proveedor' }],
        },
        {
          name: 'FK_ctb_proveedores_pagos_adm_bancos',
          using: 'BTREE',
          fields: [{ name: 'banco' }],
        },
        {
          name: 'FK_ctb_proveedores_pagos_adm_empleados',
          using: 'BTREE',
          fields: [{ name: 'responsable' }],
        },
        {
          name: 'FK_ctb_sedes_proveedores',
          using: 'BTREE',
          fields: [{ name: 'codsed' }],
        },
      ],
    }
  );
};
