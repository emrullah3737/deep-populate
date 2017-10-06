const _ = require('underscore');

module.exports = class DeepPopulate {
  populate(str) {
    if (this.error(str)) return null;
    let populate = str;
    populate = populate.split(',');
    _.each(populate, (e, i) => {
      const deepPopulate = e.split('.');
      if (deepPopulate.length) {
        populate[i] = this.deepPopulate({}, deepPopulate);
      }
    });
    return populate;
  }

  error(populate) {
    if (populate === null || populate === undefined) return true;
    if (typeof populate !== 'string') return true;
    return false;
  }

  deepPopulate(obje, n) {
    let populate;
    if (!obje.path) populate = '';
    else populate = obje;
    if (n.length === 1) return { path: n[0], populate };
    const obj = {
      path: n[n.length - 1],
      populate,
    };
    n.pop();
    return this.deepPopulate(obj, n);
  }
};
