const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_empresas_registros_landing',
    {
      id_registro_landing: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_empresas',
          key: 'id_empresa',
        },
      },
      id_suscripción: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_suscripciones',
          key: 'id_suscripcion',
        },
      },
      id_formulario: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_formularios',
          key: 'id_formulario',
        },
      },
      nombre_landing: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      url_landing: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      fecha_add: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      nro_registros: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      estado: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 1,
      },
      link_ejecucion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'web_empresas_registros_landing',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_registro_landing' }],
        },
        {
          name: 'FK_web_empresas_registros_landing_web_empresas',
          using: 'BTREE',
          fields: [{ name: 'id_empresa' }],
        },
        {
          name: 'FK_web_empresas_registros_landing_web_suscripciones',
          using: 'BTREE',
          fields: [{ name: 'id_suscripción' }],
        },
        {
          name: 'FK_web_empresas_registros_landing_web_formularios',
          using: 'BTREE',
          fields: [{ name: 'id_formulario' }],
        },
      ],
    }
  );
};
