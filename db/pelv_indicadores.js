const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'pelv_indicadores',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      id_criterio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'pevl_criterios',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'pelv_indicadores',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'pelv_indicadores_FK',
          using: 'BTREE',
          fields: [{ name: 'id_criterio' }],
        },
      ],
    }
  );
};
