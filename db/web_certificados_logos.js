const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_certificados_logos',
    {
      id_logo: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_certificado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        references: {
          model: 'web_certificados',
          key: 'id_certificado',
        },
      },
      link_logo: {
        type: DataTypes.STRING(250),
        allowNull: false,
        defaultValue: '',
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
      tableName: 'web_certificados_logos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_logo' }],
        },
        {
          name: 'FK_web_certificados_logos_web_certificados',
          using: 'BTREE',
          fields: [{ name: 'id_certificado' }],
        },
      ],
    }
  );
};
