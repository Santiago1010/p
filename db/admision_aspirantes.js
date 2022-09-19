const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admision_aspirantes', {
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
      unique: "codigo_especial"
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
    ident_ciudad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_ciudades',
        key: 'idCiudades'
      }
    },
    ident_dpto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_departamentos',
        key: 'id'
      }
    },
    ident_pais: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'adm_paises',
        key: 'Codigo'
      }
    },
    p_nombre: {
      type: DataTypes.STRING(80),
      allowNull: true,
      defaultValue: " "
    },
    s_nombre: {
      type: DataTypes.STRING(80),
      allowNull: true,
      defaultValue: " "
    },
    p_apellido: {
      type: DataTypes.STRING(80),
      allowNull: true,
      defaultValue: " "
    },
    s_apellido: {
      type: DataTypes.STRING(80),
      allowNull: true,
      defaultValue: " "
    },
    avatar: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    genero: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_data_opciones',
        key: 'id_opcion'
      }
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ciudad_nacimiento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_ciudades',
        key: 'idCiudades'
      }
    },
    dpto_nacimiento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_departamentos',
        key: 'id'
      }
    },
    pais_nacimiento: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'adm_paises',
        key: 'Codigo'
      }
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
    correo: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    estatura: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    peso: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    barrio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_barrios',
        key: 'id'
      }
    },
    estrato: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_data_opciones',
        key: 'id_opcion'
      }
    },
    nombre_colegio_anterior: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    direccion_colegio_anterior: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    correo_colegio_anterior: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    telefono_colegio_anterior: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    idioma_habla_casa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_data_opciones',
        key: 'id_opcion'
      }
    },
    idioma_habla_estudiante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_data_opciones',
        key: 'id_opcion'
      }
    },
    familiares_colegio: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    familiares_grado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_grados',
        key: 'id'
      }
    },
    numero_hermanos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_data_opciones',
        key: 'id_opcion'
      }
    },
    puesto_entre_hermanos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_data_opciones',
        key: 'id_opcion'
      }
    },
    estado_civil_padres: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_data_opciones',
        key: 'id_opcion'
      }
    },
    tipo_permanencia: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_data_opciones',
        key: 'id_opcion'
      }
    },
    tipo_sangre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_data_opciones',
        key: 'id_opcion'
      }
    },
    religion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_data_opciones',
        key: 'id_opcion'
      }
    },
    tipo_vivienda: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_data_opciones',
        key: 'id_opcion'
      }
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
    }
  }, {
    sequelize,
    tableName: 'admision_aspirantes',
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
        name: "codigo_especial",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo_especial" },
        ]
      },
      {
        name: "FK_admision_aspirantes_config_tipos_ident",
        using: "BTREE",
        fields: [
          { name: "ident_tipo" },
        ]
      },
      {
        name: "FK_admision_aspirantes_adm_ciudades",
        using: "BTREE",
        fields: [
          { name: "ident_ciudad" },
        ]
      },
      {
        name: "FK_admision_aspirantes_adm_departamentos",
        using: "BTREE",
        fields: [
          { name: "ident_dpto" },
        ]
      },
      {
        name: "FK_admision_aspirantes_adm_ciudades_2",
        using: "BTREE",
        fields: [
          { name: "ciudad_nacimiento" },
        ]
      },
      {
        name: "FK_admision_aspirantes_adm_departamentos_2",
        using: "BTREE",
        fields: [
          { name: "dpto_nacimiento" },
        ]
      },
      {
        name: "FK_admision_aspirantes_adm_paises",
        using: "BTREE",
        fields: [
          { name: "ident_pais" },
        ]
      },
      {
        name: "FK_admision_aspirantes_adm_paises_2",
        using: "BTREE",
        fields: [
          { name: "pais_nacimiento" },
        ]
      },
      {
        name: "FK_admision_aspirantes_config_data_opciones",
        using: "BTREE",
        fields: [
          { name: "genero" },
        ]
      },
      {
        name: "FK_admision_aspirantes_adm_barrios",
        using: "BTREE",
        fields: [
          { name: "barrio" },
        ]
      },
      {
        name: "FK_admision_aspirantes_config_data_opciones_2",
        using: "BTREE",
        fields: [
          { name: "estrato" },
        ]
      },
      {
        name: "FK_admision_aspirantes_config_data_opciones_3",
        using: "BTREE",
        fields: [
          { name: "idioma_habla_casa" },
        ]
      },
      {
        name: "FK_admision_aspirantes_config_data_opciones_4",
        using: "BTREE",
        fields: [
          { name: "idioma_habla_estudiante" },
        ]
      },
      {
        name: "FK_admision_aspirantes_config_data_opciones_5",
        using: "BTREE",
        fields: [
          { name: "numero_hermanos" },
        ]
      },
      {
        name: "FK_admision_aspirantes_config_data_opciones_6",
        using: "BTREE",
        fields: [
          { name: "puesto_entre_hermanos" },
        ]
      },
      {
        name: "FK_admision_aspirantes_config_data_opciones_7",
        using: "BTREE",
        fields: [
          { name: "estado_civil_padres" },
        ]
      },
      {
        name: "FK_admision_aspirantes_config_data_opciones_8",
        using: "BTREE",
        fields: [
          { name: "tipo_permanencia" },
        ]
      },
      {
        name: "FK_admision_aspirantes_config_data_opciones_9",
        using: "BTREE",
        fields: [
          { name: "tipo_sangre" },
        ]
      },
      {
        name: "FK_admision_aspirantes_config_data_opciones_10",
        using: "BTREE",
        fields: [
          { name: "religion" },
        ]
      },
      {
        name: "FK_admision_aspirantes_config_data_opciones_11",
        using: "BTREE",
        fields: [
          { name: "tipo_vivienda" },
        ]
      },
      {
        name: "FK_admision_aspirantes_config_grados",
        using: "BTREE",
        fields: [
          { name: "familiares_grado" },
        ]
      },
    ]
  });
};
