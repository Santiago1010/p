const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_h5p', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    jsoncontent: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mainlibraryid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    displayoptions: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    pathnamehash: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    contenthash: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ""
    },
    filtered: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'mdl_h5p',
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
        name: "mdl_h5p_mai_ix",
        using: "BTREE",
        fields: [
          { name: "mainlibraryid" },
        ]
      },
    ]
  });
};
