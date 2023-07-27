const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'test_general',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      codtest: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: 'codtest',
      },
      titulo: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      subtitulo: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      desde: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      hasta: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      portada: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      tipo_test: {
        type: DataTypes.ENUM('test', 'encuesta', 'quiz', 'actividad'),
        allowNull: false,
        defaultValue: 'test',
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
      tableName: 'test_general',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'codtest',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'codtest' }],
        },
      ],
    }
  );
};
