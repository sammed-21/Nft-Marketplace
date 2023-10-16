import { HardhatUserConfig } from "hardhat/types";
require("@nomiclabs/hardhat-ethers");
 
import "dotenv/config"
const MUMBAI_URL = process.env.MUMBAI_URL as string
const PRIVATE_KEY = process.env.PRIVATE_KEY as string;

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
  networks: {
    mumbai: {
      url: MUMBAI_URL,
      accounts:[PRIVATE_KEY],
    }
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