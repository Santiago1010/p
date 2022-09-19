const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_grading_definitions', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    areaid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    method: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    descriptionformat: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    status: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    copiedfromid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    usercreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    usermodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timecopied: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    options: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_grading_definitions',
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
        name: "mdl_graddefi_aremet_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "areaid" },
          { name: "method" },
        ]
      },
      {
        name: "mdl_graddefi_are_ix",
        using: "BTREE",
        fields: [
          { name: "areaid" },
        ]
      },
      {
        name: "mdl_graddefi_use_ix",
        using: "BTREE",
        fields: [
          { name: "usermodified" },
        ]
      },
      {
        name: "mdl_graddefi_use2_ix",
        using: "BTREE",
        fields: [
          { name: "usercreated" },
        ]
      },
    ]
  });
};
