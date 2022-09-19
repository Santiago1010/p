const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acd_escinscritos', {
    codesc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'acd_escuelas',
        key: 'codesc'
      }
    },
    codest: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'matricula_estudiantes',
        key: 'id'
      }
    },
    id_anio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'config_anios',
        key: 'id'
      }
    },
    estado: {
      type: DataTypes.ENUM('Activo','Retirado'),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fecret: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    control: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'acd_escinscritos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codesc" },
          { name: "codest" },
          { name: "id_anio" },
        ]
      },
      {
        name: "FK_acd_escinscritos_acd_estudiantes",
        using: "BTREE",
        fields: [
          { name: "codest" },
        ]
      },
      {
        name: "FK_acd_escinscritos_config_anios",
        using: "BTREE",
        fields: [
          { name: "id_anio" },
        ]
      },
    ]
  });
};
