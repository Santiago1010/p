const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_course_published', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    huburl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    courseid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timepublished: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    enrollable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    hubcourseid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    timechecked: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_course_published',
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
    ]
  });
};
