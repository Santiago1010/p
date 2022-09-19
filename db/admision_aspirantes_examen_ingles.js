const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admision_aspirantes_examen_ingles', {
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
      },
      unique: "FK_admision_aspirantes_examen_ingles_admision_aspirantes_anio"
    },
    id_entrevista: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admision_aspirantes_entrevistas',
        key: 'id'
      }
    },
    id_examen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admision_config_examen_ingles',
        key: 'id'
      }
    },
    observaciones: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    url_evidencia: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    nivel: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    nivelacion_recurso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admision_config_examen_ingles_tipos_recurs',
        key: 'id'
      }
    },
    nivelacion_fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    speaking: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    writing: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    reading: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    listening: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "0 = no usado"
    }
  }, {
    sequelize,
    tableName: 'admision_aspirantes_examen_ingles',
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
        name: "id_aspirante",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_aspirante" },
        ]
      },
      {
        name: "FK_admision_config_examen_ingles",
        using: "BTREE",
        fields: [
          { name: "id_examen" },
        ]
      },
      {
        name: "FK_admision_aspirantes_examen_ingles_entrevistas",
        using: "BTREE",
        fields: [
          { name: "id_entrevista" },
        ]
      },
      {
        name: "FK_admision_aspirantes_examen_inglmen_ingles_tipos_recurs",
        using: "BTREE",
        fields: [
          { name: "nivelacion_recurso" },
        ]
      },
    ]
  });
};
