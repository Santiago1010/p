const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_lti_submission', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ltiid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    datesubmitted: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    dateupdated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    gradepercent: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false
    },
    originalgrade: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: false
    },
    launchid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    state: {
      type: DataTypes.TINYINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_lti_submission',
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
        name: "mdl_ltisubm_lti_ix",
        using: "BTREE",
        fields: [
          { name: "ltiid" },
        ]
      },
    ]
  });
};
