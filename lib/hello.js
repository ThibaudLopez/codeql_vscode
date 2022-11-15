'use strict';

const TJU = require('./hello-utils.js');

const get = (x) => {
  const y = TJU.formatterToTemplate(x);
  makehello(y);
  console.log(TJU.hello(x));
};

const makehello = (x) => {
  if (x) TJU.formatterToTemplate(x);
};

module.exports = { get, makehello };
