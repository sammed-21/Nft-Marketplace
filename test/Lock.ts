import { expect } from "chai";
import { ethers } from "hardhat";
describe('NFTMarket', () => {
  it("should do something", async () => {
    const NFTMarket = await ethers.getContractFactory("NFTMarket")
    const nftMarket = await NFTMarket.deploy();
    await nftMarket.deployed();

    const tokenURI = 'https://some-token.uri/';
    const transaction = await nftMarket.createNFT(tokenURI);
    const receipt = await transaction.wait()
    console.log(receipt);
    const tokenID = receipt.events[0].args.tokenID;
    const mintedTokenURI =await nftMarket.tokenURI(tokenID);
    expect(mintedTokenURI).to.equal('tokenURI')
  })
})