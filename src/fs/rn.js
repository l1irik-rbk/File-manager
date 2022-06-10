import * as path from 'path';
import { rename as renameFile } from 'node:fs/promises';
import { OPERATION_FAILED } from '../../utils/errors.js';
import exists from '../../utils/exists.js';
import { currentDir } from '../../src/nwd/currentDir.js';
import getDir from '../../utils/getDir.js';

const rn = async (pathToRenameFile, newFileName) => {
  try {
    const pathToFile = path.join(currentDir, pathToRenameFile);
    const parsedPath = path.parse(pathToFile);
    const newPath = path.format({
      ...parsedPath,
      name: newFileName,
      base: `${newFileName}${parsedPath.ext}`,
    });

    const accessResponse = await exists(pathToFile);
    if (!accessResponse) throw new Error(OPERATION_FAILED);

    await renameFile(pathToFile, newPath);
  } catch (error) {
    console.error(error.message);
  } finally {
    getDir();
  }
};

export default rn;
