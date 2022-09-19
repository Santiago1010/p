const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_entrevistas_empleados', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_entrevista: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_entrevistas',
        key: 'id'
      }
    },
    id_grado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_grados',
        key: 'id'
      }
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
    tableName: 'config_entrevistas_empleados',
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
        name: "FK_config_entrevistas_empleados_config_entrevistas",
        using: "BTREE",
        fields: [
          { name: "id_entrevista" },
        ]
      },
      {
        name: "FK_config_entrevistas_empleados_config_grados",
        using: "BTREE",
        fields: [
          { name: "id_grado" },
        ]
      },
      {
        name: "FK_config_entrevistas_empleados_adm_empleados",
        using: "BTREE",
        fields: [
          { name: "codemp" },
        ]
      },
    ]
  });
};
