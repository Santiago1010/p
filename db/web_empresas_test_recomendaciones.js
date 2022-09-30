const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_empresas_test_recomendaciones', {
    id_empresa_recomendacion_test: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    'id_test_ recomendacion': {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'test_recomendaciones',
        key: 'id'
      }
    },
    id_empresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'web_empresas',
        key: 'id_empresa'
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
      allowNull: false
    },
    addusr: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fchadd: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'web_empresas_test_recomendaciones',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_empresa_recomendacion_test" },
        ]
      },
      {
        name: "FK_web_empresas_recomendaciones_test_test_recomendaciones",
        using: "BTREE",
        fields: [
          { name: "id_test_ recomendacion" },
        ]
      },
      {
        name: "FK_web_empresas_recomendaciones_test_web_empresas",
        using: "BTREE",
        fields: [
          { name: "id_empresa" },
        ]
      },
      {
        name: "FK_web_empresas_recomendaciones_test_web_empresas_roles",
        using: "BTREE",
        fields: [
          { name: "id_rol_usuario_empresa" },
        ]
      },
    ]
  });
};
