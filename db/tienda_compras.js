const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_compras', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_consecutivo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_consecutivos',
        key: 'id'
      }
    },
    consecutivo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    prefijo: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    id_tercero: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'terceros',
        key: 'id'
      }
    },
    id_proveedor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ctb_proveedores',
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
    id_autoriza: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    id_recibe: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    fecha_autoriza: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_recibe: {
      type: DataTypes.DATE,
      allowNull: true
    },
    total_costo: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    items: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0 = revision, 1 = enviada, 2 = finalizada"
    },
    activo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'tienda_compras',
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
        name: "FK_tienda_compras_terceros",
        using: "BTREE",
        fields: [
          { name: "id_tercero" },
        ]
      },
      {
        name: "FK_tienda_compras_usuarios",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
      {
        name: "FK_tienda_compras_tienda_consecutivos",
        using: "BTREE",
        fields: [
          { name: "id_consecutivo" },
        ]
      },
      {
        name: "FK_tienda_compras_usuarios_2",
        using: "BTREE",
        fields: [
          { name: "id_autoriza" },
        ]
      },
      {
        name: "FK_tienda_compras_usuarios_3",
        using: "BTREE",
        fields: [
          { name: "id_recibe" },
        ]
      },
      {
        name: "FK_tienda_compras_ctb_proveedores",
        using: "BTREE",
        fields: [
          { name: "id_proveedor" },
        ]
      },
    ]
  });
};
