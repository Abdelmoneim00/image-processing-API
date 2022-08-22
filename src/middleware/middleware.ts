import express from 'express';

const middleware = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  let file = req.query.file;
  let wid = req.query.wid;
  let hei = req.query.hei;
  if (
    typeof file !== 'string' ||
    typeof wid !== 'string' ||
    typeof hei !== 'string'
  ) {
    res.send('it seems you used wrong numbers or query');
  }
  next();
};

export default middleware;
