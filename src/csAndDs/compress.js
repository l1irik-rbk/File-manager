import * as path from 'path';
import * as zlib from 'zlib';
import * as fs from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'node:util';
import { rm } from 'node:fs/promises';
import { OPERATION_FAILED } from '../../utils/errors.js';
import exists from '../../utils/exists.js';
import { currentDir } from '../../src/nwd/currentDir.js';
import getDir from '../../utils/getDir.js';

const pipe = promisify(pipeline);

const compress = async (pathToCompressFile, pathToNewDirectory) => {
  try {
    const pathToFile = path.join(currentDir, pathToCompressFile);
    const fileBase = path.parse(pathToFile).base;
    const pathToDirectory = path.join(currentDir, pathToNewDirectory);

    const accessResponseFile = await exists(pathToFile);
    const accessResponseDirectory = await exists(pathToDirectory);
    if (!accessResponseFile || !accessResponseDirectory) throw new Error(OPERATION_FAILED);

    const newPath = path.join(pathToDirectory, `${fileBase}.br`);

    const brotli = zlib.createBrotliCompress();
    const source = fs.createReadStream(pathToFile);
    const destination = fs.createWriteStream(newPath);

    await pipe(source, brotli, destination);
    await rm(pathToFile);
  } catch (error) {
    console.error(error.message);
  } finally {
    getDir();
  }
};

export default compress;

// compress ./desktop/files/fileToRead.txt ./desktop/copy123
