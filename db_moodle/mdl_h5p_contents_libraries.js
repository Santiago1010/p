const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_h5p_contents_libraries', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    h5pid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    libraryid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    dependencytype: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ""
    },
    dropcss: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    weight: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_h5p_contents_libraries',
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
        name: "mdl_h5pcontlibr_h5p_ix",
        using: "BTREE",
        fields: [
          { name: "h5pid" },
        ]
      },
      {
        name: "mdl_h5pcontlibr_lib_ix",
        using: "BTREE",
        fields: [
          { name: "libraryid" },
        ]
      },
    ]
  });
};
