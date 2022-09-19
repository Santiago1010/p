const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_assignment', {
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    intro: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    introformat: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    assignmenttype: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    resubmit: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    preventlate: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    emailteachers: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    var1: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    var2: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    var3: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    var4: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    var5: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    maxbytes: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 100000
    },
    timedue: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timeavailable: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    grade: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_assignment',
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
        name: "mdl_assi_cou2_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
    ]
  });
};
