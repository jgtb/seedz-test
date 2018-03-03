import * as request from 'supertest';

import server from '../';

describe('Properties', () => {

  it('`get` all Properties must have status 200 & return `array`', done => {
    request(server)
      .get('/api/v1/properties')
      .expect(200)
      .expect([{}])
      .end(done);
  });

  it('should return `array of objects`', done => {
    request(server)
      .get('/api/v1/properties')
      .expect(200)
      .expect([{}])
      .end(done);
  });

});
