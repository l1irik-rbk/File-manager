const argv = process.argv;
let user;

argv.forEach((arg) => {
  if (arg.startsWith('--username')) {
    user = arg.split('=')[1];
  }
});

if (!user) {
  console.log(
    `You didn't enter your name. Please type "npm run start -- --username=your_username"`
  );
  process.exit();
}

export const getWelcomMessage = () => {
  console.log(`Welcome to the File Manager, ${user}!\n`);
};

export const getFarewellMessage = () => {
  console.log(`Thank you for using File Manager, ${user}!`);
};
