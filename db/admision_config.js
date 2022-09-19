const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('admision_config', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_matricula: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_anio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'config_anios',
        key: 'id'
      }
    },
    vigencia_form: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 180
    },
    price_form: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    impuesto_venta_form: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "1 significa iva, el 2 ipoconsumo, el 3 ninguno"
    },
    impuesto_incluido_form: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "1 el impuesto ya esta incluido en el precio del formulario"
    },
    indicador_iva_form: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    porcentaje_iva_form: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    porcentaje_aproba_examen: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true,
      defaultValue: 73.00
    },
    activo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    declaracion: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'admision_config',
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
        name: "FK_admision_config_config_anios",
        using: "BTREE",
        fields: [
          { name: "id_anio" },
        ]
      },
    ]
  });
};
