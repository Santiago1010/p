const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_curriculos',
    {
      id_curriculo: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_curriculo_categoria: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_curriculos_categorias',
          key: 'id_curriculo_categoria',
        },
      },
      logo: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'web_curriculos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_curriculo' }],
        },
        {
          name: 'FK_web_curriculos_web_curriculos_categorias',
          using: 'BTREE',
          fields: [{ name: 'id_curriculo_categoria' }],
        },
      ],
    }
  );
};
