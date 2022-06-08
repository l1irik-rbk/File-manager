import performNwdOperation from '../src/nwd/performNwdOperation.js';
import { INVAILD_INPUT } from './errors.js';

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

    default:
      console.log(INVAILD_INPUT);
      break;
  }
};

export default readCommand;
