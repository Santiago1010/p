const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctb_proveedores', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo_persona: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "n"
    },
    tipo_documento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ctb_proveedores_tipos_ident',
        key: 'id'
      }
    },
    documento: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    nombre_comercial: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    nombres: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    apellidos: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    p_nombre: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    s_nombre: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    p_apellido: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    s_apellido: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    celular: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    pais: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'adm_paises',
        key: 'Codigo'
      }
    },
    ciudad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_ciudades',
        key: 'idCiudades'
      }
    },
    banco: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_bancos',
        key: 'id'
      }
    },
    cuenta_propia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    nombre_titular: {
      type: DataTypes.STRING(80),
      allowNull: true,
      defaultValue: ""
    },
    documento_titular: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: ""
    },
    tipo_cuenta: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    numero_cuenta: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ""
    },
    declarante_renta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    firma: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pregunta: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    resp_pregunta: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    rut: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    soporte_eps: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    certificacion_bancaria: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ctb_proveedores',
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
        name: "FK_adm_proveedores_adm_proveedores",
        using: "BTREE",
        fields: [
          { name: "tipo_documento" },
        ]
      },
      {
        name: "FK_ctb_proveedores_adm_paises",
        using: "BTREE",
        fields: [
          { name: "pais" },
        ]
      },
      {
        name: "FK_ctb_proveedores_adm_bancos",
        using: "BTREE",
        fields: [
          { name: "banco" },
        ]
      },
      {
        name: "FK_ctb_proveedores_adm_ciudades",
        using: "BTREE",
        fields: [
          { name: "ciudad" },
        ]
      },
    ]
  });
};
