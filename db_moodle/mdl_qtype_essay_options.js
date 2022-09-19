const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_qtype_essay_options', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    questionid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: "mdl_qtypessaopti_que_uix"
    },
    responseformat: {
      type: DataTypes.STRING(16),
      allowNull: false,
      defaultValue: "editor"
    },
    responserequired: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    responsefieldlines: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 15
    },
    attachments: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    attachmentsrequired: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    graderinfo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    graderinfoformat: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    responsetemplate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    responsetemplateformat: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 0
    },
    filetypeslist: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_qtype_essay_options',
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
        name: "mdl_qtypessaopti_que_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "questionid" },
        ]
      },
    ]
  });
};
