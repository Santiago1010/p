const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_workshop_submissions', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    workshopid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    example: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    authorid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contentformat: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    contenttrust: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    attachment: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    grade: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    gradeover: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    gradeoverby: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    feedbackauthor: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    feedbackauthorformat: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      defaultValue: 0
    },
    timegraded: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    published: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    },
    late: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_workshop_submissions',
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
        name: "mdl_worksubm_wor_ix",
        using: "BTREE",
        fields: [
          { name: "workshopid" },
        ]
      },
      {
        name: "mdl_worksubm_gra_ix",
        using: "BTREE",
        fields: [
          { name: "gradeoverby" },
        ]
      },
      {
        name: "mdl_worksubm_aut_ix",
        using: "BTREE",
        fields: [
          { name: "authorid" },
        ]
      },
    ]
  });
};
