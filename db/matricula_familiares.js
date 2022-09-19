const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matricula_familiares', {
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
    ident: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "ident"
    },
    ident_tipo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_tipos_ident',
        key: 'id'
      }
    },
    ident_expedicion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_ciudades',
        key: 'id'
      }
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
    lugar_nacimiento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_ciudades',
        key: 'id'
      }
    },
    pais: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: "CO",
      references: {
        model: 'adm_paises',
        key: 'Codigo'
      }
    },
    departamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_departamentos',
        key: 'id'
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
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    celular: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    imagenperfil: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    profesion: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    estado: {
      type: DataTypes.ENUM('ACTIVO','INACTIVO'),
      allowNull: true,
      defaultValue: "ACTIVO"
    },
    tipo_trabajo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    industria: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    passusr: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'matricula_familiares',
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
        name: "ident",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ident" },
        ]
      },
      {
        name: "FK_matricula_familiares_config_tipos_ident",
        using: "BTREE",
        fields: [
          { name: "ident_tipo" },
        ]
      },
      {
        name: "FK_matricula_familiares_config_ciudades",
        using: "BTREE",
        fields: [
          { name: "ident_expedicion" },
        ]
      },
      {
        name: "FK_matricula_familiares_config_ciudades_2",
        using: "BTREE",
        fields: [
          { name: "lugar_nacimiento" },
        ]
      },
      {
        name: "FK_matricula_familiares_adm_paises",
        using: "BTREE",
        fields: [
          { name: "pais" },
        ]
      },
      {
        name: "FK_matricula_familiares_adm_departamentos",
        using: "BTREE",
        fields: [
          { name: "departamento" },
        ]
      },
      {
        name: "FK_matricula_familiares_adm_ciudades",
        using: "BTREE",
        fields: [
          { name: "ciudad" },
        ]
      },
    ]
  });
};
