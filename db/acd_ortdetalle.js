const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acd_ortdetalle', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ident: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    nombres: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'acd_ortcategorias',
        key: 'id'
      }
    },
    grado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'config_grados',
        key: 'id'
      }
    },
    idioma: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    housing: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    id_ints: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'acd_ortgeneral',
        key: 'id'
      }
    },
    foto: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    genero: {
      type: DataTypes.ENUM('M','F'),
      allowNull: false
    },
    id_anio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'config_anios',
        key: 'id'
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    tiempodc: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: "00:00:00"
    },
    tiempext: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: "00:00:00"
    },
    ordenpago: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    estadopago: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pago_estado: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pago_estado_respuesta: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pago_ref_payco: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pago_fecha_respuesta: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    pago_forma_pago: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pago_id_pais: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'adm_paises',
        key: 'Codigo'
      }
    },
    pago_id_dpto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_departamentos',
        key: 'id'
      }
    },
    pago_id_ciudad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_ciudades',
        key: 'idCiudades'
      }
    },
    pago_doc_type: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pago_doc_number: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pago_name: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    pago_card_name: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    pago_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pago_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pago_ip: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    pago_fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    pago_valor_total: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'acd_ortdetalle',
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
        name: "FK_acd_ortdetalle_acd_grados",
        using: "BTREE",
        fields: [
          { name: "grado" },
        ]
      },
      {
        name: "FK_acd_ortdetalle_acd_ortgeneral",
        using: "BTREE",
        fields: [
          { name: "id_ints" },
        ]
      },
      {
        name: "FK_acd_ortdetalle_config_anios",
        using: "BTREE",
        fields: [
          { name: "id_anio" },
        ]
      },
      {
        name: "FK_acd_ortdetalle_acd_ortcategorias",
        using: "BTREE",
        fields: [
          { name: "id_categoria" },
        ]
      },
      {
        name: "FK_acd_ortdetalle_adm_paises",
        using: "BTREE",
        fields: [
          { name: "pago_id_pais" },
        ]
      },
      {
        name: "FK_acd_ortdetalle_adm_departamentos",
        using: "BTREE",
        fields: [
          { name: "pago_id_dpto" },
        ]
      },
      {
        name: "FK_acd_ortdetalle_adm_ciudades",
        using: "BTREE",
        fields: [
          { name: "pago_id_ciudad" },
        ]
      },
    ]
  });
};
