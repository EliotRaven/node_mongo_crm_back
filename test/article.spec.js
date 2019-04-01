var expect  = require('chai').expect;
var request = require('request');

it('Article API request', (done) => {
  request('http://localhost:8000/api/article' , (error, response, body) => {
    if (!error) {
      expect(response.statusCode).to.equal(200);
      done();
    }
    expect(error).to.be.an('error');
    done()
  });
});
