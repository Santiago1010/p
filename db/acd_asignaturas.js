const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acd_asignaturas', {
    codasig: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    desasig: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    codplataf: {
      type: DataTypes.STRING(15),
      allowNull: true,
      comment: "codigo plataforma"
    },
    id_area: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    certificado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tipo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'acd_asignaturas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codasig" },
        ]
      },
    ]
  });
};
