import performCsAndDsOperation from '../src/csAndDs/performCsAndDsOperation.js';
import performFSOperation from '../src/fs/performFSOperation.js';
import performHashOperation from '../src/hash/performHashOperation.js';
import performNwdOperation from '../src/nwd/performNwdOperation.js';
import performOSOperation from '../src/os/performOSOperation.js';
import { INVAILD_INPUT } from './errors.js';
import getDir from './getDir.js';
import getInvalidInputMessage from './getInvalidInputMessage.js';

const readCommand = (inputValue) => {
  const parsedValue = inputValue.trim().split(' ');
  const operationFirstPart = parsedValue[0];
  const operationSecondPart = parsedValue[1];
  const operationThirdPart = parsedValue[2];

  if (parsedValue.length >= 4) {
    getInvalidInputMessage();
    return;
  }

  switch (operationFirstPart) {
    case 'up':
    case 'ls':
    case 'cd':
      performNwdOperation(operationFirstPart, operationSecondPart, operationThirdPart);
      break;
    case 'cat':
    case 'add':
    case 'rn':
    case 'cp':
    case 'mv':
    case 'rm':
      performFSOperation(operationFirstPart, operationSecondPart, operationThirdPart);
      break;
    case 'os':
      performOSOperation(operationSecondPart, operationThirdPart);
      break;
    case 'hash':
      performHashOperation(operationSecondPart, operationThirdPart);
      break;
    case 'compress':
    case 'decompress':
      performCsAndDsOperation(operationFirstPart, operationSecondPart, operationThirdPart);
      break;
    case '.exit':
      process.exit();
    default:
      console.log(INVAILD_INPUT);
      getDir();
      break;
  }
};

export default readCommand;
