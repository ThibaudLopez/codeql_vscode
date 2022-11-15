'use strict';

const helloLib = require('../lib/hello.js');

module.exports = (req, res, next) => {
  helloLib.get(req.foo, (err, response) => {
    if (err) return next(err);
    return res.send(response);
  });
};
