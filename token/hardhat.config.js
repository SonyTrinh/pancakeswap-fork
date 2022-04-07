require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

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
  solidity: "0.6.12",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      gasPrice: 20,
      saveDeployments: true,
    },
    hardhat: {},
    bsc: {
      url: "https://bsc-dataseed1.binance.org/",
      chainId: 56,
      gasPrice: 1000000000,
      accounts: [process.env.PRIVATE_KEY],
    },
    bsctest: {
      url: "https://data-seed-prebsc-2-s3.binance.org:8545/",
      gasPrice: 10000000000,
      blockGasLimit: 100000,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY // bscscan/etherscan api key for verification
  },
};
