const request = require('supertest');
const app = require('../../src/app');

describe('User', () => {
    it('should create user', async () => {
        const data = {
            name: 'Hitalo Vinicius',
            username: 'hitalo321',
            password: 'teste123'
        }

        const { status } = await request(app)
            .post('/user')
            .send(data)

        expect(status).toBe(200)


    })
})