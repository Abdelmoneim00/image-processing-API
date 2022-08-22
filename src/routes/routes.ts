import fs from 'fs';
import express from 'express';
import path from 'path';
import middleware from '../middleware/middleware';
import sharp from 'sharp';

async function reSize(name: string, wid: number, hei: number) {
  try {
    const firstPath = path.resolve('./', `Nasa.jpg`);
    await sharp(firstPath)
      .resize(wid, hei).toFile(`${name}_${wid}_${hei}.jpg`);
  } catch (err) {
    console.error(err);
  }
}

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send(
    'welcome to my Project! \n please navigate to /image route to start testing the app :)'
  );
});

routes.get('/image', middleware, async (req, res) => {
  let Name = req.query.file;
  let wid: string = req.query.wid as string;
  let hei: string = req.query.hei as string;
  await reSize(Name as string, +wid as number, +hei as number);
  try {
    res.sendFile(path.resolve('./', `${Name}_${wid}_${hei}.jpg`)
      
        
      )
    ;
  } catch {
    res.send('no such file');
  }
});

export default routes;
