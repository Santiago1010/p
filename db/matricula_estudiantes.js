const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('matricula_estudiantes', {
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
    codigo_especial: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "codigo_epecial"
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
    genero: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    celular: {
      type: DataTypes.STRING(80),
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
    barrio: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    estrato: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha_add: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    fecha_update: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    id_datos_medicos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'matricula_estudiantes_datosmedicos',
        key: 'id'
      }
    },
    nuevo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    pais_nacimiento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_paises',
        key: 'id'
      }
    },
    dep_nacimiento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_departamentos',
        key: 'id'
      }
    },
    ciu_nacimiento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_ciudades',
        key: 'idCiudades'
      }
    },
    pais_residencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_paises',
        key: 'id'
      }
    },
    dep_residencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_departamentos',
        key: 'id'
      }
    },
    ciu_residencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_ciudades',
        key: 'idCiudades'
      }
    },
    dir_residencia: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    barrio_residencia: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    correo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    tipo_vivienda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tiene_hermanos: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    hijo_mayor: {
      type: DataTypes.ENUM('s','n'),
      allowNull: true
    },
    estatura: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    peso: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    tipo_sangre: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    religion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    passest: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'matricula_estudiantes',
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
        name: "codigo_epecial",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo_especial" },
        ]
      },
      {
        name: "FK_matricula_estudiantes_config_tipos_ident",
        using: "BTREE",
        fields: [
          { name: "ident_tipo" },
        ]
      },
      {
        name: "FK_matricula_estudiantes_config_ciudades",
        using: "BTREE",
        fields: [
          { name: "ident_expedicion" },
        ]
      },
      {
        name: "matricula_estudiantes_FK",
        using: "BTREE",
        fields: [
          { name: "id_datos_medicos" },
        ]
      },
      {
        name: "matricula_estudiantes_pais_nacimiento",
        using: "BTREE",
        fields: [
          { name: "pais_nacimiento" },
        ]
      },
      {
        name: "matricula_estudiantes_pais_residencia",
        using: "BTREE",
        fields: [
          { name: "pais_residencia" },
        ]
      },
      {
        name: "matricula_estudiantes_dep_nacimiento",
        using: "BTREE",
        fields: [
          { name: "dep_nacimiento" },
        ]
      },
      {
        name: "matricula_estudiantes_dep_residencia",
        using: "BTREE",
        fields: [
          { name: "dep_residencia" },
        ]
      },
      {
        name: "matricula_estudiantes_ciu_residencia",
        using: "BTREE",
        fields: [
          { name: "ciu_residencia" },
        ]
      },
      {
        name: "matricula_estudiantes_ciu_nacimiento",
        using: "BTREE",
        fields: [
          { name: "ciu_nacimiento" },
        ]
      },
    ]
  });
};
