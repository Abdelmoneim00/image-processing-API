import app from '..';
import supertest from 'supertest';
import fs from 'fs';

const request = supertest(app);

describe('tests for the endpoint', () => {
  it('should return OK status', async () => {
    const response = await request.get('/image');
    expect(response.status).toBe(200);
  }),
    it('check if the isintial image exists'),
    () => {
      const file = fs.existsSync(`${process.cwd()}\\src\\Nasa.jpg`);
      expect(file).toBe(true);
    };
});
