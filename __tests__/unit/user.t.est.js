const request = require('supertest');
const app = require('../../src/app');

describe('User', () => {
    it('should create user', async () => {
        const data = {
            name: 'Hitalo Vinicius',
            username: 'hitalo123',
            password: 'teste123'
        }

        const { status } = await request(app)
            .post('/user')
            .send(data)

        expect(status).toBe(200)
    });

    it('should not create user (invalid username)', async () => {
        const data = {
            name: 'Hitalo Vinicius',
            username: 'hitalo',
            password: 'teste123'
        }

        const { status } = await request(app)
            .post('/user')
            .send(data)

        expect(status).toBe(403)
    });

    it('should not create user (invalid password)', async () => {
        const data = {
            name: 'Hitalo Vinicius',
            username: 'hitalo321',
            password: 'teste'
        }

        const { status } = await request(app)
            .post('/user')
            .send(data)

        expect(status).toBe(403)
    });

    it('should not create user (user already exists)', async () => {
        const data = {
            name: 'Hitalo Vinicius',
            username: 'hitalo123',
            password: 'teste321'
        }

        const { status } = await request(app)
            .post('/user')
            .send(data)

        expect(status).toBe(409)
    });

    it('user should successfully authenticated', async () => {
        const data = {
            username: 'hitalo123',
            password: 'teste123'
        }

        const { status } = await request(app)
            .post('/auth')
            .send(data)

        expect(status).toBe(200)
    });

    it('user must not be successfully authenticated (invalid credentials)', async () => {
        const data = {
            username: 'hitalo123',
            password: 'teste'
        }

        const { status } = await request(app)
            .post('/auth')
            .send(data)

        expect(status).toBe(404)
    });

    it('user must not be successfully authenticated (invalid body)', async () => {
        const data = {
            user: 'hitalo123',
            pass: 'teste123'
        }

        const { status } = await request(app)
            .post('/auth')
            .send(data)

        expect(status).toBe(403)
    });
})