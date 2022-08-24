import express from 'express';

const middleware = (
  req: express.Request,
  res: express.Response,
  next: Function
): void => {
  let file: string = req.query.file as string;
  let wid = req.query.wid as string;
  let hei = req.query.hei as string;
  if (
    typeof file !== 'string' ||
    typeof +wid !== 'number' ||
    typeof +hei !== 'number'
  ) {
    console.log('not valid data has been sent in the query');
  }
  next() as Function;
};

export default middleware;
