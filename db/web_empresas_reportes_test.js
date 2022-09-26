const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_empresas_reportes_test', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_empresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_empresas',
        key: 'id_empresa'
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
    id_rol_usuario_empresa: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'web_empresas_roles',
        key: 'id'
      }
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    addusr: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    fchnac: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_empresas_reportes_test',
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
        name: "FK_web_empresas_reportes_test_web_empresas",
        using: "BTREE",
        fields: [
          { name: "id_empresa" },
        ]
      },
      {
        name: "FK_web_empresas_reportes_test_test_session_reportes",
        using: "BTREE",
        fields: [
          { name: "id_session_reporte" },
        ]
      },
      {
        name: "FK_web_empresas_reportes_test_web_empresas_roles",
        using: "BTREE",
        fields: [
          { name: "id_rol_usuario_empresa" },
        ]
      },
    ]
  });
};
