const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_certificados', {
    id_certificado: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_certificados: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    contenido_html: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contenido_css: {
      type: DataTypes.TEXT,
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
