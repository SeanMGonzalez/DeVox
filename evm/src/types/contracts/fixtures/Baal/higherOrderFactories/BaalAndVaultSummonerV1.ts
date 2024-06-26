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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export declare namespace BaalAndVaultSummonerV1 {
  export type VaultStruct = {
    id: PromiseOrValue<BigNumberish>;
    active: PromiseOrValue<boolean>;
    daoAddress: PromiseOrValue<string>;
    vaultAddress: PromiseOrValue<string>;
    name: PromiseOrValue<string>;
  };

  export type VaultStructOutput = [
    BigNumber,
    boolean,
    string,
    string,
    string
  ] & {
    id: BigNumber;
    active: boolean;
    daoAddress: string;
    vaultAddress: string;
    name: string;
  };
}

export interface BaalAndVaultSummonerV1Interface extends utils.Interface {
  functions: {
    "_baalSummoner()": FunctionFragment;
    "deactivateVaultAsDao(uint256,address)": FunctionFragment;
    "delegates(address)": FunctionFragment;
    "initialize()": FunctionFragment;
    "owner()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setDelegate(address,address)": FunctionFragment;
    "setNewVault(address,address,string)": FunctionFragment;
    "setSummonerAddr(address)": FunctionFragment;
    "setVault(uint256,bool)": FunctionFragment;
    "summonBaalAndVault(bytes,bytes[],uint256,bytes32,string)": FunctionFragment;
    "summonVault(address,string)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
    "vaultIdx()": FunctionFragment;
    "vaults(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_baalSummoner"
      | "deactivateVaultAsDao"
      | "delegates"
      | "initialize"
      | "owner"
      | "proxiableUUID"
      | "renounceOwnership"
      | "setDelegate"
      | "setNewVault"
      | "setSummonerAddr"
      | "setVault"
      | "summonBaalAndVault"
      | "summonVault"
      | "transferOwnership"
      | "upgradeTo"
      | "upgradeToAndCall"
      | "vaultIdx"
      | "vaults"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_baalSummoner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deactivateVaultAsDao",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "delegates",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setDelegate",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setNewVault",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setSummonerAddr",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setVault",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "summonBaalAndVault",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "summonVault",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "vaultIdx", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "vaults",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "_baalSummoner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deactivateVaultAsDao",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delegates", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setNewVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSummonerAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "summonBaalAndVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "summonVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vaultIdx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vaults", data: BytesLike): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SetDelegate(address,address)": EventFragment;
    "SetVault(tuple)": EventFragment;
    "Upgraded(address)": EventFragment;
    "setSummoner(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetDelegate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SetVault"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "setSummoner"): EventFragment;
}

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<
  [string, string],
  AdminChangedEventObject
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<
  [string],
  BeaconUpgradedEventObject
>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SetDelegateEventObject {
  daoAddress: string;
  delegate: string;
}
export type SetDelegateEvent = TypedEvent<
  [string, string],
  SetDelegateEventObject
>;

export type SetDelegateEventFilter = TypedEventFilter<SetDelegateEvent>;

export interface SetVaultEventObject {
  vault: BaalAndVaultSummonerV1.VaultStructOutput;
}
export type SetVaultEvent = TypedEvent<
  [BaalAndVaultSummonerV1.VaultStructOutput],
  SetVaultEventObject
>;

export type SetVaultEventFilter = TypedEventFilter<SetVaultEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface setSummonerEventObject {
  summoner: string;
}
export type setSummonerEvent = TypedEvent<[string], setSummonerEventObject>;

export type setSummonerEventFilter = TypedEventFilter<setSummonerEvent>;

