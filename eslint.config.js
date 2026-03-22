const reactApp = require("eslint-config-react-app");
const reactAppJest = require("eslint-config-react-app/jest");

module.exports = [
  {
    ...reactApp,
  },
  {
    ...reactAppJest,
  },
];
