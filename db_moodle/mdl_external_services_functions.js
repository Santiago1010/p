const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_external_services_functions', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    externalserviceid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    functionname: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_external_services_functions',
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
        name: "mdl_exteservfunc_ext_ix",
        using: "BTREE",
        fields: [
          { name: "externalserviceid" },
        ]
      },
    ]
  });
};
