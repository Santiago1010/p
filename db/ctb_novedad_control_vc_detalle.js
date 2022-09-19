const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctb_novedad_control_vc_detalle', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    producto: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totaldetalle: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codventa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ctb_novedad_control_vc',
        key: 'codventa'
      }
    }
  }, {
    sequelize,
    tableName: 'ctb_novedad_control_vc_detalle',
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
        name: "ctb_novedad_control_vc_detalle_FK",
        using: "BTREE",
        fields: [
          { name: "codventa" },
        ]
      },
    ]
  });
};
