const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'permisos_api_opciones',
    {
      id_permiso: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      descripcion: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      id_opcion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'opciones',
          key: 'id',
        },
      },
      url_api: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      metodo: {
        type: DataTypes.STRING(30),
        allowNull: false,
        comment: 'GET, POST, PUT, DELETE, PATCH -> individual o lista separada por comas ',
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
      tableName: 'permisos_api_opciones',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_permiso' }],
        },
        {
          name: 'id_opcion',
          using: 'BTREE',
          fields: [{ name: 'id_opcion' }],
        },
      ],
    }
  );
};
