const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_quiz_overview_regrades', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    questionusageid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    slot: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    newfraction: {
      type: DataTypes.DECIMAL(12,7),
      allowNull: true
    },
    oldfraction: {
      type: DataTypes.DECIMAL(12,7),
      allowNull: true
    },
    regraded: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_quiz_overview_regrades',
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
        name: "mdl_quizoverregr_queslo_ix",
        using: "BTREE",
        fields: [
          { name: "questionusageid" },
          { name: "slot" },
        ]
      },
    ]
  });
};
