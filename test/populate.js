const DeepPopulate = require('../index');
const chai = require('chai');

const expect = chai.expect;

describe('DeepPopulate', () => {
  let deepPopulate;

  beforeEach(() => {
    deepPopulate = DeepPopulate;
  });

  it('should be output array', () => {
    const str = 'profile';
    const res = deepPopulate(str);
    expect(res).to.be.an('array');
  });

  it('should be when no param, return null', () => {
    const res = deepPopulate();
    expect(res).to.be.a('null');
  });

  it('should be when param is integer, return null', () => {
    const res = deepPopulate(1);
    expect(res).to.be.a('null');
  });

  it('should be when input is "profile.picture,file", output is structure tree data', () => {
    const str = 'profile.picture,file';
    const res = deepPopulate(str);
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
