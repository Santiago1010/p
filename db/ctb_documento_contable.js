const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctb_documento_contable', {
    resolucion: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    prefijo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    sede: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    minimo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    maximo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    usados: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    activo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'ctb_documento_contable',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "resolucion" },
        ]
      },
    ]
  });
};
