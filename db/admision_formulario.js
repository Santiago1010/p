const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admision_formulario', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_admision: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admision_aspirantes_anio',
        key: 'id'
      }
    },
    id_aspirante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admision_aspirantes',
        key: 'id'
      }
    },
    id_admision_config: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admision_config',
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
    id_dpto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_departamentos',
        key: 'id'
      }
    },
    id_ciudad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_ciudades',
        key: 'idCiudades'
      }
    },
    id_pais: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'adm_paises',
        key: 'Codigo'
      }
    },
    estado: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "Pendiente"
    },
    estado_respuesta: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    forma_pago: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    doc_type: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    doc_number: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    doc_number_aspirante: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ip: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_respuesta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ref_payco: {
      type: DataTypes.STRING(80),
      allowNull: true,
      unique: "ref_payco"
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    precio: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    valor_total: {
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
      allowNull: true,
      defaultValue: 0.00
    },
    porc_iva: {
      type: DataTypes.DECIMAL(10,2),
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
    }
  }, {
    sequelize,
    tableName: 'admision_formulario',
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
        name: "ref_payco",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ref_payco" },
        ]
      },
      {
        name: "FK_admision_formulario_admision_aspirantes_anio",
        using: "BTREE",
        fields: [
          { name: "id_admision" },
        ]
      },
      {
        name: "FK_admision_formulario_admision_config",
        using: "BTREE",
        fields: [
          { name: "id_admision_config" },
        ]
      },
      {
        name: "FK_admision_formulario_admision_aspirantes",
        using: "BTREE",
        fields: [
          { name: "id_aspirante" },
        ]
      },
      {
        name: "FK_admision_formulario_config_grados",
        using: "BTREE",
        fields: [
          { name: "id_grado" },
        ]
      },
      {
        name: "FK_admision_formulario_usuarios",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
      {
        name: "FK_admision_formulario_tienda_cupones",
        using: "BTREE",
        fields: [
          { name: "id_cupon" },
        ]
      },
      {
        name: "FK_admision_formulario_adm_departamentos",
        using: "BTREE",
        fields: [
          { name: "id_dpto" },
        ]
      },
      {
        name: "FK_admision_formulario_adm_ciudades",
        using: "BTREE",
        fields: [
          { name: "id_ciudad" },
        ]
      },
      {
        name: "FK_admision_formulario_adm_paises",
        using: "BTREE",
        fields: [
          { name: "id_pais" },
        ]
      },
    ]
  });
};
