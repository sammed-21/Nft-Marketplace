import { HardhatUserConfig } from "hardhat/types";
require("@nomiclabs/hardhat-ethers");

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    artifacts: "./artifacts",
    cache: "./cache",
    tests: "./test",
    dependencies: "./node_modules/@openzeppelin/contracts",
  },
};

export default config;