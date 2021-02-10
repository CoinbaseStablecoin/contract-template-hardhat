import { deployContract } from "ethereum-waffle";
import { provider, wallet } from "./config";
import MyTokenJSON from "../build/MyToken.json";
import { MyToken } from "../@types/generated";
import { utils } from "ethers";

async function main() {
  const signer = wallet.connect(provider);

  const deployer = await signer.getAddress();
  console.log("Deployer address:", deployer);

  const initialSupply = utils.parseEther("1000000");
  const myToken = (await deployContract(signer, MyTokenJSON, [
    initialSupply,
  ])) as MyToken;

  console.log("MyToken deployed at:", myToken.address);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
