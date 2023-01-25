const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_curriculos_modulos_lecciones',
    {
      id_leccion_curriculo: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_modulo: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'web_curriculos_modulos',
          key: 'id_modulo_curriculo',
        },
      },
      nombre: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      tipo: {
        type: DataTypes.ENUM('Documento', 'Video', 'Audio'),
        allowNull: true,
      },
      recurso: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      orden: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      estado: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      tableName: 'web_curriculos_modulos_lecciones',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_leccion_curriculo' }],
        },
        {
          name: 'FK_web_curriculos_modulos_lecciones_web_curriculos_modulos',
          using: 'BTREE',
          fields: [{ name: 'id_modulo' }],
        },
      ],
    }
  );
};
