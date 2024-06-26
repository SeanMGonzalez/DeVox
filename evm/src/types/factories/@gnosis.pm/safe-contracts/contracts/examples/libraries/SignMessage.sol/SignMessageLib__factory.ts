/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  SignMessageLib,
  SignMessageLibInterface,
} from "../../../../../../../@gnosis.pm/safe-contracts/contracts/examples/libraries/SignMessage.sol/SignMessageLib";
import type { PromiseOrValue } from "../../../../../../../common";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "msgHash",
        type: "bytes32",
      },
    ],
    name: "SignMsg",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "getMessageHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "signMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610392806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80630a1028c41461003b57806385a5affe14610060575b600080fd5b61004e610049366004610220565b610075565b60405190815260200160405180910390f35b61007361006e3660046102d1565b610187565b005b6000807f60b3cbf8b4a223d68d641b3b6ddf9a298e7f33710cf3d3a9d1146b5a6150fbca60001b83805190602001206040516020016100be929190918252602082015260400190565b60408051601f19818403018152828252805160209182012063f698da2560e01b84529151919350601960f81b92600160f81b92309263f698da2592600480820193918290030181865afa158015610119573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061013d9190610343565b6040516001600160f81b0319938416602082015292909116602183015260228201526042810182905260620160405160208183030381529060405280519060200120915050919050565b60006101c883838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061007592505050565b600081815260076020526040808220600190555191925082917fe7f4675038f4f6034dfcbbb24c4dc08e4ebf10eb9d257d3d02c0f38d122ac6e49190a2505050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561023257600080fd5b813567ffffffffffffffff8082111561024a57600080fd5b818401915084601f83011261025e57600080fd5b8135818111156102705761027061020a565b604051601f8201601f19908116603f011681019083821181831017156102985761029861020a565b816040528281528760208487010111156102b157600080fd5b826020860160208301376000928101602001929092525095945050505050565b600080602083850312156102e457600080fd5b823567ffffffffffffffff808211156102fc57600080fd5b818501915085601f83011261031057600080fd5b81358181111561031f57600080fd5b86602082850101111561033157600080fd5b60209290920196919550909350505050565b60006020828403121561035557600080fd5b505191905056fea2646970667358221220656a261125a7633544d8ffd9d94c3f3b9bd85c439e7e577c7631aedb9474f7bd64736f6c634300080c0033";

type SignMessageLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SignMessageLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SignMessageLib__factory extends ContractFactory {
  constructor(...args: SignMessageLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SignMessageLib> {
    return super.deploy(overrides || {}) as Promise<SignMessageLib>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SignMessageLib {
    return super.attach(address) as SignMessageLib;
  }
  override connect(signer: Signer): SignMessageLib__factory {
    return super.connect(signer) as SignMessageLib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SignMessageLibInterface {
    return new utils.Interface(_abi) as SignMessageLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SignMessageLib {
    return new Contract(address, _abi, signerOrProvider) as SignMessageLib;
  }
}
