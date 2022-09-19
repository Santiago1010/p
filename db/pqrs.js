const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pqrs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    asunto: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(450),
      allowNull: true
    },
    soporte: {
      type: DataTypes.STRING(150),
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
    id_empleado: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'adm_empleados',
        key: 'codemp'
      }
    },
    ident: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    nombres: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    celular: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    departamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'departamentos',
        key: 'id'
      }
    },
    tipo_solicitud: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pqrs_tipo_solicitud',
        key: 'id'
      }
    },
    sede: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_sedes',
        key: 'codsed'
      }
    },
    tipo_perfil: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pqrs_tipo_perfil',
        key: 'id'
      }
    },
    tipo_ident: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_tipos_ident',
        key: 'id'
      }
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    estado: {
      type: DataTypes.ENUM('nuevo','proceso','finalizado'),
      allowNull: true,
      defaultValue: "nuevo"
    }
  }, {
    sequelize,
    tableName: 'pqrs',
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
        name: "FK_pqrs_matricula_familiares",
        using: "BTREE",
        fields: [
          { name: "id_familiar" },
        ]
      },
      {
        name: "FK_pqrs_adm_empleados",
        using: "BTREE",
        fields: [
          { name: "id_empleado" },
        ]
      },
      {
        name: "FK_pqrs_pqrs_tipo_solicitud",
        using: "BTREE",
        fields: [
          { name: "tipo_solicitud" },
        ]
      },
      {
        name: "FK_pqrs_adm_sedes",
        using: "BTREE",
        fields: [
          { name: "sede" },
        ]
      },
      {
        name: "FK_pqrs_pqrs_tipo_perfil",
        using: "BTREE",
        fields: [
          { name: "tipo_perfil" },
        ]
      },
      {
        name: "FK_pqrs_config_tipos_ident",
        using: "BTREE",
        fields: [
          { name: "tipo_ident" },
        ]
      },
      {
        name: "FK_pqrs_departamentos",
        using: "BTREE",
        fields: [
          { name: "departamento" },
        ]
      },
    ]
  });
};
