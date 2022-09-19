const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_data_preguntas_formulario', {
    id_config: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_formulario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'config_data_formulario',
        key: 'id'
      }
    },
    id_pregunta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'config_data_preguntas',
        key: 'id_pregunta'
      }
    },
    categoria: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    typo_pregunta: {
      type: DataTypes.ENUM('Unica','Multiple','Abierta'),
      allowNull: false
    },
    origen: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    forma: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    orden: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'config_data_preguntas_formulario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_config" },
        ]
      },
      {
        name: "FK_config_data_preguntas_formulario_config_data_formulario",
        using: "BTREE",
        fields: [
          { name: "id_formulario" },
        ]
      },
      {
        name: "FK_config_data_preguntas_formulario_config_data_preguntas",
        using: "BTREE",
        fields: [
          { name: "id_pregunta" },
        ]
      },
    ]
  });
};
