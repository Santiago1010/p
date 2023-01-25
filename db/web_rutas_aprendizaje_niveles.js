const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'web_rutas_aprendizaje_niveles',
    {
      id_web_ruta_aprendizaje_nivel: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      nombre_ruta_nivel: {
        type: DataTypes.STRING(80),
        allowNull: false,
        defaultValue: '',
      },
    },
    {
      sequelize,
      tableName: 'web_rutas_aprendizaje_niveles',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id_web_ruta_aprendizaje_nivel' }],
        },
      ],
    }
  );
};
