const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admision_familiares', {
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
    lugar_nacimiento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_ciudades',
        key: 'id'
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
    celular: {
      type: DataTypes.STRING(50),
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
    cargo: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ingreso_mensual: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    nombre_lugar_trabajo: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    profesion: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    tipo_trabajo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_data_opciones',
        key: 'id_opcion'
      }
    },
    industria_empresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_data_opciones',
        key: 'id_opcion'
      }
    },
    vive_con_aspirante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_data_opciones',
        key: 'id_opcion'
      }
    },
    exalumno: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_data_opciones',
        key: 'id_opcion'
      }
    },
    test_fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    test_fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    test_pass: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'admision_familiares',
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
        name: "FK_admision_familiares_config_tipos_ident",
        using: "BTREE",
        fields: [
          { name: "ident_tipo" },
        ]
      },
      {
        name: "FK_admision_familiares_config_ciudades",
        using: "BTREE",
        fields: [
          { name: "ident_expedicion" },
        ]
      },
      {
        name: "FK_admision_familiares_config_ciudades_2",
        using: "BTREE",
        fields: [
          { name: "lugar_nacimiento" },
        ]
      },
      {
        name: "FK_admision_familiares_config_data_opciones",
        using: "BTREE",
        fields: [
          { name: "vive_con_aspirante" },
        ]
      },
      {
        name: "FK_admision_familiares_config_data_opciones_2",
        using: "BTREE",
        fields: [
          { name: "exalumno" },
        ]
      },
      {
        name: "FK_admision_familiares_config_data_opciones_3",
        using: "BTREE",
        fields: [
          { name: "industria_empresa" },
        ]
      },
      {
        name: "FK_admision_familiares_config_data_opciones_4",
        using: "BTREE",
        fields: [
          { name: "tipo_trabajo" },
        ]
      },
    ]
  });
};
