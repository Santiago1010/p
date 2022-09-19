const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tienda_ventas_cxc_comparacion', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codestumatricula: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codempresa: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fechatransaccion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    coddetalle: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codrecibo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codestadocuenta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    valor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cod: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codformapago: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codlugarpago: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    codcuenta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    valorpagado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    coddocumentocontable: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    consecutivocomprob: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tienda_ventas_cxc_comparacion',
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
    ]
  });
};
