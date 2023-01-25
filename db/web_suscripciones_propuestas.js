const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripciones_propuestas',
    {
      id_suscripcion_propuesta: {
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
      total_licencias: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fecha_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      fecha_fin: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'web_suscripciones_propuestas',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_propuesta' }],
        },
        {
          name: 'FK_web_suscripciones_licencias_web_empresas',
          using: 'BTREE',
          fields: [{ name: 'id_empresa' }],
        },
      ],
    }
  );
};
