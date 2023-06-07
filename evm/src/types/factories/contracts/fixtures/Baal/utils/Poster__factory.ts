/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../../../common";
import type {
  Poster,
  PosterInterface,
} from "../../../../../contracts/fixtures/Baal/utils/Poster";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        indexed: true,
        internalType: "string",
        name: "tag",
        type: "string",
      },
    ],
    name: "NewPost",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        internalType: "string",
        name: "tag",
        type: "string",
      },
    ],
    name: "post",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506101d0806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80630ae1b13d14610030575b600080fd5b61004361003e3660046100ef565b610045565b005b818160405161005592919061015b565b6040518091039020336001600160a01b03167f6c7f3182d7e4cb876251f9ae1489975fdbbf15d9f35d393f2ac9b1ff57cec69f868660405161009892919061016b565b60405180910390a350505050565b60008083601f8401126100b857600080fd5b50813567ffffffffffffffff8111156100d057600080fd5b6020830191508360208285010111156100e857600080fd5b9250929050565b6000806000806040858703121561010557600080fd5b843567ffffffffffffffff8082111561011d57600080fd5b610129888389016100a6565b9096509450602087013591508082111561014257600080fd5b5061014f878288016100a6565b95989497509550505050565b8183823760009101908152919050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f1916010191905056fea2646970667358221220482c3d1e098f384bdfddad9c380676ffb1f3e0851d7575d608669733e397b63864736f6c634300080c0033";

type PosterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PosterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Poster__factory extends ContractFactory {
  constructor(...args: PosterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Poster> {
    return super.deploy(overrides || {}) as Promise<Poster>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Poster {
    return super.attach(address) as Poster;
  }
  override connect(signer: Signer): Poster__factory {
    return super.connect(signer) as Poster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PosterInterface {
    return new utils.Interface(_abi) as PosterInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Poster {
    return new Contract(address, _abi, signerOrProvider) as Poster;
  }
}