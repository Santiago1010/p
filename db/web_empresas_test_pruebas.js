const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_empresas_test_pruebas',
    {
      id_prueba: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_empresa: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'web_empresas',
          key: 'id_empresa',
        },
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      fecha_activacion: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        comment: 'Fecha de activación de la prueba',
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
      tableName: 'web_empresas_test_pruebas',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_prueba' }],
        },
        {
          name: 'FK_test_empresa_pruebas',
          using: 'BTREE',
          fields: [{ name: 'id_empresa' }],
        },
      ],
    }
  );
};
