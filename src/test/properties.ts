import * as request from 'supertest';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

let should = chai.should();

chai.use(chaiHttp);

import server from '../';

/*
  * Test the /GET properties
*/
describe('/GET properties', () => {
  it('it should GET all the properties', (done) => {
    chai.request(server)
      .get('/api/v1/properties')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});

/*
  * Test the /GET property
*/
describe('/GET property', () => {
  it('it should GET one property', (done) => {
    chai.request(server)
      .get('/api/v1/property/5a9a29ee4c2387b49a6f1e94')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});

/*
  * Test the /POST property
*/
describe('/POST property', () => {
  it('it should CREATE one property', (done) => {
    chai.request(server)
      .post('/api/v1/property')
      .send({description: 'Property Test'})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.eql({ message: 'Property has been created' });
        done();
      });
  });
});

/*
  * Test the /POST property
*/
describe('/PUT property', () => {
  it('it should UPDATED one property', (done) => {
    chai.request(server)
      .put('/api/v1/property/5a9a29ee4c2387b49a6f1e94')
      .send({description: 'Property Test, Edited.'})
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.eql({ message: 'Property has been updated' });
        done();
      });
  });
});


/*
  * Test the /DELETE property
*/
describe('/DELETE property', () => {
  it('it should DELETE one property', (done) => {
    chai.request(server)
      .del('/api/v1/property/5a9a29ee4c2387b49a6f1e94')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.eql({ message: 'Property has been deleted' });
        done();
      });
  });
});
