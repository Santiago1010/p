const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_programas_formacion', {
    id_programa_formacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_programa_formacion_categoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_programas_formacion_categoria',
        key: 'id_programa_formacion_categoria'
      }
    },
    nombre_programa_formacion: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_programas_formacion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_programa_formacion" },
        ]
      },
      {
        name: "FK_web_programas_formacion_web_programas_formacion_categoria",
        using: "BTREE",
        fields: [
          { name: "id_programa_formacion_categoria" },
        ]
      },
    ]
  });
};
