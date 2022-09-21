const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_rutas_aprendizaje', {
    id_ruta_aprendizaje: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_ruta_aprendizaje_categoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_rutas_aprendizaje_categorias',
        key: 'id_ruta_aprendizaje_categoria'
      }
    },
    nombre_ruta_aprendizaje: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_rutas_aprendizaje',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_ruta_aprendizaje" },
        ]
      },
      {
        name: "web_rutas_aprendizaje_FK",
        using: "BTREE",
        fields: [
          { name: "id_ruta_aprendizaje_categoria" },
        ]
      },
    ]
  });
};
