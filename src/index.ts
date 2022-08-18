import express from 'express';
import fs from "fs"

const app = express();

const Port = 8000;

app.get('/image', (req, res) => {
  res.send("it's working!");
});

app.listen(Port, () => {
  console.log(`app is now running on localhost:${Port}`);
});

const path = `E:/image processing API/src/tests/Nasa.jpg`;

if(fs.existsSync(path)) {
  console.log(true)
}else {
  console.log(false)
}

console.log(path)


export default app;