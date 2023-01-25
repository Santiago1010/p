const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_usuarios_empresas_historial',
    {
      id_historial: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_empresas',
          key: 'id_empresa',
        },
      },
      tipo: {
        type: DataTypes.ENUM('eliminados', 'creados'),
        allowNull: false,
        defaultValue: 'creados',
      },
      fecha: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      observacion: {
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: '',
      },
    },
    {
      sequelize,
      tableName: 'web_usuarios_empresas_historial',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_historial' }],
        },
        {
          name: 'web_usuarios_empresas_historial_UN',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_empresa' }, { name: 'tipo' }, { name: 'fecha' }],
        },
      ],
    }
  );
};