export interface BaalAndVaultSummonerV1 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BaalAndVaultSummonerV1Interface;

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
    _baalSummoner(overrides?: CallOverrides): Promise<[string]>;

    deactivateVaultAsDao(
      id: PromiseOrValue<BigNumberish>,
      daoAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    delegates(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    initialize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setDelegate(
      daoAddress: PromiseOrValue<string>,
      delegate: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setNewVault(
      daoAddress: PromiseOrValue<string>,
      vaultAddress: PromiseOrValue<string>,
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSummonerAddr(
      baalSummoner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setVault(
      id: PromiseOrValue<BigNumberish>,
      active: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    summonBaalAndVault(
      initializationParams: PromiseOrValue<BytesLike>,
      initializationActions: PromiseOrValue<BytesLike>[],
      saltNonce: PromiseOrValue<BigNumberish>,
      referrer: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    summonVault(
      daoAddress: PromiseOrValue<string>,
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vaultIdx(overrides?: CallOverrides): Promise<[BigNumber]>;

    vaults(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean, string, string, string] & {
        id: BigNumber;
        active: boolean;
        daoAddress: string;
        vaultAddress: string;
        name: string;
      }
    >;
  };

  _baalSummoner(overrides?: CallOverrides): Promise<string>;

  deactivateVaultAsDao(
    id: PromiseOrValue<BigNumberish>,
    daoAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  delegates(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  initialize(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setDelegate(
    daoAddress: PromiseOrValue<string>,
    delegate: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setNewVault(
    daoAddress: PromiseOrValue<string>,
    vaultAddress: PromiseOrValue<string>,
    name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSummonerAddr(
    baalSummoner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setVault(
    id: PromiseOrValue<BigNumberish>,
    active: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  summonBaalAndVault(
    initializationParams: PromiseOrValue<BytesLike>,
    initializationActions: PromiseOrValue<BytesLike>[],
    saltNonce: PromiseOrValue<BigNumberish>,
    referrer: PromiseOrValue<BytesLike>,
    name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  summonVault(
    daoAddress: PromiseOrValue<string>,
    name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vaultIdx(overrides?: CallOverrides): Promise<BigNumber>;

  vaults(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, boolean, string, string, string] & {
      id: BigNumber;
      active: boolean;
      daoAddress: string;
      vaultAddress: string;
      name: string;
    }
  >;

  callStatic: {
    _baalSummoner(overrides?: CallOverrides): Promise<string>;

    deactivateVaultAsDao(
      id: PromiseOrValue<BigNumberish>,
      daoAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    delegates(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(overrides?: CallOverrides): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setDelegate(
      daoAddress: PromiseOrValue<string>,
      delegate: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setNewVault(
      daoAddress: PromiseOrValue<string>,
      vaultAddress: PromiseOrValue<string>,
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSummonerAddr(
      baalSummoner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setVault(
      id: PromiseOrValue<BigNumberish>,
      active: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    summonBaalAndVault(
      initializationParams: PromiseOrValue<BytesLike>,
      initializationActions: PromiseOrValue<BytesLike>[],
      saltNonce: PromiseOrValue<BigNumberish>,
      referrer: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [string, string] & { _daoAddress: string; _vaultAddress: string }
    >;

    summonVault(
      daoAddress: PromiseOrValue<string>,
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    vaultIdx(overrides?: CallOverrides): Promise<BigNumber>;

    vaults(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean, string, string, string] & {
        id: BigNumber;
        active: boolean;
        daoAddress: string;
        vaultAddress: string;
        name: string;
      }
    >;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "SetDelegate(address,address)"(
      daoAddress?: null,
      delegate?: null
    ): SetDelegateEventFilter;
    SetDelegate(daoAddress?: null, delegate?: null): SetDelegateEventFilter;

    "SetVault(tuple)"(vault?: null): SetVaultEventFilter;
    SetVault(vault?: null): SetVaultEventFilter;

    "Upgraded(address)"(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
    Upgraded(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;

    "setSummoner(address)"(summoner?: null): setSummonerEventFilter;
    setSummoner(summoner?: null): setSummonerEventFilter;
  };

  estimateGas: {
    _baalSummoner(overrides?: CallOverrides): Promise<BigNumber>;

    deactivateVaultAsDao(
      id: PromiseOrValue<BigNumberish>,
      daoAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    delegates(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setDelegate(
      daoAddress: PromiseOrValue<string>,
      delegate: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setNewVault(
      daoAddress: PromiseOrValue<string>,
      vaultAddress: PromiseOrValue<string>,
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSummonerAddr(
      baalSummoner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setVault(
      id: PromiseOrValue<BigNumberish>,
      active: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    summonBaalAndVault(
      initializationParams: PromiseOrValue<BytesLike>,
      initializationActions: PromiseOrValue<BytesLike>[],
      saltNonce: PromiseOrValue<BigNumberish>,
      referrer: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    summonVault(
      daoAddress: PromiseOrValue<string>,
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vaultIdx(overrides?: CallOverrides): Promise<BigNumber>;

    vaults(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _baalSummoner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deactivateVaultAsDao(
      id: PromiseOrValue<BigNumberish>,
      daoAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    delegates(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setDelegate(
      daoAddress: PromiseOrValue<string>,
      delegate: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setNewVault(
      daoAddress: PromiseOrValue<string>,
      vaultAddress: PromiseOrValue<string>,
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSummonerAddr(
      baalSummoner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setVault(
      id: PromiseOrValue<BigNumberish>,
      active: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    summonBaalAndVault(
      initializationParams: PromiseOrValue<BytesLike>,
      initializationActions: PromiseOrValue<BytesLike>[],
      saltNonce: PromiseOrValue<BigNumberish>,
      referrer: PromiseOrValue<BytesLike>,
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    summonVault(
      daoAddress: PromiseOrValue<string>,
      name: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vaultIdx(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vaults(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
