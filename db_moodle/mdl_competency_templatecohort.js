const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_competency_templatecohort', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    templateid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    cohortid: {
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
    usermodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_competency_templatecohort',
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
        name: "mdl_comptemp_temcoh_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "templateid" },
          { name: "cohortid" },
        ]
      },
      {
        name: "mdl_comptemp_tem2_ix",
        using: "BTREE",
        fields: [
          { name: "templateid" },
        ]
      },
    ]
  });
};
