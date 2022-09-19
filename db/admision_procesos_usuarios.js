const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admision_procesos_usuarios', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    proceso: {
      type: DataTypes.ENUM('inscripcion','documentos','entrevistas','matriculas'),
      allowNull: false,
      defaultValue: "inscripcion"
    }
  }, {
    sequelize,
    tableName: 'admision_procesos_usuarios',
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
        name: "id_usuario_proceso",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
          { name: "proceso" },
        ]
      },
    ]
  });
};
