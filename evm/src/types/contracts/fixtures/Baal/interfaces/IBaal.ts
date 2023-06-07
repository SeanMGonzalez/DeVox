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

export interface IBaalInterface extends utils.Interface {
  functions: {
    "burnLoot(address[],uint256[])": FunctionFragment;
    "burnShares(address[],uint256[])": FunctionFragment;
    "isManager(address)": FunctionFragment;
    "lootToken()": FunctionFragment;
    "mintLoot(address[],uint256[])": FunctionFragment;
    "mintShares(address[],uint256[])": FunctionFragment;
    "setAdminConfig(bool,bool)": FunctionFragment;
    "setGovernanceConfig(bytes)": FunctionFragment;
    "shamans(address)": FunctionFragment;
    "sharesToken()": FunctionFragment;
    "target()": FunctionFragment;
    "totalSupply()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "burnLoot"
      | "burnShares"
      | "isManager"
      | "lootToken"
      | "mintLoot"
      | "mintShares"
      | "setAdminConfig"
      | "setGovernanceConfig"
      | "shamans"
      | "sharesToken"
      | "target"
      | "totalSupply"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "burnLoot",
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "burnShares",
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isManager",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "lootToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mintLoot",
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "mintShares",
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setAdminConfig",
    values: [PromiseOrValue<boolean>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "setGovernanceConfig",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "shamans",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "sharesToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "target", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "burnLoot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnShares", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isManager", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lootToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintLoot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mintShares", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAdminConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGovernanceConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "shamans", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sharesToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "target", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IBaal extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBaalInterface;

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
      from: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    burnShares(
      from: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isManager(
      shaman: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lootToken(overrides?: CallOverrides): Promise<[string]>;

    mintLoot(
      to: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mintShares(
      to: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAdminConfig(
      pauseShares: PromiseOrValue<boolean>,
      pauseLoot: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setGovernanceConfig(
      _governanceConfig: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    shamans(
      shaman: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sharesToken(overrides?: CallOverrides): Promise<[string]>;

    target(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  burnLoot(
    from: PromiseOrValue<string>[],
    amount: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  burnShares(
    from: PromiseOrValue<string>[],
    amount: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isManager(
    shaman: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lootToken(overrides?: CallOverrides): Promise<string>;

  mintLoot(
    to: PromiseOrValue<string>[],
    amount: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mintShares(
    to: PromiseOrValue<string>[],
    amount: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAdminConfig(
    pauseShares: PromiseOrValue<boolean>,
    pauseLoot: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setGovernanceConfig(
    _governanceConfig: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  shamans(
    shaman: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sharesToken(overrides?: CallOverrides): Promise<string>;

  target(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    burnLoot(
      from: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    burnShares(
      from: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    isManager(
      shaman: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lootToken(overrides?: CallOverrides): Promise<string>;

    mintLoot(
      to: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    mintShares(
      to: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    setAdminConfig(
      pauseShares: PromiseOrValue<boolean>,
      pauseLoot: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setGovernanceConfig(
      _governanceConfig: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    shamans(
      shaman: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sharesToken(overrides?: CallOverrides): Promise<string>;

    target(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    burnLoot(
      from: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    burnShares(
      from: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isManager(
      shaman: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    lootToken(overrides?: CallOverrides): Promise<BigNumber>;

    mintLoot(
      to: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mintShares(
      to: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAdminConfig(
      pauseShares: PromiseOrValue<boolean>,
      pauseLoot: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setGovernanceConfig(
      _governanceConfig: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    shamans(
      shaman: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sharesToken(overrides?: CallOverrides): Promise<BigNumber>;

    target(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    burnLoot(
      from: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    burnShares(
      from: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isManager(
      shaman: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lootToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mintLoot(
      to: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mintShares(
      to: PromiseOrValue<string>[],
      amount: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAdminConfig(
      pauseShares: PromiseOrValue<boolean>,
      pauseLoot: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setGovernanceConfig(
      _governanceConfig: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    shamans(
      shaman: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sharesToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    target(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
