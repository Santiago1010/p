const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'biz_usuarios_areas',
    {
      id_usuario_area: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_biz_usuario: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'biz_usuarios',
          key: 'id',
        },
      },
      id_area_empresa: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_empresas_areas',
          key: 'id_empresa_area',
        },
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
      tableName: 'biz_usuarios_areas',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_usuario_area' }],
        },
        {
          name: 'id_biz_usuario',
          using: 'BTREE',
          fields: [{ name: 'id_biz_usuario' }],
        },
        {
          name: 'id_area_empresa',
          using: 'BTREE',
          fields: [{ name: 'id_area_empresa' }],
        },
      ],
    }
  );
};
