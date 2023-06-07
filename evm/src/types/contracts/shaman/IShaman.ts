/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface IShamanInterface extends utils.Interface {
  functions: {
    "donate(uint256,string)": FunctionFragment;
    "initialize(address,address,uint256,uint256,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "donate" | "initialize"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "donate",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "donate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;

  events: {};
}

export interface IShaman extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IShamanInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    donate(
      _value: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _moloch: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _pricePerUnit: PromiseOrValue<BigNumberish>,
      _tokensPerUnit: PromiseOrValue<BigNumberish>,
      _target: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  donate(
    _value: PromiseOrValue<BigNumberish>,
    _message: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _moloch: PromiseOrValue<string>,
    _token: PromiseOrValue<string>,
    _id: PromiseOrValue<BigNumberish>,
    _pricePerUnit: PromiseOrValue<BigNumberish>,
    _tokensPerUnit: PromiseOrValue<BigNumberish>,
    _target: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    donate(
      _value: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      _moloch: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _pricePerUnit: PromiseOrValue<BigNumberish>,
      _tokensPerUnit: PromiseOrValue<BigNumberish>,
      _target: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    donate(
      _value: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      _moloch: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _pricePerUnit: PromiseOrValue<BigNumberish>,
      _tokensPerUnit: PromiseOrValue<BigNumberish>,
      _target: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    donate(
      _value: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _moloch: PromiseOrValue<string>,
      _token: PromiseOrValue<string>,
      _id: PromiseOrValue<BigNumberish>,
      _pricePerUnit: PromiseOrValue<BigNumberish>,
      _tokensPerUnit: PromiseOrValue<BigNumberish>,
      _target: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
