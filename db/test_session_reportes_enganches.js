const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'test_session_reportes_enganches',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      numero_enganche: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: 'Número de enganche',
        unique: 'numero_enganche',
      },
      texto: {
        type: DataTypes.TEXT,
        allowNull: false,
        comment: 'Texto de enganche',
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
      tableName: 'test_session_reportes_enganches',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'numero_enganche',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'numero_enganche' }],
        },
      ],
    }
  );
};
