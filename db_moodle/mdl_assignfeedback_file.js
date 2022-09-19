const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_assignfeedback_file', {
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
    grade: {
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
    tableName: 'mdl_assignfeedback_file',
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
        name: "mdl_assifile_ass2_ix",
        using: "BTREE",
        fields: [
          { name: "assignment" },
        ]
      },
      {
        name: "mdl_assifile_gra_ix",
        using: "BTREE",
        fields: [
          { name: "grade" },
        ]
      },
    ]
  });
};
