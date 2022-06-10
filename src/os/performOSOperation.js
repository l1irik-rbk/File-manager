import { INVAILD_INPUT } from '../../utils/errors.js';
import * as os from 'os';
import getDir from '../../utils/getDir.js';
import getInvalidInputMessage from '../../utils/getInvalidInputMessage.js';

const performOSOperation = (operationSecondPart, operationThirdPart) => {
  if (operationThirdPart) {
    getInvalidInputMessage();
    return;
  }

  switch (operationSecondPart) {
    case '--EOL':
      const EOL = os.EOL;
      console.log(`Default system End-Of-Line: ${JSON.stringify(EOL)}`);
      break;
    case '--cpus':
      const CPUS = os.cpus();
      const totalCPUS = CPUS.length;
      const CPUSInfo = CPUS.map((CPU) => CPU.model);
      console.log(`Amount of CPUS: ${totalCPUS}`);
      console.log(CPUSInfo);
      break;
    case '--homedir':
      const homedir = os.homedir();
      console.log(`Home directory: ${homedir}`);
      break;
    case '--username':
      const username = os.userInfo().username;
      console.log(`Current system user name: ${username}`);
      break;
    case '--architecture':
      const CPUArchitecture = os.arch();
      console.log(`CPU architecture: ${CPUArchitecture}`);
      break;
    default:
      console.log(INVAILD_INPUT);
      break;
  }
  getDir();
};

export default performOSOperation;
