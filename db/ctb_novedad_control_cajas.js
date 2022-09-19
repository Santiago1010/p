const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctb_novedad_control_cajas', {
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lugar: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    id_novedad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ctb_novedad_tipos',
        key: 'codigo'
      }
    }
  }, {
    sequelize,
    tableName: 'ctb_novedad_control_cajas',
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
        name: "FK_ctb_novedad_control_cajas_ctb_novedad_tipos",
        using: "BTREE",
        fields: [
          { name: "id_novedad" },
        ]
      },
    ]
  });
};
