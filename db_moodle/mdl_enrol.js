const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_enrol', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    enrol: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    status: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    courseid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    sortorder: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    enrolperiod: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    enrolstartdate: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    enrolenddate: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    expirynotify: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    expirythreshold: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    notifyall: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cost: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    roleid: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: 0
    },
    customint1: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    customint2: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    customint3: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    customint4: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    customint5: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    customint6: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    customint7: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    customint8: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    customchar1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customchar2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    customchar3: {
      type: DataTypes.STRING(1333),
      allowNull: true
    },
    customdec1: {
      type: DataTypes.DECIMAL(12,7),
      allowNull: true
    },
    customdec2: {
      type: DataTypes.DECIMAL(12,7),
      allowNull: true
    },
    customtext1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    customtext2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    customtext3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    customtext4: {
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
    tableName: 'mdl_enrol',
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
        name: "mdl_enro_enr_ix",
        using: "BTREE",
        fields: [
          { name: "enrol" },
        ]
      },
      {
        name: "mdl_enro_cou_ix",
        using: "BTREE",
        fields: [
          { name: "courseid" },
        ]
      },
    ]
  });
};
