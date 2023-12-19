const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_certificados_patrocinadores',
    {
      id_patrocinador: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_certificado: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_certificados',
          key: 'id_certificado',
        },
      },
      link_logo_patrocinador: {
        type: DataTypes.STRING(200),
        allowNull: true,
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
      tableName: 'web_certificados_patrocinadores',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_patrocinador' }],
        },
        {
          name: 'FK_web_certificados_patrocinadores_web_certificados',
          using: 'BTREE',
          fields: [{ name: 'id_certificado' }],
        },
      ],
    }
  );
};
