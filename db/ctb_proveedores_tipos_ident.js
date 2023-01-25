const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'ctb_proveedores_tipos_ident',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: 'codigo',
      },
      codigo_epayco: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '',
      },
      nombre: {
        type: DataTypes.STRING(70),
        allowNull: false,
      },
      abv: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      activo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      tableName: 'ctb_proveedores_tipos_ident',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'codigo',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'codigo' }],
        },
      ],
    }
  );
};
