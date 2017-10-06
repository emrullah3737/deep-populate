const DeepPopulate = require('./deep-populate');

module.exports = (str) => {
  const deep = new DeepPopulate();

  return deep.populate(str);
};
