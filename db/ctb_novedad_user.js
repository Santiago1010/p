const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctb_novedad_user', {
    codusr: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true,
      references: {
        model: 'adm_empleados',
        key: 'codemp'
      }
    },
    codnov: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      references: {
        model: 'ctb_novedad_tipos',
        key: 'codigo'
      }
    }
  }, {
    sequelize,
    tableName: 'ctb_novedad_user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codusr" },
          { name: "codnov" },
        ]
      },
      {
        name: "FK_ctb_novedad_user_ctb_novedades_tipos",
        using: "BTREE",
        fields: [
          { name: "codnov" },
        ]
      },
    ]
  });
};
