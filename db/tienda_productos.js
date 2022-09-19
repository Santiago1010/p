const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_productos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codigo_servicio: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_categorias',
        key: 'id'
      }
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    indicador_impconsumo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    porcentaje_impconsumo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    indicador_iva: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    porcentaje_iva: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    porcentaje_descuento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    validar_existencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    visible_web: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    precio_costo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    activo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    compuesto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    nombre_corto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(80),
      allowNull: true,
      unique: "url"
    },
    orden_compuesto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    matricula: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "0 = producto no es matricula, 1 = producto de matricula"
    },
    restaurante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    transporte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    merienda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    nuevos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    def: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    preorden: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fecha_entrega: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_pedido: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tienda_productos',
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
        name: "url",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "url" },
        ]
      },
      {
        name: "codigo_codigo_servicio",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
          { name: "codigo_servicio" },
        ]
      },
      {
        name: "FK_compras_productos_compras_categorias",
        using: "BTREE",
        fields: [
          { name: "id_categoria" },
        ]
      },
      {
        name: "codigo_servicio",
        using: "BTREE",
        fields: [
          { name: "codigo_servicio" },
        ]
      },
    ]
  });
};
