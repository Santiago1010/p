const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_suscripcion_notificaciones',
    {
      id_suscripcion_notificacion: {
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
      id_notificacion: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_notificaciones',
          key: 'id_notificacion',
        },
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      usadas: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      estado: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
        comment: '1= activo, 0=inactivo',
      },
    },
    {
      sequelize,
      tableName: 'web_suscripcion_notificaciones',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion_notificacion' }],
        },
        {
          name: 'FK_web_suscripcion_notificaciones_web_empresas',
          using: 'BTREE',
          fields: [{ name: 'id_empresa' }],
        },
        {
          name: 'FK_web_suscripcion_notificaciones_web_notificaciones',
          using: 'BTREE',
          fields: [{ name: 'id_notificacion' }],
        },
      ],
    }
  );
};
