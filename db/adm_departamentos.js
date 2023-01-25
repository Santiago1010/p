const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'adm_departamentos',
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
      id_pais: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'adm_paises',
          key: 'id',
        },
      },
      codigo: {
        type: DataTypes.CHAR(4),
        allowNull: false,
        unique: 'codigo',
      },
      activo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      tableName: 'adm_departamentos',
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
        {
          name: 'FK_adm_departamentos_adm_paises',
          using: 'BTREE',
          fields: [{ name: 'id_pais' }],
        },
      ],
    }
  );
};
