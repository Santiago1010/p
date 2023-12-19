const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_componentes',
    {
      id_componente: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre_componente: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      id_componente_categoria: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_componentes_categorias',
          key: 'id_componente_categoria',
        },
      },
      correo_componente: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      apikey_componente: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      apisecrect: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      token: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      estado: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
      tableName: 'web_componentes',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_componente' }],
        },
        {
          name: 'web_componentes_FK',
          using: 'BTREE',
          fields: [{ name: 'id_componente_categoria' }],
        },
      ],
    }
  );
};
