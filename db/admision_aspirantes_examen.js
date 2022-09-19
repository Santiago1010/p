const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admision_aspirantes_examen', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_aspirante: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admision_aspirantes_anio',
        key: 'id'
      },
      unique: "FK_admision_aspirantes_examen_admision_aspirantes_anio"
    },
    usuario: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    pass: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'admision_aspirantes_examen',
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
      {
        name: "id_aspirante",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_aspirante" },
        ]
      },
    ]
  });
};
