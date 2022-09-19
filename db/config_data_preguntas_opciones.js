const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_data_preguntas_opciones', {
    id_config: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'config_data_preguntas_formulario',
        key: 'id_config'
      }
    },
    id_opcion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'config_data_opciones',
        key: 'id_opcion'
      }
    },
    depende: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    orden: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'config_data_preguntas_opciones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_config" },
          { name: "id_opcion" },
        ]
      },
      {
        name: "FK_config_data_preguntas_opciones_config_data_opciones",
        using: "BTREE",
        fields: [
          { name: "id_opcion" },
        ]
      },
    ]
  });
};
