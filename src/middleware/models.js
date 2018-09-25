'use strict';

// Read in everything from the models folder
// Check against req.params.model and return if valid
// otherwise, throw an error
import requireAll from 'require-dir';
const models = requireAll('../models');

export default (req, res, next) => {
  let model = req.params.model;
  if(model && models[model] && models[model].default ) {
    req.model = models[model].default;
    next();
  }
  else {
    next('Model Not Found');
  }
};