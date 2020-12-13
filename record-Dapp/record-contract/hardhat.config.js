require('@nomiclabs/hardhat-waffle');
const dotenv = require('dotenv');
dotenv.config();

const PRIVATE_KEY = `0x${process.env.DEPLOY_PRIVATE_KEY}`;
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {},
    ganache: {
      url: 'HTTP://127.0.0.1:7545',
    },
    volta: {
      url: 'https://volta-rpc.energyweb.org/',
      chainId: 73799,
      accounts: [PRIVATE_KEY],
    },
  },
  solidity: '0.7.0',
};

/***
 * Deploy command
 * npx hardhat run --network <your-network> scripts/deploy_record.js
 */
