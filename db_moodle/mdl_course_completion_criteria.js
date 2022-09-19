const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_course_completion_criteria', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    course: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    criteriatype: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    module: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    moduleinstance: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    courseinstance: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    enrolperiod: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    timeend: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    gradepass: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    role: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_course_completion_criteria',
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
        name: "mdl_courcompcrit_cou_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
    ]
  });
};
