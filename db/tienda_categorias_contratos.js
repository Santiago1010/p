const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_categorias_contratos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_categorias',
        key: 'id'
      }
    },
    id_contrato: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_contratos',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'tienda_categorias_contratos',
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
        name: "FK_tienda_categorias_contratos_tienda_categorias",
        using: "BTREE",
        fields: [
          { name: "id_categoria" },
        ]
      },
      {
        name: "FK_tienda_categorias_contratos_matricula_contratos",
        using: "BTREE",
        fields: [
          { name: "id_contrato" },
        ]
      },
    ]
  });
};
