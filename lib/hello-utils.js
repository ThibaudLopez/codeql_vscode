'use strict';

const hello = (x) => {
  return `hello ${x}`;
};

module.exports = {
  hello,
  formatterToTemplate: require('./hello-formatter.js'),
};
