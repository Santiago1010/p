const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_cupones', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cupon_general: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_cupones_general',
        key: 'id'
      }
    },
    cupon: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    porcentaje_descuento: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0.00
    },
    fecha_expiracion: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    limite: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    usados: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ident: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "1 = matriculas general 2 = admisiones 3 = ventas 4 = matriculas especifico"
    },
    fecha_add: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    user_add: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    autorizado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_cupon_autoriza',
        key: 'id'
      }
    },
    categoria: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    id_concepto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_productos',
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
    cupon_controlacademic: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_cupones_controlacademic',
        key: 'id'
      }
    },
    origen: {
      type: DataTypes.ENUM('dashboard','web','general'),
      allowNull: true,
      defaultValue: "dashboard"
    },
    id_anio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_anios',
        key: 'id'
      }
    },
    nombre_aspirante: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    nombre_padre: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(80),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tienda_cupones',
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
        name: "ident",
        using: "BTREE",
        fields: [
          { name: "ident" },
        ]
      },
      {
        name: "FK_tienda_cupones_tienda_productos",
        using: "BTREE",
        fields: [
          { name: "id_concepto" },
        ]
      },
      {
        name: "FK_tienda_cupones_tienda_cupon_autoriza",
        using: "BTREE",
        fields: [
          { name: "autorizado" },
        ]
      },
      {
        name: "FK_tienda_cupones_config_grados",
        using: "BTREE",
        fields: [
          { name: "id_grado" },
        ]
      },
      {
        name: "FK_tienda_cupones_tienda_cupones_control",
        using: "BTREE",
        fields: [
          { name: "cupon_controlacademic" },
        ]
      },
      {
        name: "FK_tienda_cupones_config_anios",
        using: "BTREE",
        fields: [
          { name: "id_anio" },
        ]
      },
      {
        name: "FK_tienda_cupones_tienda_cupones_general",
        using: "BTREE",
        fields: [
          { name: "id_cupon_general" },
        ]
      },
      {
        name: "FK_tienda_cupones_usuarios",
        using: "BTREE",
        fields: [
          { name: "user_add" },
        ]
      },
    ]
  });
};
