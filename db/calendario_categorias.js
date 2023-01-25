const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'calendario_categorias',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      id_departamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'departamentos',
          key: 'id',
        },
      },
      backgroundColor: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      borderColor: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      textColor: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      activo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      tableName: 'calendario_categorias',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'FK_calendario_departamentos',
          using: 'BTREE',
          fields: [{ name: 'id_departamento' }],
        },
      ],
    }
  );
};
