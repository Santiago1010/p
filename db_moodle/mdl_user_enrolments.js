const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_user_enrolments', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    enrolid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    timestart: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timeend: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 2147483647
    },
    modifierid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    timecreated: {
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
    tableName: 'mdl_user_enrolments',
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
        name: "mdl_userenro_enruse_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "enrolid" },
          { name: "userid" },
        ]
      },
      {
        name: "mdl_userenro_enr_ix",
        using: "BTREE",
        fields: [
          { name: "enrolid" },
        ]
      },
      {
        name: "mdl_userenro_use_ix",
        using: "BTREE",
        fields: [
          { name: "userid" },
        ]
      },
      {
        name: "mdl_userenro_mod_ix",
        using: "BTREE",
        fields: [
          { name: "modifierid" },
        ]
      },
    ]
  });
};
