const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_suscripciones', {
    id_suscripcion: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_suscripcion_linea: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'web_suscripciones_lineas',
        key: 'id_suscripcion_linea'
      }
    },
    id_empresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_empresas',
        key: 'id_empresa'
      }
    },
    id_propuesta: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_suscripciones_propuestas',
        key: 'id_suscripcion_propuesta'
      }
    },
    nombre_suscripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: false
    },
    auto_gestionable: {
      type: DataTypes.ENUM('virtual','interno','externo'),
      allowNull: true,
      comment: "null: no aplica, virtual, interno, externo"
    },
    limite_cursos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "null: no aplica"
    },
    tipo: {
      type: DataTypes.ENUM('escuela','programa'),
      allowNull: true,
      defaultValue: "escuela"
    },
    total_licencias: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    incluir_todos: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      comment: "Incluir todos los cursos disponibles, solo aplica para programas"
    }
  }, {
    sequelize,
    tableName: 'web_suscripciones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_suscripcion" },
        ]
      },
      {
        name: "FK_web_escuelas_web_empresas",
        using: "BTREE",
        fields: [
          { name: "id_empresa" },
        ]
      },
      {
        name: "FK_web_suscripciones_web_suscripcion_lineas",
        using: "BTREE",
        fields: [
          { name: "id_suscripcion_linea" },
        ]
      },
      {
        name: "FK_web_suscripciones_web_suscripciones_propuestas",
        using: "BTREE",
        fields: [
          { name: "id_propuesta" },
        ]
      },
    ]
  });
};
