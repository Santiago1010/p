const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_prsexterno', {
    identificacion: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    nombres: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    telefonos: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    correos: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    cargo: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.STRING(450),
      allowNull: true
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fechamax: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    estado: {
      type: DataTypes.ENUM('A','I'),
      allowNull: true
    },
    contratado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "0 = nuevo, 1 = contratado, 2= no contratado"
    },
    addusr: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'test_prsexterno',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "identificacion" },
        ]
      },
    ]
  });
};
