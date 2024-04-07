require("@nomiclabs/hardhat-waffle");
// for using .env file which contains private info. 
require('dotenv').config();
const TEST_PRIVATE_KEY = "130e53f64feb5d756d84a73a4a339ef4a91f03fe2d8248a39947ed4ec380b188";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  // You can customize which network is used by default when running Hardhat by setting
  // the config's defaultNetwork field. If you omit this config, its default value is "hardhat"
  defaultNetwork: "hub",
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true
    },
    // rinkeby: {
    //   url: "https://eth-mainnet.alchemyapi.io/v2/123abc123abc123abc123abc123abcde",
    //   accounts: [privateKey1, privateKey2, ...]
    // }
    hub: {
      url: "https://rpc.testnet.oasys.games",
      chainId: 9372,
      // The address to use as default sender. If not present the first account of the node is used
      //from: ,
      // Its value should be "auto" or a number. If a number is used, it will be the gas limit used by default in every transaction.
      // If "auto" is used, the gas limit will be automatically estimated. Default value: "auto"
      gas: "auto",
      // gas: 2500000,
      // Its value should be "auto" or a number. This parameter behaves like gas. Default value: "auto"
      gasPrice: "auto",
      // gasPrice: 25000000000,
      // A number used to multiply the results of gas estimation to give it some slack due to the uncertainty 
      // of the estimation process. Default value: 1
      //gasMultiplier: 1,
      // This field controls which accounts Hardhat uses. It can use the node's accounts (by setting it to "remote"), a list
      // of local accounts (by setting it to an array of hex-encoded private keys), or use an HD Wallet. Default value: "remote"
      accounts: [`0x${TEST_PRIVATE_KEY}`],
      // You can use this field to set extra HTTP Headers to be used when making JSON-RPC requests. It accepts a JavaScript
      // object which maps header names to their values. Default value: undefined
      //httpHeaders: '',
      timeout: 500000,
      allowUnlimitedContractSize: true
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};

