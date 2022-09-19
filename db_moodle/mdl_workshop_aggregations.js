const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_workshop_aggregations', {
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
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    gradinggrade: {
      type: DataTypes.DECIMAL(10,5),
      allowNull: true
    },
    timegraded: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_workshop_aggregations',
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
        name: "mdl_workaggr_woruse_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "workshopid" },
          { name: "userid" },
        ]
      },
      {
        name: "mdl_workaggr_wor_ix",
        using: "BTREE",
        fields: [
          { name: "workshopid" },
        ]
      },
      {
        name: "mdl_workaggr_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
    ]
  });
};
