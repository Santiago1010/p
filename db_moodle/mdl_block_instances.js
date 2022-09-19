const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_block_instances', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    blockname: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    parentcontextid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    showinsubcontexts: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    requiredbytheme: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    pagetypepattern: {
      type: DataTypes.STRING(64),
      allowNull: false,
      defaultValue: ""
    },
    subpagepattern: {
      type: DataTypes.STRING(16),
      allowNull: true
    },
    defaultregion: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: ""
    },
    defaultweight: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    configdata: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    timecreated: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timemodified: {
      type: DataTypes.BIGINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mdl_block_instances',
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
        name: "mdl_blocinst_parshopagsub_ix",
        using: "BTREE",
        fields: [
          { name: "parentcontextid" },
          { name: "showinsubcontexts" },
          { name: "pagetypepattern" },
          { name: "subpagepattern" },
        ]
      },
      {
        name: "mdl_blocinst_tim_ix",
        using: "BTREE",
        fields: [
          { name: "timemodified" },
        ]
      },
      {
        name: "mdl_blocinst_par_ix",
        using: "BTREE",
        fields: [
          { name: "parentcontextid" },
        ]
      },
    ]
  });
};
