const argv = process.argv;
let user;

argv.forEach((arg) => {
  if (arg.startsWith('--username')) {
    user = arg.split('=')[1];
  }
});

export const getWelcomMessage = () => {
  console.log(`Welcome to the File Manager, ${user}!\n`);
};

export const getFarewellMessage = () => {
  console.log(`Thank you for using File Manager, ${user}!`);
};
