const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_ventas', {
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
    id_consecutivo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_consecutivos',
        key: 'id'
      }
    },
    id_bodega: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_bodegas',
        key: 'id'
      }
    },
    consecutivo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_venta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_ventas',
        key: 'id'
      }
    },
    id_empresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_empresas',
        key: 'id'
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    fecha_vencimiento: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    fecha_respuesta: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    estado: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    estado_respuesta: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    prefijo: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    ref_payco: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    id_familiar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_familiares',
        key: 'id'
      }
    },
    forma_pago: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "1 = contado, 2 = credito"
    },
    valor_venta: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    valor_total: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    valor_cambio: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    valor_pagado: {
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
    valor_iva: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    valor_ipoconsumo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    valor_cupon: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    porc_cupon: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    origen: {
      type: DataTypes.ENUM('web','sgp'),
      allowNull: true,
      defaultValue: "sgp"
    },
    id_cupon: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_cupones',
        key: 'id'
      }
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    entrega_estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    entrega_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    entrega_tercero: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_familiares',
        key: 'id'
      }
    },
    entrega_fecha_cierre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      references: {
        model: 'acd_escuelas_uniformes_fechas',
        key: 'id'
      }
    },
    entrega_fecha: {
      type: DataTypes.DATE,
      allowNull: true
    },
    entrega_firma: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    credito_numero: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    credito_estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "0 =pendiente, 1 = pagado"
    },
    credito_tipo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "1 = Dias, 2 = Cuotas"
    },
    credito_pago: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "1 = Mensual, 2 = Quincenal, 3 = Semanal, 4 = Diario"
    },
    credito_pcuota: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    credito_abono: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    pladepago: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    pladepago_ajuste: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    abogado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tienda_ventas',
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
        name: "FK_tienda_ventas_matricula_familiares",
        using: "BTREE",
        fields: [
          { name: "id_familiar" },
        ]
      },
      {
        name: "FK_tienda_ventas_tienda_consecutivos",
        using: "BTREE",
        fields: [
          { name: "id_consecutivo" },
        ]
      },
      {
        name: "FK_tienda_ventas_tienda_cupones",
        using: "BTREE",
        fields: [
          { name: "id_cupon" },
        ]
      },
      {
        name: "FK_tienda_ventas_usuarios",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
      {
        name: "FK_tienda_ventas_tienda_bodegas",
        using: "BTREE",
        fields: [
          { name: "id_bodega" },
        ]
      },
      {
        name: "FK_tienda_ventas_matricula_familiares_2",
        using: "BTREE",
        fields: [
          { name: "entrega_tercero" },
        ]
      },
      {
        name: "FK_tienda_ventas_usuarios_2",
        using: "BTREE",
        fields: [
          { name: "entrega_user" },
        ]
      },
      {
        name: "FK_tienda_ventas_tienda_ventas",
        using: "BTREE",
        fields: [
          { name: "id_venta" },
        ]
      },
      {
        name: "FK_tienda_ventas_config_empresas",
        using: "BTREE",
        fields: [
          { name: "id_empresa" },
        ]
      },
      {
        name: "FK_tienda_ventas_acd_escuelas_uniformes_fechas",
        using: "BTREE",
        fields: [
          { name: "entrega_fecha_cierre" },
        ]
      },
    ]
  });
};
