const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'test_preguntas_categorias',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: 'test_categorias',
          key: 'id',
        },
      },
      id_pregunta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'test_preguntas',
          key: 'codpre',
        },
      },
      id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'test_preguntas_categorias',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'test_preguntas_categorias_FK',
          using: 'BTREE',
          fields: [{ name: 'id_pregunta' }],
        },
      ],
    }
  );
};
