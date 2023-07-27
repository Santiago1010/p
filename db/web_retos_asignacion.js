const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_retos_asignacion',
    {
      id_reto_asignacion: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_reto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_retos',
          key: 'id_reto',
        },
      },
      id_suscripcion: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_suscripciones',
          key: 'id_suscripcion',
        },
      },
      id_area: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_empresas_areas',
          key: 'id_empresa_area',
        },
      },
    },
    {
      sequelize,
      tableName: 'web_retos_asignacion',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_reto_asignacion' }],
        },
        {
          name: 'id_reto',
          using: 'BTREE',
          fields: [{ name: 'id_reto' }],
        },
        {
          name: 'id_suscripcion',
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion' }],
        },
        {
          name: 'id_area',
          using: 'BTREE',
          fields: [{ name: 'id_area' }],
        },
      ],
    }
  );
};
