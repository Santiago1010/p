const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctb_novedad_control_cierresdetalle', {
    codcredito_detalle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codemp: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    codubicacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ctb_novedad_control_cajas',
        key: 'codigo'
      }
    },
    deuda: {
      type: DataTypes.DECIMAL(12,0),
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "0 = Sin enviar a novedades 1 = enviado a novedades 2 = sin contrato 3 = se desconto por documento contable"
    },
    codcredito: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ctb_novedad_control_creditos',
        key: 'codigo'
      }
    },
    nombres: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    userDB: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "0 = No esta en la base de datos  \/\/ 1 = esta en la base de dato"
    },
    sincronizar: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
      comment: "0 = no sincronizado 1 = sincronizado"
    }
  }, {
    sequelize,
    tableName: 'ctb_novedad_control_cierresdetalle',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codcredito_detalle" },
        ]
      },
      {
        name: "FK__adm_empleados",
        using: "BTREE",
        fields: [
          { name: "codemp" },
        ]
      },
      {
        name: "ctb_novedad_control_cierresdetalle_FK",
        using: "BTREE",
        fields: [
          { name: "codubicacion" },
        ]
      },
      {
        name: "ctb_novedad_control_cierresdetalle_FK_1",
        using: "BTREE",
        fields: [
          { name: "codcredito" },
        ]
      },
    ]
  });
};
