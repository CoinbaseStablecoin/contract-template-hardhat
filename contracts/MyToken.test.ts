import { expect } from "chai";
import { MyToken, MyToken__factory } from "../@types/generated";
import hre from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

const { ethers } = hre;
const { parseEther: toWei } = ethers.utils;

describe("MyToken", () => {
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;
  let token: MyToken;

  beforeEach(async () => {
    [alice, bob] = await ethers.getSigners();

    const myTokenFactory = (await hre.ethers.getContractFactory(
      "MyToken"
    )) as MyToken__factory;

    token = await myTokenFactory.deploy(toWei("1000"));
  });

  it("can transfer funds", async () => {
    await token.connect(alice).transfer(bob.address, toWei("100"));
    expect(await token.balanceOf(alice.address)).to.equal(toWei("900"));
    expect(await token.balanceOf(bob.address)).to.equal(toWei("100"));

    await token.connect(bob).transfer(alice.address, toWei("10"));
    expect(await token.balanceOf(alice.address)).to.equal(toWei("910"));
    expect(await token.balanceOf(bob.address)).to.equal(toWei("90"));
  });
});
