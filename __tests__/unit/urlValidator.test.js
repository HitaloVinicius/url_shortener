const urlValidator = require('../../src/utils/urlValidator');

describe('URL Validator', () => {
    it('should validate URL (http)', async () => {

        const validUrl = urlValidator('http://google.com');
        expect(validUrl).toBe(true);
    });

    it('should validate URL (https)', async () => {

        const validUrl = urlValidator('https://google.com');
        expect(validUrl).toBe(true);
    });

    it('should validate URL', async () => {

        const validUrl = urlValidator('google.com');
        expect(validUrl).toBe(true);
    });

    it('should validate URL (www)', async () => {

        const validUrl = urlValidator('www.google.com');
        expect(validUrl).toBe(true);
    });

    it('should validate URL (www...br)', async () => {

        const validUrl = urlValidator('www.google.com.br');
        expect(validUrl).toBe(true);
    });

    it('should not validate URL', async () => {

        const validUrl = urlValidator('google');
        expect(validUrl).toBe(false);
    });

    it('should not validate URL', async () => {

        const validUrl = urlValidator('http:google.com');
        expect(validUrl).toBe(false);
    });

    it('should not validate URL (docs.goo...)', async () => {

        const validUrl = urlValidator('docs.google.com');
        expect(validUrl).toBe(true);
    });

    it('should not validate URL (null)', async () => {

        const validUrl = urlValidator(null);
        expect(validUrl).toBe(false);
    });

    it('should not validate URL (without params)', async () => {

        const validUrl = urlValidator();
        expect(validUrl).toBe(false);
    });
});