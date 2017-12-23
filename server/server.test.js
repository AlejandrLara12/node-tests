// server test
const request = require('supertest');
const expect = require('expect');

let app = require('./server.js').app;

it('should return hello world response', (done) => {
  request(app)
    .get('/')
    .expect(404)  // status code
    // .expect('hello world!')
    // .expect({
    //   error: 'Page not found.'
    // })
    .expect( (res) => {
      // console.log(res);
      expect(res.body).toInclude({
        error: 'Page not found.'
      });
    })
    .end(done);
});

it('shoud return my user object', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect( (res) => {
      expect(res.body).toInclude({
        name: 'Ricardo Lara',
        age: 21
      });
    })
    .end(done);
});
