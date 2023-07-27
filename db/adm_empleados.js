const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'adm_empleados',
    {
      codemp: {
        type: DataTypes.STRING(30),
        allowNull: false,
        primaryKey: true,
      },
      nomemp: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      apemp: {
        type: DataTypes.STRING(60),
        allowNull: false,
      },
      tipide: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        references: {
          model: 'config_tipos_ident',
          key: 'id',
        },
      },
      fchnac: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      mailemp: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      sexemp: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      telemp: {
        type: DataTypes.STRING(12),
        allowNull: false,
      },
      celemp: {
        type: DataTypes.STRING(12),
        allowNull: false,
      },
      diremp: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      cargo: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'adm_cargos',
          key: 'codcrg',
        },
      },
      fotusr: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      eps: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'adm_eps',
          key: 'id',
        },
      },
      arl: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'adm_arl',
          key: 'id_arl',
        },
      },
      fondo: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'adm_fondo_pensiones',
          key: 'id',
        },
      },
      banco: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'adm_bancos',
          key: 'id',
        },
      },
      tipo_cuenta: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      nro_cuenta: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      updusr: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      ultfirma: {
        type: DataTypes.STRING(80),
        allowNull: true,
        defaultValue: '0',
      },
      pais_nacimiento: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'adm_paises',
          key: 'id',
        },
      },
      ciudad_nacimiento: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'adm_ciudades',
          key: 'idCiudades',
        },
      },
      credencial: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0,
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
      tableName: 'adm_empleados',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'codemp' }],
        },
        {
          name: 'adm_empleados_FK_1',
          using: 'BTREE',
          fields: [{ name: 'cargo' }],
        },
        {
          name: 'FK_adm_empleados_adm_bancos',
          using: 'BTREE',
          fields: [{ name: 'banco' }],
        },
        {
          name: 'FK5adm_empleados_FK_pais_nacimiento',
          using: 'BTREE',
          fields: [{ name: 'pais_nacimiento' }],
        },
        {
          name: 'adm_empleados_FK_pais_nacimiento',
          using: 'BTREE',
          fields: [{ name: 'ciudad_nacimiento' }],
        },
        {
          name: 'adm_empleados_Fk_tipo_documento',
          using: 'BTREE',
          fields: [{ name: 'tipide' }],
        },
        {
          name: 'eps',
          using: 'BTREE',
          fields: [{ name: 'eps' }],
        },
        {
          name: 'arl',
          using: 'BTREE',
          fields: [{ name: 'arl' }],
        },
        {
          name: 'fondo',
          using: 'BTREE',
          fields: [{ name: 'fondo' }],
        },
      ],
    }
  );
};
