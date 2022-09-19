const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_block_xp_config', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    courseid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: "mdl_blocxpconf_cou_uix"
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    levels: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    lastlogpurge: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    enablecheatguard: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    enableladder: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    enableinfos: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    levelsdata: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    enablelevelupnotif: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    enablecustomlevelbadges: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    maxactionspertime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 10
    },
    timeformaxactions: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 60
    },
    timebetweensameactions: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 180
    },
    identitymode: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    rankmode: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    neighbours: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    defaultfilters: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 1
    },
    laddercols: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "xp,progress"
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    instructions_format: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_block_xp_config',
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
        name: "mdl_blocxpconf_cou_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "courseid" },
        ]
      },
    ]
  });
};
