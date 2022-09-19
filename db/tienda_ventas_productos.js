const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_ventas_productos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "codigo"
    },
    id_venta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_ventas',
        key: 'id'
      }
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_productos',
        key: 'id'
      }
    },
    id_talla: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_productos',
        key: 'id'
      }
    },
    id_anio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_anios',
        key: 'id'
      }
    },
    id_grado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_grados',
        key: 'id'
      }
    },
    id_estudiante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_estudiantes',
        key: 'id'
      }
    },
    id_matricula: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_estudiantes_anio',
        key: 'id'
      }
    },
    id_mes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_meses',
        key: 'id'
      }
    },
    control: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    control_descuento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    control_descuento_resp: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    indicador_impconsumo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    indicador_iva: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    porc_descuento: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    porc_ipconsumo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    porc_iva: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    quantity: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    valor_bruto: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    valor_descuento: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    valor_ipoconsumo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    valor_iva: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    valor_total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    valor_venta: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tienda_ventas_productos',
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
        name: "codigo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
      {
        name: "FK_tienda_ventas_productos_tienda_ventas",
        using: "BTREE",
        fields: [
          { name: "id_venta" },
        ]
      },
      {
        name: "FK_tienda_ventas_productos_tienda_productos",
        using: "BTREE",
        fields: [
          { name: "id_producto" },
        ]
      },
      {
        name: "FK_tienda_ventas_productos_tienda_productos_2",
        using: "BTREE",
        fields: [
          { name: "id_talla" },
        ]
      },
      {
        name: "FK_tienda_ventas_productos_config_anios",
        using: "BTREE",
        fields: [
          { name: "id_anio" },
        ]
      },
      {
        name: "FK_tienda_ventas_productos_config_grados",
        using: "BTREE",
        fields: [
          { name: "id_grado" },
        ]
      },
      {
        name: "FK_tienda_ventas_productos_matricula_estudiantes",
        using: "BTREE",
        fields: [
          { name: "id_estudiante" },
        ]
      },
      {
        name: "FK_tienda_ventas_productos_matricula_estudiantes_anio",
        using: "BTREE",
        fields: [
          { name: "id_matricula" },
        ]
      },
      {
        name: "FK_tienda_ventas_productos_matricula_meses",
        using: "BTREE",
        fields: [
          { name: "id_mes" },
        ]
      },
    ]
  });
};
