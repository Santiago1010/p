const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evl_configuracion', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    codevl: {
      type: DataTypes.STRING(50),
      allowNull: false,
      references: {
        model: 'acd_elementos',
        key: 'codelm'
      }
    },
    perfil: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      references: {
        model: 'gnr_parametros_perfiles',
        key: 'descipcion'
      }
    },
    descripcion: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    icono: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    numpreg: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    metodo: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    parametros: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    grdaplica: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    desc_texto: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'evl_configuracion',
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
        name: "FK_evl_configuracion_gnr_parametros_perfiles",
        using: "BTREE",
        fields: [
          { name: "perfil" },
        ]
      },
      {
        name: "FK_evl_configuracion_acd_elementos",
        using: "BTREE",
        fields: [
          { name: "codevl" },
        ]
      },
    ]
  });
};
