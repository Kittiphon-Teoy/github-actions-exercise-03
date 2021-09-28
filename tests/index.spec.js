const request = require('supertest')
const app = require('../app')

describe('GET /', () => {
    it('{"message":"Hello world!"}', (done) => {
        request(app).get('/').expect('{"message":"Hello world!"}', done)
    })
})