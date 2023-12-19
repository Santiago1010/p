const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'adm_grupos',
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
      id_anio: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'config_anios',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'adm_grupos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'FK_adm_grupos_config_anios',
          using: 'BTREE',
          fields: [{ name: 'id_anio' }],
        },
      ],
    }
  );
};
