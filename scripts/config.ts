import { ethers } from "ethers";

export const MNEMONIC =
  process.env.MNEMONIC ||
  "myth like bonus scare over problem client lizard pioneer submit female collect";

export const wallet = ethers.Wallet.fromMnemonic(MNEMONIC);
export const RPC_URL = process.env.RPC_URL || "http://0.0.0.0:8545";
export const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
