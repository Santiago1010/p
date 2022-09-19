const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acd_ortgeneral', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "codigo"
    },
    ciudres: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nitinst: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    nomint: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    id_anio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'config_anios',
        key: 'id'
      }
    },
    passinst: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    dirinst: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    telfij: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    telcel: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    emlint: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    rpsinst: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    nroinv: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totasp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totvlr: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    estesc: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    fchadd: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ronda: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    pagar_aspirantes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'acd_ortgeneral',
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
        name: "nitinst_id_anio",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nitinst" },
          { name: "id_anio" },
        ]
      },
      {
        name: "codigo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
      {
        name: "FK_acd_ortgeneral_config_anios",
        using: "BTREE",
        fields: [
          { name: "id_anio" },
        ]
      },
    ]
  });
};
