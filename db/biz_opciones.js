const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'biz_opciones',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      orden: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      activo: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
      depende: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'biz_opciones',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'biz_opciones',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'depende',
          using: 'BTREE',
          fields: [{ name: 'depende' }],
        },
      ],
    }
  );
};
