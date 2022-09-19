const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_planes_acciones_reg', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_plan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_ventas',
        key: 'id'
      }
    },
    id_accion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_planes_acciones',
        key: 'id'
      }
    },
    id_respuesta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tienda_planes_acciones_resp',
        key: 'id'
      }
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    observaciones: {
      type: DataTypes.STRING(350),
      allowNull: false,
      defaultValue: ""
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fecha_registro: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'tienda_planes_acciones_reg',
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
        name: "FK_tienda_planes_acciones_reg_tienda_ventas",
        using: "BTREE",
        fields: [
          { name: "id_plan" },
        ]
      },
      {
        name: "FK_tienda_planes_acciones_reg_tienda_planes_acciones",
        using: "BTREE",
        fields: [
          { name: "id_accion" },
        ]
      },
      {
        name: "FK_tienda_planes_acciones_reg_tienda_planes_acciones_resp",
        using: "BTREE",
        fields: [
          { name: "id_respuesta" },
        ]
      },
      {
        name: "FK_tienda_planes_acciones_reg_usuarios",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
    ]
  });
};
