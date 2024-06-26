/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../../common";
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

export interface MockBaalInterface extends utils.Interface {
  functions: {
    "burnLoot(address,uint256)": FunctionFragment;
    "lootPaused()": FunctionFragment;
    "lootToken()": FunctionFragment;
    "mintLoot(address,uint256)": FunctionFragment;
    "setLootPaused(bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "burnLoot"
      | "lootPaused"
      | "lootToken"
      | "mintLoot"
      | "setLootPaused"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "burnLoot",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "lootPaused",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lootToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mintLoot",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setLootPaused",
    values: [PromiseOrValue<boolean>]
  ): string;

  decodeFunctionResult(functionFragment: "burnLoot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lootPaused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lootToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintLoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setLootPaused",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MockBaal extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockBaalInterface;

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
    burnLoot(
      _from: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lootPaused(overrides?: CallOverrides): Promise<[boolean]>;

    lootToken(overrides?: CallOverrides): Promise<[string]>;

    mintLoot(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setLootPaused(
      paused: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  burnLoot(
    _from: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lootPaused(overrides?: CallOverrides): Promise<boolean>;

  lootToken(overrides?: CallOverrides): Promise<string>;

  mintLoot(
    _to: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setLootPaused(
    paused: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    burnLoot(
      _from: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    lootPaused(overrides?: CallOverrides): Promise<boolean>;

    lootToken(overrides?: CallOverrides): Promise<string>;

    mintLoot(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setLootPaused(
      paused: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    burnLoot(
      _from: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    lootPaused(overrides?: CallOverrides): Promise<BigNumber>;

    lootToken(overrides?: CallOverrides): Promise<BigNumber>;

    mintLoot(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setLootPaused(
      paused: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    burnLoot(
      _from: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lootPaused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lootToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintLoot(
      _to: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setLootPaused(
      paused: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
