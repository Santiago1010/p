const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctb_novedad_control_creditos', {
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    usuario: {
      type: DataTypes.STRING(15),
      allowNull: false,
      references: {
        model: 'adm_empleados',
        key: 'codemp'
      }
    },
    valor_cierre: {
      type: DataTypes.DECIMAL(12,0),
      allowNull: false
    },
    nrocreditos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sincronizacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'ctb_novedad_control_creditos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
      {
        name: "FK_ctb_novedad_control_creditos_adm_empleados",
        using: "BTREE",
        fields: [
          { name: "usuario" },
        ]
      },
    ]
  });
};
