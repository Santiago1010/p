const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctb_novedad_control_vc', {
    codventa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fechahora: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    totalventa: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ubicacion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    caja: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vendedor: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    vendidoa: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    codemp: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    codcierre: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ctb_novedad_control_creditos',
        key: 'codigo'
      }
    },
    autoriza: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_cupon_autoriza',
        key: 'id'
      }
    },
    reclama: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'adm_empleados',
        key: 'codemp'
      }
    },
    observacion: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ctb_novedad_control_vc',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codventa" },
        ]
      },
      {
        name: "ctb_novedad_control_vc_FK_1",
        using: "BTREE",
        fields: [
          { name: "codcierre" },
        ]
      },
      {
        name: "ctb_novedad_control_vc_FK_autoriza",
        using: "BTREE",
        fields: [
          { name: "autoriza" },
        ]
      },
      {
        name: "ctb_novedad_control_vc_FK_empleados",
        using: "BTREE",
        fields: [
          { name: "codemp" },
        ]
      },
      {
        name: "ctb_novedad_control_vc_FK",
        using: "BTREE",
        fields: [
          { name: "reclama" },
        ]
      },
    ]
  });
};
