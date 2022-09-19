const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_assignfeedback_comments', {
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
    commenttext: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    commentformat: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_assignfeedback_comments',
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
        name: "mdl_assicomm_ass_ix",
        using: "BTREE",
        fields: [
          { name: "assignment" },
        ]
      },
      {
        name: "mdl_assicomm_gra_ix",
        using: "BTREE",
        fields: [
          { name: "grade" },
        ]
      },
    ]
  });
};
