const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_actividades_ejercicios_usuarios', {
    id_test_actividade_ejercicio_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cod_ejercicio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'test_actividades_ejercicios',
        key: 'cod_ejercicio'
      }
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_usuarios',
        key: 'id_usuario'
      }
    },
    evaluacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    estado: {
      type: DataTypes.ENUM('disponible','realizada','en proceso'),
      allowNull: true,
      defaultValue: "en proceso"
    }
  }, {
    sequelize,
    tableName: 'test_actividades_ejercicios_usuarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_test_actividade_ejercicio_usuario" },
        ]
      },
      {
        name: "cod_ejercicio_id_usuario",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_ejercicio" },
          { name: "id_usuario" },
        ]
      },
      {
        name: "FK_test_actividades_ejercicios_usuarios_web_usuarios",
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
    ]
  });
};
