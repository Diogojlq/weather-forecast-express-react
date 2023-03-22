const request = require('supertest');
const app = require('../../app')

describe('Test GET /api',()=> {
    test('It should respond with 200 succes', async () => {
        const response = await request(app)
            .get('/api')
            .expect(200)
    })
})