const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ForkCake", function () {
  it("Should return the new forkCake once it's changed", async function () {
    const [ owner ] = await ethers.getSigners();

    const ForkCake = await ethers.getContractFactory("ForkCakeToken");
    const forkCake = await ForkCake.deploy();
    await forkCake.deployed();

    const ownerAddress = await forkCake.owner();

    expect(ownerAddress).to.equal(owner.address);
  });
});
