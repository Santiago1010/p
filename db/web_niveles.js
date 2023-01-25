const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_niveles',
    {
      id_nivel: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_siguiente_nivel: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        references: {
          model: 'web_niveles',
          key: 'id_nivel',
        },
      },
      nombre_nivel: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      puntos_requeridos: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'web_niveles',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_nivel' }],
        },
        {
          name: 'FK_web_niveles_web_niveles',
          using: 'BTREE',
          fields: [{ name: 'id_siguiente_nivel' }],
        },
      ],
    }
  );
};
