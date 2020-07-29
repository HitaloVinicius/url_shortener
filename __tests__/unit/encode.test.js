const encode = require('../../src/utils/encode');

describe('Encode function', () => {
    it('should encode password', async () => {

        const passwordEncoded = encode('mypassword');
        expect(passwordEncoded).toBe('76ddb0f65453d00491479c4122dcc52d');
    });

    it('should not encode password', async () => {

        const passwordEncoded = encode();
        expect(passwordEncoded).toBe(false);
    });
});