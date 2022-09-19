const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enc_opcionespreg', {
    codopc: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codpreg: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'enc_preguntas',
        key: 'codpreg'
      }
    },
    descopcion: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    estado: {
      type: DataTypes.ENUM('A','I'),
      allowNull: false,
      defaultValue: "A"
    }
  }, {
    sequelize,
    tableName: 'enc_opcionespreg',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codopc" },
        ]
      },
      {
        name: "FK_enc_opcionespreg_enc_preguntas",
        using: "BTREE",
        fields: [
          { name: "codpreg" },
        ]
      },
    ]
  });
};
