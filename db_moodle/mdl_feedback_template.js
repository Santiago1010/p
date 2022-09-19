const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_feedback_template', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    course: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    ispublic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'mdl_feedback_template',
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
        name: "mdl_feedtemp_cou_ix",
        using: "BTREE",
        fields: [
          { name: "course" },
        ]
      },
    ]
  });
};
