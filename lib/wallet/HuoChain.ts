import { BaseWallet } from "./types";

export class HuoChain implements BaseWallet {
  isInit = false;

  async init() {
    if (this.isInit) return;
    this.isInit = true;
  }

  sign(data: string): Promise<string> {
    return Promise.resolve("huochain");
  }
}

export interface HuoChainUser {
  account: string;
  privateKey: string;
}
