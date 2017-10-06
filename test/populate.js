const DeepPopulate = require('../deep-populate');
const chai = require('chai');

const expect = chai.expect;

describe('DeepPopulate', () => {
  let deepPopulate;

  beforeEach(() => {
    deepPopulate = new DeepPopulate();
  });

  it('should be output array', () => {
    const str = 'profile';
    const res = deepPopulate.populate(str);
    expect(res).to.be.an('array');
  });

  it('should be when no param, return null', () => {
    const res = deepPopulate.populate();
    expect(res).to.be.a('null');
  });

  it('should be when param is integer, return null', () => {
    const res = deepPopulate.populate(1);
    expect(res).to.be.a('null');
  });

  it('should be when input is "profile.picture,file", output is structure tree data', () => {
    const str = 'profile.picture,file';
    const res = deepPopulate.populate(str);
    const expection = [{
      path: 'profile',
      populate: {
        path: 'picture',
        populate: '',
      },
    }, {
      path: 'file',
      populate: '',
    }];
    expect(res).to.be.an('array').to.have.deep.members(expection);
  });
});
