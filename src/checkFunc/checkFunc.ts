import path from 'path';
import fs from 'fs';

export function check(
  first: unknown,
  second: string,
  third: string
): undefined | false {
  if (
    typeof first !== 'string' ||
    isNaN(+second) ||
    typeof +third !== 'number'
  ) {
    return false;
  }
}

export function checkName(para: string): boolean {
  if (fs.existsSync(path.resolve('./', `${para}.jpg`))) {
    return true;
  } else {
    return false;
  }
}
