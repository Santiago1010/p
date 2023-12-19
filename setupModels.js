'use strict';

const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const getAllFiles = function (dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, '/', file));
    }
  });

  return arrayOfFiles;
};
// Setup models -> files that end with .model.js and exports Schema and ExtendedModel
const setupModels = function (sequelize) {
  const modelFiles = getAllFiles(__dirname).filter((file) => {
    return file !== basename && file.slice(-9) === '.model.js';
  });

  // Set models
  modelFiles.forEach((element) => {
    const { Schema, ExtendedModel } = require(element);
    ExtendedModel.init(Schema, ExtendedModel.config(sequelize));
  });

  // Set models associatons
  modelFiles.forEach((element) => {
    const { ExtendedModel } = require(element);
    if (ExtendedModel.associate) {
      ExtendedModel.associate(sequelize.models);
    }
  });
};

module.exports = setupModels;
