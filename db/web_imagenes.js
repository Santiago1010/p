const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_imagenes',
    {
      id_imagen: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_web_usuario: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_usuarios',
          key: 'id_usuario',
        },
      },
      categoria_imagen: {
        type: DataTypes.ENUM('portada', 'perfil'),
        allowNull: true,
      },
      url: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      estado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      tableName: 'web_imagenes',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_imagen' }],
        },
        {
          name: 'FK_web_imagenes_web_usuarios',
          using: 'BTREE',
          fields: [{ name: 'id_web_usuario' }],
        },
      ],
    }
  );
};
