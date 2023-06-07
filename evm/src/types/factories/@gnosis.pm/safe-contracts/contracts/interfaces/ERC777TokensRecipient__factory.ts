/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  ERC777TokensRecipient,
  ERC777TokensRecipientInterface,
} from "../../../../../@gnosis.pm/safe-contracts/contracts/interfaces/ERC777TokensRecipient";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "tokensReceived",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ERC777TokensRecipient__factory {
  static readonly abi = _abi;
  static createInterface(): ERC777TokensRecipientInterface {
    return new utils.Interface(_abi) as ERC777TokensRecipientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC777TokensRecipient {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC777TokensRecipient;
  }
}
