const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_imagenes_rutas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo_categoria: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "tipo_categoria"
    },
    url: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    forma: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_imagenes_rutas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "tipo_categoria",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tipo_categoria" },
        ]
      },
    ]
  });
};
