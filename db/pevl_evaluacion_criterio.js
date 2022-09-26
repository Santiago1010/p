const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pevl_evaluacion_criterio', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_evaluacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pevl_evaluacion',
        key: 'id'
      }
    },
    id_criterio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pevl_criterios',
        key: 'id'
      }
    },
    porcentaje: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pevl_evaluacion_criterio',
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
        name: "pevl_evaluacion_criterio_FK",
        using: "BTREE",
        fields: [
          { name: "id_evaluacion" },
        ]
      },
      {
        name: "pevl_evaluacion_criterio_FK_1",
        using: "BTREE",
        fields: [
          { name: "id_criterio" },
        ]
      },
    ]
  });
};
