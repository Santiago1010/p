const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_curriculos', {
    id_curriculo: {
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
    }
  }, {
    sequelize,
    tableName: 'web_curriculos',
    timestamps: false,
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
        name: "web_curriculos_FK",
        using: "BTREE",
        fields: [
          { name: "id_curriculo_categoria" },
        ]
      },
    ]
  });
};
