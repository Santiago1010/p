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
      comment: "null: ruta autogestionada",
      references: {
        model: 'web_rutas_aprendizaje_categorias',
        key: 'id_ruta_aprendizaje_categoria'
      }
    },
    id_ruta_aprendizaje_nivel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_rutas_aprendizaje_niveles',
        key: 'id_web_ruta_aprendizaje_nivel'
      }
    },
    nombre_ruta_aprendizaje: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "web_rutas_aprendizaje_UN"
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
        name: "web_rutas_aprendizaje_UN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nombre_ruta_aprendizaje" },
        ]
      },
      {
        name: "web_rutas_aprendizaje_FK",
        using: "BTREE",
        fields: [
          { name: "id_ruta_aprendizaje_categoria" },
        ]
      },
      {
        name: "FK_web_rutas_aprendizaje_web_rutas_aprendizaje_niveles",
        using: "BTREE",
        fields: [
          { name: "id_ruta_aprendizaje_nivel" },
        ]
      },
    ]
  });
};
