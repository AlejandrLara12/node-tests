const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app.js');

// we are gonna test that:
//  if we run handleSignup > saveUser is executed

describe('App', () => {

  let db = {
    saveUser: expect.createSpy()
  };

  app.__set__('db', db);

  it('should call saveUser with user object', () => {
    let email = 'alejandro.elara@live.com';
    let password = 'admin';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });

  });
  

  describe('spy test', () => {
    it('should call the spy correcrly', () => {
      let spy = expect.createSpy();
      // createSpy() => returns a function
      // spy();
      // expect(spy).toHaveBeenCalled();
      spy('Ricardo', 21);
      expect(spy).toHaveBeenCalledWith('Ricardo', 21);
    });
  });

});