const request = require('supertest')
const app = require('../app')

describe('GET /', () => {
    it(res.json({message: 'Hello world!'}), (done) => {
        request(app).get('/').expect(res.json({message: 'Hello world!'}), done)
    })
})