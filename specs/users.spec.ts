import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import server from '../src/server';
import usersQuery from '../src/app/services/users/users.query';

chai.use(chaiHttp);

describe('API Tests', () => {
  let app: any;
  let stubGet: any;
  let stubCreate: any;
  let stubUpdate: any;
  let stubDelete: any;

  before(() => {
    const dummyResQuery = [
      { name: 'dummy user1', userId: 1 },
      { name: 'dummy user2', userId: 2 },
    ];
    stubGet = sinon.stub(usersQuery, 'readUsers').resolves(dummyResQuery);
    stubCreate = sinon.stub(usersQuery, 'addUser').resolves(dummyResQuery);
    stubUpdate = sinon.stub(usersQuery, 'updateUser').resolves(dummyResQuery);
    stubDelete = sinon.stub(usersQuery, 'deleteUser').resolves(dummyResQuery);
  });

  beforeEach(() => {
    app = server;
  });

  after(() => {
    stubGet.restore();
    stubCreate.restore();
    stubUpdate.restore();
    stubDelete.restore();
  });

  describe('GET /users', () => {
    it('should return array of users data', (done) => {
      chai
        .request(app)
        .get('/users')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.success).to.be.true;
          expect(res.body.data).to.be.an('array');
          done();
        });
    });
  });

  describe('POST /users', () => {
    it('should create a new user', (done) => {
      chai
        .request(app)
        .post('/users')
        .send({ name: 'test user' })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.success).to.be.true;
          expect(res.body.data).to.be.an('array');
          done();
        });
    });
  });

  describe('PUT /users/', () => {
    it('should update a user', (done) => {
      chai
        .request(app)
        .put('/users/')
        .send({ name: 'test user', userId: 1 })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.success).to.be.true;
          expect(res.body.data).to.be.an('array');
          done();
        });
    });
  });

  describe('DELETE /users/:id', () => {
    it('should delete a user', (done) => {
      chai
        .request(app)
        .delete('/users/')
        .send({ userId: 1 })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.success).to.be.true;
          expect(res.body.data).to.be.an('array');
          done();
        });
    });
  });
});
