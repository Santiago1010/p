const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_certificados', {
    id_certificado: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_certificado: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    paragrafo_certifcado: {
      type: DataTypes.ENUM('Certifica a:','Otorga a:'),
      allowNull: true
    },
    contenido_certificado: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    fondo_certificado: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    color_footer: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    tipo: {
      type: DataTypes.ENUM('Empresas','Programas'),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_certificados',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_certificado" },
        ]
      },
    ]
  });
};
