import fs from 'fs';
import express from 'express';
import { cwd } from 'process';


const routes = express.Router();

routes.get('/', (req, res) => {
  fs.readFile(`${cwd()}\\src\\Nasa.jpg`, (err,data) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    res.end(data);
  });
});

export default routes;
