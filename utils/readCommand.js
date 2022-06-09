import performNwdOperation from '../src/nwd/performNwdOperation.js';
import performOSOperation from '../src/os/performOSOperation.js';
import { INVAILD_INPUT } from './errors.js';
import getDir from './getDir.js';

const readCommand = (inputValue) => {
  const parsedValue = inputValue.trim().split(' ');
  const operationFirstPart = parsedValue[0];
  const operationSecondPart = parsedValue[1];

  switch (operationFirstPart) {
    case 'up':
    case 'ls':
    case 'cd':
      performNwdOperation(operationFirstPart, operationSecondPart);
      break;
    case 'os':
      performOSOperation(operationSecondPart);
      break;
    default:
      console.log(INVAILD_INPUT);
      getDir();
      break;
  }
};

export default readCommand;
