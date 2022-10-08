const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_general', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codtest: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: "codtest"
    },
    titulo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    desde: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hasta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_preguntas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    estado: {
      type: DataTypes.ENUM('ACTIVO','INACTIVO'),
      allowNull: true,
      defaultValue: "ACTIVO"
    },
    tipo_test: {
      type: DataTypes.ENUM('test','encuesta','quiz'),
      allowNull: true,
      defaultValue: "test"
    }
  }, {
    sequelize,
    tableName: 'test_general',
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
        name: "codtest",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codtest" },
        ]
      },
    ]
  });
};
