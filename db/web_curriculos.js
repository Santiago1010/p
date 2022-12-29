const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_curriculos', {
    id_curriculo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_curriculo_categoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_curriculos_categorias',
        key: 'id_curriculo_categoria'
      }
    },
    nombre_curriculo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    descripcion_curriculo: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_curriculos',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_curriculo" },
        ]
      },
      {
        name: "FK_web_curriculos_web_curriculos_categorias",
        using: "BTREE",
        fields: [
          { name: "id_curriculo_categoria" },
        ]
      },
    ]
  });
};
