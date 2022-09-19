const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_ventas_caja', {
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
    id_medio_pago: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_medios_pago',
        key: 'id'
      }
    },
    id_lugar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_pagos_lugar',
        key: 'id'
      }
    },
    id_cuenta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_pagos_cuentas',
        key: 'id'
      }
    },
    id_tarjeta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_pagos_tarjetas',
        key: 'id'
      }
    },
    id_familiar: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_familiares',
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
    ref_payco: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    valor: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    valor_aux: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    vaucher: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_registro: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    control: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    respuesta: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    envio_control: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    visible: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'tienda_ventas_caja',
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
        name: "FK_tienda_ventas_caja_tienda_ventas",
        using: "BTREE",
        fields: [
          { name: "id_venta" },
        ]
      },
      {
        name: "FK_tienda_ventas_caja_tienda_medios_pago",
        using: "BTREE",
        fields: [
          { name: "id_medio_pago" },
        ]
      },
      {
        name: "FK_tienda_ventas_caja_tienda_pagos_lugar",
        using: "BTREE",
        fields: [
          { name: "id_lugar" },
        ]
      },
      {
        name: "FK_tienda_ventas_caja_tienda_pagos_cuentas",
        using: "BTREE",
        fields: [
          { name: "id_cuenta" },
        ]
      },
      {
        name: "FK_tienda_ventas_caja_tienda_pagos_tarjetas",
        using: "BTREE",
        fields: [
          { name: "id_tarjeta" },
        ]
      },
      {
        name: "FK_tienda_ventas_caja_matricula_familiares",
        using: "BTREE",
        fields: [
          { name: "id_familiar" },
        ]
      },
      {
        name: "FK_tienda_ventas_caja_usuarios",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
    ]
  });
};
