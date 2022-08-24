import reSize from '../reSize/reSize';
import express, { response, Router } from 'express';
import path from 'path';
import middleware from '../middleware/middleware';
import { Request, Response } from 'express';
import fs from 'fs';
import { check, checkName } from '../checkFunc/checkFunc';

const routes: Router = express.Router();

routes.get('/', (req: Request, res: Response): void => {
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
    let secondPath: string = path.resolve('./', `${Name}_${wid}_${hei}.jpg`);
    try {
      if (check(Name as string, wid as string, hei as string) === false) {
        res.send('wrong data has been given from query');
      } else if (checkName(Name as string) === false) {
        res.send(`no such file with the name ${Name}`);
      } else if (fs.existsSync(secondPath) === true) {
        res.sendFile(secondPath);
      } else if (fs.existsSync(secondPath) === false) {
        await reSize(Name as string, +wid as number, +hei as number);
        res.sendFile(secondPath);
      }
    } catch (err) {
      res.send(err);
    }
  }
);

export default routes;
