import fs from 'fs';
import express from 'express';
import { cwd } from 'process';

fs.open(`${cwd()}\\src\\item.txt`, 'r', (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.readFile(`${cwd()}\\src\\item.txt`, 'utf-8', (err, data) => {
  console.log(data);
});

fs.rename(`${cwd()}\\src\\item.txt`, `${cwd()}\\src\\hello.txt`, (err) => {
  console.log(err);
});

fs.close(3, (err) => {
  if (err) {
    console.log('failed');
  } else {
    console.log('done');
  }
});

const routes = express.Router();

routes.get('/', (req, res) => {
  fs.readFile(`${cwd()}\\src\\Nasa.jpg`, (err, data) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    res.end(data);
  });
});

export default routes;
