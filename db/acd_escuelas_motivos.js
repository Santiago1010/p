const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acd_escuelas_motivos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_matricula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'matricula_estudiantes_anio',
        key: 'id'
      },
      unique: "FK_acd_escuelas_motivos_matricula_estudiantes_anio"
    },
    motivo: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'acd_escuelas_motivos',
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
        name: "id_matricula",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_matricula" },
        ]
      },
    ]
  });
};
