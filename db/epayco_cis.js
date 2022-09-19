const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('epayco_cis', {
    fecha: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ""
    },
    refpago: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    refcliente: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    valor: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      defaultValue: 0
    },
    descripcion: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    franquisia: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    banco: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    respuesta: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    documento: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    nombres: {
      type: DataTypes.STRING(80),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'epayco_cis',
    timestamps: false,
    indexes: [
      {
        name: "refpago",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "refpago" },
        ]
      },
    ]
  });
};
