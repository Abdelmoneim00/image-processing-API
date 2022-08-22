import fs from 'fs';
import express from 'express';
import path from 'path';
import middleware from '../middleware/middleware';

let paths: { firstPath: string; secondPath: string } = {
  firstPath: path.resolve('./', 'Nasa.jpg'),
  secondPath: path.resolve('./', 'resized-image'),
};

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send(
    'welcome to my Project! \n please navigate to /image route to start testing the app :)'
  );
});

routes.get('/image',middleware, (req, res) => {
  fs.readFile(`${paths.firstPath}`, (err, data) => {
    if (err) throw err;
    res.sendFile(paths.firstPath);
  });
});

export default routes;
