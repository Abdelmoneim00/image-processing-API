import reSize from '../reSize/reSize';
import express, { response } from 'express';
import path from 'path';
import middleware from '../middleware/middleware';
import { Request, Response } from 'express';
import fs from 'fs';

const routes = express.Router();

function check(first: unknown, second: unknown, third: unknown) {
  if (
    typeof first !== 'string' ||
    typeof second !== 'string' ||
    typeof third !== 'string'
  ) {
    response.send("it seems you didn't log a valid number or file name :(");
  }
}

routes.get('/', (req: Request, res: Response) => {
  res.send(
    'welcome to my Project! \n please navigate to /image route to start testing the app :)'
  );
});

routes.get(
  '/image',
  middleware,
  async (req: Request, res: Response): Promise<void> => {
    let Name = req.query.file as unknown;
    let wid = req.query.wid as string;
    let hei = req.query.hei as string;
    if (
      fs.existsSync(path.resolve('./', `${Name}_${wid}_${hei}.jpg`)) === true
    ) {
      res.sendFile(path.resolve('./', `${Name}_${wid}_${hei}.jpg`));
    } else if(
      typeof Name !== 'string' ||
      typeof +wid !== 'number' ||
      typeof +hei !== 'number'
    ) {res.send("it seems you didn't log a valid number or file name :(")} else {
      try {
        await reSize(Name as string, +wid as number, +hei as number);
        if(fs.existsSync(path.resolve('./', `${Name}_${wid}_${hei}.jpg`)) ===true) {
          res.sendFile(path.resolve('./', `${Name}_${wid}_${hei}.jpg`))
        }
        else {
          res.send(`it seems like you\'ve added wrong query or name`);
        }
      } catch {
        res.send("it seems you didn't log a valid number or file name :(");
      }
    }
  }
);

export default routes;
