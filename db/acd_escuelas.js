const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acd_escuelas', {
    codesc: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombres: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    beneficios: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING(180),
      allowNull: false
    },
    video: {
      type: DataTypes.STRING(180),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(180),
      allowNull: false
    },
    query: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    codplatf: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tienda_productos',
        key: 'id'
      }
    },
    activo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'acd_escuelas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codesc" },
        ]
      },
      {
        name: "FK_acd_escuelas_tienda_productos",
        using: "BTREE",
        fields: [
          { name: "id_producto" },
        ]
      },
    ]
  });
};
