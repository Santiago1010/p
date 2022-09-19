const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admision_formulario_caja', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_formulario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admision_formulario',
        key: 'id'
      }
    },
    id_medio_pago: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_medios_pago',
        key: 'id'
      }
    },
    valor: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    vaucher: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'admision_formulario_caja',
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
        name: "FK_admision_formulario_caja_tienda_medios_pago",
        using: "BTREE",
        fields: [
          { name: "id_medio_pago" },
        ]
      },
      {
        name: "FK_admision_formulario_caja_tienda_ventas",
        using: "BTREE",
        fields: [
          { name: "id_formulario" },
        ]
      },
    ]
  });
};
