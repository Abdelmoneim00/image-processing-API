import reSize from '../reSize/reSize';
import express from 'express';
import path from 'path';
import middleware from '../middleware/middleware';
import sharp from 'sharp';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send(
    'welcome to my Project! \n please navigate to /image route to start testing the app :)'
  );
});

routes.get('/image', middleware, async (req, res) => {
  let Name = req.query.file as string;
  let wid: string = req.query.wid as string;
  let hei: string = req.query.hei as string;
  await reSize(Name as string, +wid as number, +hei as number);
  try {
    res.sendFile(path.resolve('./', `${Name}_${wid}_${hei}.jpg`));
  } catch {
    res.send('it seems you didn\'t log a valid number or file name :(');
  }
});

export default routes;
