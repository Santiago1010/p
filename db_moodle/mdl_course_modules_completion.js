const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_course_modules_completion', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    coursemoduleid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    completionstate: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    viewed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    overrideby: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_course_modules_completion',
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
        name: "mdl_courmoducomp_usecou_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "coursemoduleid" },
        ]
      },
      {
        name: "mdl_courmoducomp_cou_ix",
        using: "BTREE",
        fields: [
          { name: "coursemoduleid" },
        ]
      },
    ]
  });
};
