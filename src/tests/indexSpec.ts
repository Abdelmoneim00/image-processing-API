import app from '..';
import supertest from 'supertest';
import fs from 'fs';
import path from 'path';
import reSize from '../reSize/reSize';

function isIT(image: string): boolean {
  return fs.existsSync(path.resolve('./', `${image}`)) ? true : false;
}

const request = supertest(app);

describe('tests for the endpoint', () : void => {
  it('should return OK status', async (): Promise<void> => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  }),
    it('should return an ok status for the /image route with not valid data without query', async () : Promise<void> => {
      const response2 = await request.get('/image');
      expect(response2.status).toBe(200);
    }),
    it('should return OK status when passing right file name and numbers', async() : Promise<void> => {
      let name : string= 'Nasa'
      let height : number= 450
      let width : number = 600
      const response3 : supertest.Test= request.get(`/image?file=${name}&wid=${width}&hei=${height}`)
      let image : boolean = fs.existsSync(path.resolve('./', `${name}`))
      await response3;
      expect(image).toBeTruthy;
    });
});

describe('tests for sharp and images', () => {
  it('should check if the initial image exists', () : void => {
    expect(isIT('Nasa.jpg' as string)).toBe(true as boolean);
  }),
    it('should check if sharp is working', async () : Promise<void> => {
      const name: string = 'Nasa';
      await reSize(name as string, 500 as number, 400 as number);
      expect(isIT('Nasa_500_400.jpg' as string)).toBe(true as boolean);
    });
});
