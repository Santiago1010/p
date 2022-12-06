const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_certificados_firmas', {
    id_firma: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_certificado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'web_certificados',
        key: 'id_certificado'
      }
    },
    autor_firma: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    perfil_autor_firma: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cargo_autor_firma: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    link_firma: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_certificados_firmas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_firma" },
        ]
      },
      {
        name: "FK_web_certificados_firmas_web_certificados",
        using: "BTREE",
        fields: [
          { name: "id_certificado" },
        ]
      },
    ]
  });
};
