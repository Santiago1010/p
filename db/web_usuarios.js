const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('web_usuarios', {
    id_usuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_completo_usuario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    p_nombre_usuario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    s_nombre_usuario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    p_apellido_usuario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    s_apellido_usuario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email_usuario: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "web_usuario_email_UN"
    },
    celular_usuario: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    password_usuario: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    aplico_test_cerebral: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "0  = No, 1 = Si"
    },
    nro_test_cerebral: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'web_usuarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_usuario" },
        ]
      },
      {
        name: "web_usuario_email_UN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email_usuario" },
        ]
      },
    ]
  });
};
