const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_competency_usercompplan', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    competencyid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    planid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    proficiency: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    grade: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    sortorder: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    usermodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_competency_usercompplan',
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
        name: "mdl_compuser_usecompla_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userid" },
          { name: "competencyid" },
          { name: "planid" },
        ]
      },
    ]
  });
};
