const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'usuarios_permisos_opciones',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id',
        },
      },
      id_opcion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'opciones',
          key: 'id',
        },
      },
      metodo: {
        type: DataTypes.STRING(10),
        allowNull: false,
        comment: 'GET,POST,PUT,DELETE',
      },
    },
    {
      sequelize,
      tableName: 'usuarios_permisos_opciones',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'FK_permisos_usuarios',
          using: 'BTREE',
          fields: [{ name: 'id_usuario' }],
        },
        {
          name: 'FK_permisos_opciones',
          using: 'BTREE',
          fields: [{ name: 'id_opcion' }],
        },
      ],
    }
  );
};
