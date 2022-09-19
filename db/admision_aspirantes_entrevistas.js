const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admision_aspirantes_entrevistas', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_aspirante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admision_aspirantes_anio',
        key: 'id'
      }
    },
    id_aspirante_info: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admision_aspirantes',
        key: 'id'
      }
    },
    id_visita: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admision_visitas',
        key: 'id'
      }
    },
    id_entrevista: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'config_entrevistas',
        key: 'id'
      }
    },
    id_modalidad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_modalidad',
        key: 'id'
      }
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
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
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "0 = Sin asignar 1 = Asignadas 2 = Atendidas 3=Admitidas 4 = Admitida compromiso 5 = No admitida"
    },
    firma: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    observacion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    activo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'admision_aspirantes_entrevistas',
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
        name: "FK_admision_entrevistas_config_entrevistas",
        using: "BTREE",
        fields: [
          { name: "id_entrevista" },
        ]
      },
      {
        name: "FK_admision_entrevistas_config_modalidad",
        using: "BTREE",
        fields: [
          { name: "id_modalidad" },
        ]
      },
      {
        name: "FK_admision_aspirantes_entrevistas_admision_aspirantes_anio",
        using: "BTREE",
        fields: [
          { name: "id_aspirante" },
        ]
      },
      {
        name: "FK_admision_aspirantes_entrevistas_usuarios",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "FK_admision_aspirantes_entrevistas_admision_visitas",
        using: "BTREE",
        fields: [
          { name: "id_visita" },
        ]
      },
      {
        name: "FK_admision_aspirantes_entrevistas_admision_aspirantes",
        using: "BTREE",
        fields: [
          { name: "id_aspirante_info" },
        ]
      },
      {
        name: "FK_admision_aspirantes_entrevistas_adm_sedes",
        using: "BTREE",
        fields: [
          { name: "sede" },
        ]
      },
    ]
  });
};
