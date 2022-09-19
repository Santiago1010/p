const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_empleados_estudios', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    niv_escolar: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    perfil: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    codemp: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'adm_empleados',
        key: 'codemp'
      }
    }
  }, {
    sequelize,
    tableName: 'adm_empleados_estudios',
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
        name: "adm_empleados_estudios_FK",
        using: "BTREE",
        fields: [
          { name: "codemp" },
        ]
      },
    ]
  });
};
