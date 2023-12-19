const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'test_preguntas_opciones',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_pregunta: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'test_preguntas',
          key: 'codpre',
        },
      },
      id_opcion: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'test_opciones',
          key: 'id',
        },
      },
      resp_correcta: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      tableName: 'test_preguntas_opciones',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'FK_test_preguntas_opciones_test_preguntas',
          using: 'BTREE',
          fields: [{ name: 'id_pregunta' }],
        },
        {
          name: 'FK_test_preguntas_opciones_test_opciones',
          using: 'BTREE',
          fields: [{ name: 'id_opcion' }],
        },
      ],
    }
  );
};
