const { addProcessor } = require('@evershop/evershop/src/lib/util/registry');
const { awsFileUploader } = require('./services/awsFileUploader');
const { awsFileDeleter } = require('./services/awsFileDeleter');
const { awsFileBrowser } = require('./services/awsFileBrowser');
const { awsFolderCreator } = require('./services/awsFolderCreator');

module.exports = () => {
  addProcessor('fileUploader', (value) => {
    const {config} = this;
    if (config === 's3') {
      return awsFileUploader;
    } else {
      return value;
    }
  });

  addProcessor('fileDeleter', (value)=> {
    const {config} = this;
    if (config === 's3') {
      return awsFileDeleter;
    } else {
      return value;
    }
  });

  addProcessor('folderCreator', (value)=> {
    const {config} = this;
    if (config === 's3') {
      return awsFolderCreator;
    } else {
      return value;
    }
  });

  addProcessor('fileBrowser', (value) => {
    const {config} = this;
    if (config === 's3') {
      return awsFileBrowser;
    } else {
      return value;
    }
  });
};
