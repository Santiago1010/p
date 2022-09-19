const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enc_configuracion', {
    cod_encuesta: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    nom_encuesta: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    des_encuesta: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    totalpreguntas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    estado: {
      type: DataTypes.ENUM('A','I'),
      allowNull: false,
      defaultValue: "A"
    },
    addusr: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    fechadd: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'enc_configuracion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cod_encuesta" },
        ]
      },
    ]
  });
};
