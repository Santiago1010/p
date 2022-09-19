const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_course_modules', {
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
    module: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    instance: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    section: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    idnumber: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    added: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    score: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    indent: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      defaultValue: 0
    },
    visible: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    visibleoncoursepage: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    visibleold: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    groupmode: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    groupingid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    completion: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    completiongradeitemnumber: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    completionview: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    completionexpected: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    showdescription: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    availability: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    deletioninprogress: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_course_modules',
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
        name: "mdl_courmodu_vis_ix",
        using: "BTREE",
        fields: [
          { name: "visible" },
        ]
      },
      {
        name: "mdl_courmodu_cou_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
      {
        name: "mdl_courmodu_mod_ix",
        using: "BTREE",
        fields: [
          { name: "module" },
        ]
      },
      {
        name: "mdl_courmodu_ins_ix",
        using: "BTREE",
        fields: [
          { name: "instance" },
        ]
      },
      {
        name: "mdl_courmodu_idncou_ix",
        using: "BTREE",
        fields: [
          { name: "idnumber" },
          { name: "course" },
        ]
      },
      {
        name: "mdl_courmodu_gro_ix",
        using: "BTREE",
        fields: [
          { name: "groupingid" },
        ]
      },
    ]
  });
};
