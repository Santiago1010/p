const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_h5p_library_dependencies', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    libraryid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    requiredlibraryid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    dependencytype: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_h5p_library_dependencies',
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
        name: "mdl_h5plibrdepe_lib_ix",
        using: "BTREE",
        fields: [
          { name: "libraryid" },
        ]
      },
      {
        name: "mdl_h5plibrdepe_req_ix",
        using: "BTREE",
        fields: [
          { name: "requiredlibraryid" },
        ]
      },
    ]
  });
};
