const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_assign_user_mapping', {
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
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_assign_user_mapping',
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
        name: "mdl_assiusermapp_ass_ix",
        using: "BTREE",
        fields: [
          { name: "assignment" },
        ]
      },
      {
        name: "mdl_assiusermapp_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
