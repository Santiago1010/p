const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evl_autestudiantes', {
    codevl: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'gnr_parametros',
        key: 'codpar'
      }
    },
    codasig: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'acd_asignaturas',
        key: 'codasig'
      }
    },
    desemp: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    motivo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mejoraminto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    codevld: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    codgrd: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'config_grados',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'evl_autestudiantes',
    timestamps: false,
    indexes: [
      {
        name: "FK2_asign",
        using: "BTREE",
        fields: [
          { name: "codasig" },
        ]
      },
      {
        name: "FK_parametrosaut",
        using: "BTREE",
        fields: [
          { name: "codevl" },
        ]
      },
      {
        name: "FK_autestudiantes_cursos",
        using: "BTREE",
        fields: [
          { name: "codgrd" },
        ]
      },
    ]
  });
};
