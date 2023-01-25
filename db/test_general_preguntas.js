const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'test_general_preguntas',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_test_general: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'test_general',
          key: 'id',
        },
      },
      id_pregunta: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'test_preguntas',
          key: 'codpre',
        },
      },
      puntaje_pregunta: {
        type: DataTypes.DECIMAL(10, 0),
        allowNull: true,
      },
      tiempo: {
        type: DataTypes.TIME,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'test_general_preguntas',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'id_test_general_id_pregunta',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_test_general' }, { name: 'id_pregunta' }],
        },
        {
          name: 'FK_test_general_preguntas2_test_preguntas',
          using: 'BTREE',
          fields: [{ name: 'id_pregunta' }],
        },
      ],
    }
  );
};
