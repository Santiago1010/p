const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_curriculos_documentos',
    {
      id_documento: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      tipo: {
        type: DataTypes.BLOB,
        allowNull: false,
        defaultValue: 'documento',
      },
      url: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      id_curriculo: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'Documento especifico de un curriculo',
        references: {
          model: 'web_curriculos',
          key: 'id_curriculo',
        },
      },
      id_suscripcion: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'Documento especifico de una suscripción',
        references: {
          model: 'web_suscripciones',
          key: 'id_suscripcion',
        },
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
      tableName: 'web_curriculos_documentos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_documento' }],
        },
        {
          name: 'web_curriculos_documentos_FK',
          using: 'BTREE',
          fields: [{ name: 'id_suscripcion' }],
        },
        {
          name: 'web_curriculos_documentos_FK_1',
          using: 'BTREE',
          fields: [{ name: 'id_curriculo' }],
        },
      ],
    }
  );
};
