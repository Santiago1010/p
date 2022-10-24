const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_contratos_validate', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mail: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    codcontrato: {
      type: DataTypes.STRING(80),
      allowNull: false,
      references: {
        model: 'adm_empleados_contrato',
        key: 'codcontrato'
      }
    },
    code: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    estado: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'adm_contratos_validate',
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
        name: "FK_cod_contrato_contra_validate",
        using: "BTREE",
        fields: [
          { name: "codcontrato" },
        ]
      },
    ]
  });
};
