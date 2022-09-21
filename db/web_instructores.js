const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_instructores', {
    id_instructor: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_completo_instructor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    p_nombre_instructor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    s_nombre_instructor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    p_apellido_instructor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    s_apellido_instructor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email_instructor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    celular_instructor: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'web_instructores',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_instructor" },
        ]
      },
    ]
  });
};
