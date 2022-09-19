const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_course_completion_defaults', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    course: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    module: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    completion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    completionview: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    completionusegrade: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    completionexpected: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    customrules: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_course_completion_defaults',
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
        name: "mdl_courcompdefa_coumod_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "course" },
          { name: "module" },
        ]
      },
      {
        name: "mdl_courcompdefa_mod_ix",
        using: "BTREE",
        fields: [
          { name: "module" },
        ]
      },
      {
        name: "mdl_courcompdefa_cou_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
    ]
  });
};
