import sharp from 'sharp';
import path from 'path';

async function reSize(name: string, wid: number, hei: number) : Promise < false | undefined> {
  let firstPath: string = path.resolve('./', `${name}.jpg`);
  try {
    await sharp(firstPath)
      .resize(+wid as number, +hei as number)
      .toFile(`${name}_${wid}_${hei}.jpg`);
  } catch {
    return false;
  }
}

export default reSize;
