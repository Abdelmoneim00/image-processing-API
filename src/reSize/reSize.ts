import sharp from 'sharp';
import path from 'path';

async function reSize(name: string, wid: number, hei: number) {
  try {
    const firstPath = path.resolve('./', `Nasa.jpg`);
    await sharp(firstPath).resize(wid, hei).toFile(`${name}_${wid}_${hei}.jpg`);
  } catch (err) {
    console.error(err);
  }
}

export default reSize;
