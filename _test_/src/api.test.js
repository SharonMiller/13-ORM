'use strict';

//require('babel-register');
const app = require('../../src/app');
const superagent = require('superagent');

describe('API', () => {

  const PORT = 3000;
  // let server;
  // beforeAll( () => {
  //   server = app.listen(PORT);
  // });
  // afterAll( () => {
  //   server.close();
  // });

  it('gets a 200 response on a good model', () => {
    return superagent.get(`http://localhost:${PORT}/api/v1/students`)
      .then(response => {
        expect(response.status).toBe(200);
      })
      .catch(console.err);
  });

  it('gets a 500 response on an invalid model', () => {
    return superagent.get(`http://localhost:${PORT}/api/v1/foobar`)
      .then(console.log)
      .catch(response => {
        expect(response.status).toBe(500);
      });
  });

});
