const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_grade_import_newitem', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    itemname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    importcode: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    importer: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_grade_import_newitem',
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
        name: "mdl_gradimponewi_imp_ix",
        using: "BTREE",
        fields: [
          { name: "importer" },
        ]
      },
    ]
  });
};
