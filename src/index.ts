import express from 'express';
import fs from 'fs';
import routes from './routes/routes';

const app = express();

const Port = 8000;

app.use('/image', routes);

app.get;

app.listen(Port, () => {
  console.log(`app is now running on localhost:${Port}`);
});

export default app;
