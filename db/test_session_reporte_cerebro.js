const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('test_session_reporte_cerebro', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recurso: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    id_cerebro_dominante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'test_cerebros',
        key: 'id'
      }
    },
    id_cerebro_subdominate: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'test_cerebros',
        key: 'id'
      }
    },
    id_session_reporte: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'test_session_reportes',
        key: 'id'
      }
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    updusr: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    fchadd: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'test_session_reporte_cerebro',
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
        name: "FK_test_session_reporte_cerebro_test_cerebros",
        using: "BTREE",
        fields: [
          { name: "id_cerebro_dominante" },
        ]
      },
      {
        name: "FK_test_session_reporte_cerebro_test_cerebros_2",
        using: "BTREE",
        fields: [
<<<<<<< HEAD
          { name: "id_cerebro_subdominate" },
=======
          { name: "id_cerebro_subdominante" },
>>>>>>> dev_m
        ]
      },
      {
        name: "FK_test_session_reporte_cerebro_test_session_reportes",
        using: "BTREE",
        fields: [
          { name: "id_session_reporte" },
        ]
      },
    ]
  });
};
