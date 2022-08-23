import app from '..';
import supertest from 'supertest';
import fs from 'fs';
import path from 'path';
import reSize from '../reSize/reSize';
import sharp from 'sharp';

function isIT(image: string): boolean {
  return fs.existsSync(path.resolve('./', `${image}`)) ? true : false;
}

const request = supertest(app);

describe('tests for the endpoint', () => {
  it('should return OK status', async () => {
    const response = await request.get('/image');
    expect(response.status).toBe(200);
  });
});

describe('tests for sharp and images', () => {
  it('should check if the initial image exists', () => {
    expect(isIT('Nasa.jpg' as string)).toBe(true as boolean);
  }),
    it('should check if sharp is working', async () => {
      const name : string = 'Nasa';
      await reSize(name as string, 500 as number, 400 as number);
      expect(isIT('Nasa_500_400.jpg' as string)).toBe(true as boolean);
    });
});
