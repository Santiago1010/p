const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_notificaciones',
    {
      id_notificacion: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre_notificacion: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      id_notificacion_categoria: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_notificaciones_categorias',
          key: 'id_notificacion_categoria',
        },
      },
      id_componente: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_componentes',
          key: 'id_componente',
        },
      },
      forma: {
        type: DataTypes.ENUM('Email', 'Msm', 'Push', 'WhatsApp'),
        allowNull: true,
        defaultValue: 'Push',
      },
    },
    {
      sequelize,
      tableName: 'web_notificaciones',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_notificacion' }],
        },
        {
          name: 'FK_web_notificaciones_web_notificaciones_categorias',
          using: 'BTREE',
          fields: [{ name: 'id_notificacion_categoria' }],
        },
        {
          name: 'FK_web_notificaciones_web_componentes',
          using: 'BTREE',
          fields: [{ name: 'id_componente' }],
        },
      ],
    }
  );
};
