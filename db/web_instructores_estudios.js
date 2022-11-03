const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_instructores_estudios', {
    id_instructor_estudio: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_instructor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_instructores',
        key: 'id_instructor'
      }
    },
    nivel_formacion: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    titulo_obtenido: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    universidad: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_instructores_estudios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_instructor_estudio" },
        ]
      },
      {
        name: "FK_web_instructores_estudios_web_instructores",
        using: "BTREE",
        fields: [
          { name: "id_instructor" },
        ]
      },
    ]
  });
};
