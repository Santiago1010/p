const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_analytics_used_files', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    modelid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    fileid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    action: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    time: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'mdl_analytics_used_files',
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
        name: "mdl_analusedfile_modactfil_ix",
        using: "BTREE",
        fields: [
          { name: "modelid" },
          { name: "action" },
          { name: "fileid" },
        ]
      },
      {
        name: "mdl_analusedfile_mod_ix",
        using: "BTREE",
        fields: [
          { name: "modelid" },
        ]
      },
      {
        name: "mdl_analusedfile_fil_ix",
        using: "BTREE",
        fields: [
          { name: "fileid" },
        ]
      },
    ]
  });
};
