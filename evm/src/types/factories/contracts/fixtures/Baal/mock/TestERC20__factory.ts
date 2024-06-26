/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../../../../common";
import type {
  TestERC20,
  TestERC20Interface,
} from "../../../../../contracts/fixtures/Baal/mock/TestERC20";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_totalSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516108bd3803806108bd83398101604081905261002f91610203565b82516100429060009060208601906100a8565b5081516100569060019060208501906100a8565b506002819055336000818152600360209081526040808320859055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050506102aa565b8280546100b49061026f565b90600052602060002090601f0160209004810192826100d6576000855561011c565b82601f106100ef57805160ff191683800117855561011c565b8280016001018555821561011c579182015b8281111561011c578251825591602001919060010190610101565b5061012892915061012c565b5090565b5b80821115610128576000815560010161012d565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261016857600080fd5b81516001600160401b038082111561018257610182610141565b604051601f8301601f19908116603f011681019082821181831017156101aa576101aa610141565b816040528381526020925086838588010111156101c657600080fd5b600091505b838210156101e857858201830151818301840152908201906101cb565b838211156101f95760008385830101525b9695505050505050565b60008060006060848603121561021857600080fd5b83516001600160401b038082111561022f57600080fd5b61023b87838801610157565b9450602086015191508082111561025157600080fd5b5061025e86828701610157565b925050604084015190509250925092565b600181811c9082168061028357607f821691505b602082108114156102a457634e487b7160e01b600052602260045260246000fd5b50919050565b610604806102b96000396000f3fe608060405234801561001057600080fd5b50600436106100835760003560e01c806306fdde0314610088578063095ea7b3146100a657806318160ddd146100c957806323b872dd146100e0578063313ce567146100f357806370a082311461010d57806395d89b411461012d578063a9059cbb14610135578063dd62ed3e14610148575b600080fd5b610090610173565b60405161009d9190610422565b60405180910390f35b6100b96100b4366004610493565b610201565b604051901515815260200161009d565b6100d260025481565b60405190815260200161009d565b6100b96100ee3660046104bd565b61026d565b6100fb601281565b60405160ff909116815260200161009d565b6100d261011b3660046104f9565b60036020526000908152604090205481565b610090610385565b6100b9610143366004610493565b610392565b6100d261015636600461051b565b600460209081526000928352604080842090915290825290205481565b600080546101809061054e565b80601f01602080910402602001604051908101604052809291908181526020018280546101ac9061054e565b80156101f95780601f106101ce576101008083540402835291602001916101f9565b820191906000526020600020905b8154815290600101906020018083116101dc57829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061025c9086815260200190565b60405180910390a350600192915050565b6001600160a01b0383166000908152600460209081526040808320338452909152812054600019146102d2576001600160a01b0384166000908152600460209081526040808320338452909152812080548492906102cc90849061059f565b90915550505b6001600160a01b038416600090815260036020526040812080548492906102fa90849061059f565b90915550506001600160a01b038316600090815260036020526040812080548492906103279084906105b6565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161037391815260200190565b60405180910390a35060019392505050565b600180546101809061054e565b336000908152600360205260408120805483919083906103b390849061059f565b90915550506001600160a01b038316600090815260036020526040812080548492906103e09084906105b6565b90915550506040518281526001600160a01b0384169033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161025c565b600060208083528351808285015260005b8181101561044f57858101830151858201604001528201610433565b81811115610461576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461048e57600080fd5b919050565b600080604083850312156104a657600080fd5b6104af83610477565b946020939093013593505050565b6000806000606084860312156104d257600080fd5b6104db84610477565b92506104e960208501610477565b9150604084013590509250925092565b60006020828403121561050b57600080fd5b61051482610477565b9392505050565b6000806040838503121561052e57600080fd5b61053783610477565b915061054560208401610477565b90509250929050565b600181811c9082168061056257607f821691505b6020821081141561058357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000828210156105b1576105b1610589565b500390565b600082198211156105c9576105c9610589565b50019056fea2646970667358221220762ed3ddc1c51c1ec271586822a576dca0d9f983648dcbef9c1d9c7baacf507a64736f6c634300080c0033";

type TestERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestERC20__factory extends ContractFactory {
  constructor(...args: TestERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _totalSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestERC20> {
    return super.deploy(
      _name,
      _symbol,
      _totalSupply,
      overrides || {}
    ) as Promise<TestERC20>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _totalSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _totalSupply,
      overrides || {}
    );
  }
  override attach(address: string): TestERC20 {
    return super.attach(address) as TestERC20;
  }
  override connect(signer: Signer): TestERC20__factory {
    return super.connect(signer) as TestERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC20Interface {
    return new utils.Interface(_abi) as TestERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC20 {
    return new Contract(address, _abi, signerOrProvider) as TestERC20;
  }
}
