import express from 'express';
import {promises as fsPromises} from "fs"

const app = express();

const Port = 8000;

app.get('/image', (req, res) => {
  res.send("it's working!");
});

app.listen(Port, () => {
  console.log(`app is now running on localhost:${Port}`);
});

export default app;
