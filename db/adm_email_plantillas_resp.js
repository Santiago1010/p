const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'adm_email_plantillas_resp',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_email_plantilla: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'adm_email_plantillas',
          key: 'id',
        },
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id',
        },
      },
      grados: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'adm_email_plantillas_resp',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }],
        },
        {
          name: 'FK_adm_email_plantillas_resp_adm_email_plantillas',
          using: 'BTREE',
          fields: [{ name: 'id_email_plantilla' }],
        },
        {
          name: 'FK_adm_email_plantillas_resp_usuarios',
          using: 'BTREE',
          fields: [{ name: 'id_usuario' }],
        },
      ],
    }
  );
};
