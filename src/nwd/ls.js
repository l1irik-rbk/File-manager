import { readdir } from 'node:fs/promises';
import { currentDir } from './currentDir.js';
import exists from '../../utils/exists.js';
import getDir from '../../utils/getDir.js';
import { OPERATION_FAILED } from '../../utils/errors.js';

const list = async () => {
  try {
    const accessResponse = await exists(currentDir);
    if (!accessResponse) throw new Error(OPERATION_FAILED);
    const files = await readdir(currentDir);
    console.log(files);
  } catch (error) {
    console.error(error.message);
  } finally {
    getDir();
  }
};
export default list;
