import { INVAILD_INPUT } from '../../utils/errors.js';
import getDir from '../../utils/getDir.js';
import compress from './compress.js';
import decompress from './decompress.js';

const performCsAndDsOperation = (operationFirstPart, operationSecondPart, operationThirdPart) => {
  if (!operationThirdPart) {
    console.log(INVAILD_INPUT);
    getDir();
    return;
  }

  switch (operationFirstPart) {
    case 'compress':
      compress(operationSecondPart, operationThirdPart);
      break;
    case 'decompress':
      decompress(operationSecondPart, operationThirdPart);
      break;
    default:
      console.log(INVAILD_INPUT);
      break;
  }
};

export default performCsAndDsOperation;
