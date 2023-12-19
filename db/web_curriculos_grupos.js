const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_curriculos_grupos',
    {
      id_grupo_curriculo: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_sede_curriculo: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_curriculos_sedes',
          key: 'id_sede_curriculo',
        },
      },
      nombre_grupo: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      estado: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 1,
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
      tableName: 'web_curriculos_grupos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_grupo_curriculo' }],
        },
        {
          name: 'web_suscripciones_curriculos_sedes_grupos_FK',
          using: 'BTREE',
          fields: [{ name: 'id_sede_curriculo' }],
        },
      ],
    }
  );
};
