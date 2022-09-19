const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mdl_user', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    auth: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "manual"
    },
    confirmed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    policyagreed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    suspended: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    mnethostid: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    idnumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    firstname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    lastname: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ""
    },
    emailstop: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    icq: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    skype: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    yahoo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    aim: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    msn: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    phone1: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    phone2: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: ""
    },
    institution: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    department: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    city: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: ""
    },
    country: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: ""
    },
    lang: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "en"
    },
    calendartype: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: "gregorian"
    },
    theme: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    timezone: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "99"
    },
    firstaccess: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    lastaccess: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    lastlogin: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    currentlogin: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    lastip: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: ""
    },
    secret: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: ""
    },
    picture: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ""
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    descriptionformat: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    mailformat: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    maildigest: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0
    },
    maildisplay: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 2
    },
    autosubscribe: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    trackforums: {
      type: DataTypes.BOOLEAN,
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
    },
    trustbitmask: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    imagealt: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lastnamephonetic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    firstnamephonetic: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    middlename: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    alternatename: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mdl_user',
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
        name: "mdl_user_mneuse_uix",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "mnethostid" },
          { name: "username" },
        ]
      },
      {
        name: "mdl_user_del_ix",
        using: "BTREE",
        fields: [
          { name: "deleted" },
        ]
      },
      {
        name: "mdl_user_con_ix",
        using: "BTREE",
        fields: [
          { name: "confirmed" },
        ]
      },
      {
        name: "mdl_user_fir_ix",
        using: "BTREE",
        fields: [
          { name: "firstname" },
        ]
      },
      {
        name: "mdl_user_las_ix",
        using: "BTREE",
        fields: [
          { name: "lastname" },
        ]
      },
      {
        name: "mdl_user_cit_ix",
        using: "BTREE",
        fields: [
          { name: "city" },
        ]
      },
      {
        name: "mdl_user_cou_ix",
        using: "BTREE",
        fields: [
          { name: "country" },
        ]
      },
      {
        name: "mdl_user_las2_ix",
        using: "BTREE",
        fields: [
          { name: "lastaccess" },
        ]
      },
      {
        name: "mdl_user_ema_ix",
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "mdl_user_aut_ix",
        using: "BTREE",
        fields: [
          { name: "auth" },
        ]
      },
      {
        name: "mdl_user_idn_ix",
        using: "BTREE",
        fields: [
          { name: "idnumber" },
        ]
      },
      {
        name: "mdl_user_fir2_ix",
        using: "BTREE",
        fields: [
          { name: "firstnamephonetic" },
        ]
      },
      {
        name: "mdl_user_las3_ix",
        using: "BTREE",
        fields: [
          { name: "lastnamephonetic" },
        ]
      },
      {
        name: "mdl_user_mid_ix",
        using: "BTREE",
        fields: [
          { name: "middlename" },
        ]
      },
      {
        name: "mdl_user_alt_ix",
        using: "BTREE",
        fields: [
          { name: "alternatename" },
        ]
      },
    ]
  });
};
