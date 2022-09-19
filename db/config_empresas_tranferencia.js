const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config_empresas_tranferencia', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_empresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'config_empresas',
        key: 'id'
      }
    },
    cuenta: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ""
    },
    nro_cuenta: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ""
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: ""
    },
    descripcion: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ""
    },
    origen: {
      type: DataTypes.ENUM('uniformes','oratoria','formulario'),
      allowNull: false,
      defaultValue: "uniformes"
    },
    activo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'config_empresas_tranferencia',
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
        name: "FK_config_empresas_tranferencia_config_empresas",
        using: "BTREE",
        fields: [
          { name: "id_empresa" },
        ]
      },
    ]
  });
};
