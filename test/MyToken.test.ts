import { expect, use } from "chai";
import { deployContract, MockProvider, solidity } from "ethereum-waffle";
import MyTokenJSON from "../build/MyToken.json";
import { MyToken } from "../@types/generated";
import * as ethers from "ethers";

use(solidity);

const { parseEther: toWei } = ethers.utils;

describe("MyToken", () => {
  const [alice, bob] = new MockProvider().getWallets();
  let token: MyToken;

  beforeEach(async () => {
    token = (await deployContract(alice, MyTokenJSON, [
      toWei("1000"),
    ])) as MyToken;
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
