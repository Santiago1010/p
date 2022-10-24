const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_empleados', {
    codemp: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    nomemp: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    apemp: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    tipide: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'config_tipos_ident',
        key: 'id'
      }
    },
    fchnac: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    mailemp: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    sexemp: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    telemp: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    celemp: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    passemp: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    diremp: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sdapass: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cargo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_cargos',
        key: 'codcrg'
      }
    },
    nomcargo: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    fotusr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    prfemp: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "perfil",
      references: {
        model: 'usuarios_perfil',
        key: 'id'
      }
    },
    dirgrp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    stdemp: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "ACTIVO",
      comment: "estado"
    },
    codinf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "codigo verificacion"
    },
    sednom: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "sede razon social"
    },
    depuser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'adm_dependencias',
        key: 'coddep'
      }
    },
    niv_escolar: {
      type: DataTypes.ENUM('Ninguno','Preescolar','Primaria','Secundaria & Media'),
      allowNull: false
    },
    eps: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    fondo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    banco: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_bancos',
        key: 'id'
      }
    },
    nom_cuenta: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    tipo_cuenta: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nro_cuenta: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ctbedt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Editar procesos contables"
    },
    updusr: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    fchupd: {
      type: DataTypes.DATE,
      allowNull: false
    },
    entrevista: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Realiza entrevista"
    },
    updestudy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    ultfirma: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    evalucion: {
      type: DataTypes.ENUM('Empleado','Docente','General'),
      allowNull: false,
      defaultValue: "Empleado"
    },
    contratos: {
      type: DataTypes.STRING(50),
      allowNull: true,
      references: {
        model: 'adm_empleados_contrato',
        key: 'codcontrato'
      }
    },
    revisar_proyectos: {
      type: DataTypes.STRING(80),
      allowNull: false,
      comment: "revisar_test"
    },
    pais_nacimiento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_paises',
        key: 'id'
      }
    },
    ciudad_nacimiento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_ciudades',
        key: 'idCiudades'
      }
    },
    credencial: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'adm_empleados',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codemp" },
        ]
      },
      {
        name: "FK_adm_empleados_adm_dependencias",
        using: "BTREE",
        fields: [
          { name: "depuser" },
        ]
      },
      {
        name: "Fk_adm_perfil_id",
        using: "BTREE",
        fields: [
          { name: "prfemp" },
        ]
      },
      {
        name: "adm_empleados_FK",
        using: "BTREE",
        fields: [
          { name: "contratos" },
        ]
      },
      {
        name: "adm_empleados_FK_1",
        using: "BTREE",
        fields: [
          { name: "cargo" },
        ]
      },
      {
        name: "FK_adm_empleados_adm_bancos",
        using: "BTREE",
        fields: [
          { name: "banco" },
        ]
      },
      {
        name: "FK5adm_empleados_FK_pais_nacimiento",
        using: "BTREE",
        fields: [
          { name: "pais_nacimiento" },
        ]
      },
      {
        name: "adm_empleados_FK_pais_nacimiento",
        using: "BTREE",
        fields: [
          { name: "ciudad_nacimiento" },
        ]
      },
      {
        name: "adm_empleados_Fk_tipo_documento",
        using: "BTREE",
        fields: [
          { name: "tipide" },
        ]
      },
    ]
  });
};
