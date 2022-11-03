const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_instructores_experiencias', {
    id_instructor_experiencia: {
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
    descripcion: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_instructores_experiencias',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_instructor_experiencia" },
        ]
      },
      {
        name: "FK_web_instructores_experiencias_web_instructores",
        using: "BTREE",
        fields: [
          { name: "id_instructor" },
        ]
      },
    ]
  });
};
