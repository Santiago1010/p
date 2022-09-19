const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_assignsubmission_file', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    assignment: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    submission: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    numfiles: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_assignsubmission_file',
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
        name: "mdl_assifile_ass_ix",
        using: "BTREE",
        fields: [
          { name: "assignment" },
        ]
      },
      {
        name: "mdl_assifile_sub_ix",
        using: "BTREE",
        fields: [
          { name: "submission" },
        ]
      },
    ]
  });
};
